/**
 * Supabase REST API client for the leaderboard.
 * Uses fetch directly — no Supabase SDK needed.
 *
 * Required SQL (run once in Supabase SQL Editor):
 *
 *   create table leaderboard (
 *     name text primary key,
 *     score bigint not null default 0,
 *     updated_at timestamptz default now()
 *   );
 *   alter table leaderboard enable row level security;
 *   create policy "read"   on leaderboard for select using (true);
 *   create policy "insert" on leaderboard for insert with check (true);
 *   create policy "update" on leaderboard for update using (true);
 *
 * Required env vars in .env.local:
 *   VITE_SUPABASE_URL=https://xxxx.supabase.co
 *   VITE_SUPABASE_ANON_KEY=eyJ...
 */

const SB_URL  = (import.meta.env.VITE_SUPABASE_URL  as string | undefined) ?? '';
const SB_KEY  = (import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined) ?? '';

export function isSupabaseConfigured(): boolean {
  return SB_URL.length > 0 && SB_KEY.length > 0;
}

export interface LBEntry {
  name: string;
  score: number;
}

const HEADERS = {
  apikey: SB_KEY,
  Authorization: `Bearer ${SB_KEY}`,
  'Content-Type': 'application/json',
};

export async function fetchLeaderboard(): Promise<LBEntry[]> {
  const res = await fetch(
    `${SB_URL}/rest/v1/leaderboard?select=name,score&order=score.desc&limit=20`,
    { headers: HEADERS },
  );
  if (!res.ok) throw new Error(`LB fetch: ${res.status}`);
  return res.json() as Promise<LBEntry[]>;
}

export async function upsertScore(name: string, score: number): Promise<void> {
  const now = new Date().toISOString();
  await fetch(`${SB_URL}/rest/v1/leaderboard`, {
    method: 'POST',
    headers: { ...HEADERS, Prefer: 'resolution=merge-duplicates' },
    body: JSON.stringify({ name, score, updated_at: now }),
  });
}
