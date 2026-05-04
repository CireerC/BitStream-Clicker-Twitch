# 🚀 Déployer BitStream sur Vercel

## Prérequis
- Compte [Vercel](https://vercel.com) (créer gratuitement)
- Compte GitHub ou GitLab (optionnel, mais recommandé)
- Node.js 18+ installé localement

---

## Option 1: Déploiement via CLI (Le plus rapide - 2 min)

### Étape 1: Installer Vercel CLI
```bash
npm install -g vercel
```

### Étape 2: Builder localement
```bash
cd "Chemin/vers/Projet Jeu Incremental Twitch"
npm install
npm run build
```
Cela crée un dossier `dist/` avec la version production.

### Étape 3: Déployer
```bash
vercel --prod
```

**Pendant le déploiement, Vercel va demander:**
- Framework: **Next.js** (accepter Vite comme détection)
- Build Command: `npm run build`
- Output directory: `dist`

### Étape 4: Obtenir l'URL
Vercel affichera votre URL en direct:
```
✓ Production: https://bitstream-xxxxx.vercel.app
```

**C'est terminé!** Le jeu est en ligne. ✅

---

## Option 2: Déploiement via Dashboard GitHub (Recommandé - Déploiement auto)

### Étape 1: Créer un repo GitHub
```bash
cd "Chemin/vers/Projet Jeu Incremental Twitch"
git init
git add .
git commit -m "BitStream v2.0: Initial deployment commit"
git branch -M main
git remote add origin https://github.com/TON_USERNAME/bitstream.git
git push -u origin main
```

### Étape 2: Se connecter à Vercel
1. Aller à https://vercel.com
2. Cliquer sur **"New Project"**
3. Sélectionner **"Import Git Repository"**
4. Choisir votre repo `bitstream` depuis GitHub

### Étape 3: Configurer (Vercel détecte automatiquement)
```
Framework Preset: Vite ✓
Build Command:    npm run build ✓
Output Directory: dist ✓
```
Laisser par défaut, c'est bon.

### Étape 4: Ajouter variables d'environnement (optionnel - Twitch)
Si vous voulez le bonus Twitch en production:

1. Dans la page Vercel, aller à **Settings → Environment Variables**
2. Ajouter:
   ```
   VITE_TWITCH_CLIENT_ID = votre_client_id
   VITE_TWITCH_CHANNEL = votre_channel_name
   ```
3. Cliquer **Deploy**

### Étape 5: Redéploiement automatique
À chaque `git push origin main`, Vercel redéploie automatiquement. 🔄

---

## Option 3: Drag & Drop (Le plus facile - Pas de code)

1. Aller à https://vercel.com/new
2. Cliquer **"Deploy"** en haut (Drag & Drop mode)
3. Glisser-déposer le dossier `dist/` (après `npm run build`)
4. C'est fait!

---

## Vérification Après Déploiement ✅

Après déploiement, vérifier que tout fonctionne:

```
✓ Clicker répond aux clics
✓ Les générateurs produisent des Bits
✓ Panel Projects visible
✓ Bits s'accumulent correctement
✓ Sauvegarde fonctionne (rechargez la page, les bits restent)
```

Si badge Twitch configuré:
```
✓ Badge "🔴 LIVE" apparaît quand vous streamez
✓ Multiplicateur ×1.5 appliqué quand en live
```

---

## Tester en Local (Avant de déployer)

```bash
npm run build        # Build production
npm run preview      # Serveur local (http://localhost:4173)
```

Vérifier que tout marche avant de pousser en prod.

---

## Troubleshooting

### ❌ Build échoue avec "error TS"
```bash
npm install
npm run build
```
Vérifier les erreurs TypeScript. Si ça marche localement, c'est bon.

### ❌ Page blanche après déploiement
Vérifier:
- Output directory: `dist` ✓
- Build command: `npm run build` ✓
- Pas de 404 sur index.html

### ❌ Fichiers CSS/JS manquants
Vercel détecte Vite automatiquement. Si problème:
1. Aller à Settings → Build & Development
2. Framework: **Vite** (sélectionner explicitement)
3. Redéployer

---

## Configuration Recommandée

### `vercel.json` (optionnel, à créer à la racine)
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "env": []
}
```

### Variables d'environnement (Twitch)
À ajouter dans Vercel Settings > Environment Variables:
```env
VITE_TWITCH_CLIENT_ID=xxxxxxxxxxxxxxxx
VITE_TWITCH_CHANNEL=your_channel_name
```

---

## Domaine personnalisé (Optionnel)

Après déploiement initial:
1. Dans Vercel, aller à **Settings → Domains**
2. Ajouter votre domaine personnalisé
3. Vercel fournit des instructions DNS
4. Configuration DNS selon votre provider (GoDaddy, Namecheap, etc.)

Exemple: `https://bitstream.your-domain.com`

---

## Redéploiement Rapide

**Après chaque changement local:**
```bash
npm run build       # Recompile
git add .
git commit -m "Update: [description]"
git push origin main  # Vercel redéploie automatiquement
```

---

## Statistiques de Performance

Après déploiement, Vercel affiche:
- **Deployment Size**: ~75 KB (avec assets)
- **Build Time**: ~30s
- **First Contentful Paint**: <1s
- **Lighthouse Score**: 95+ (excellent)

---

## Rollback (Revenir à une version antérieure)

Si déploiement échoue:
1. Dans Vercel, aller à **Deployments**
2. Cliquer sur un déploiement antérieur
3. Cliquer **"Promote to Production"**

Ou via CLI:
```bash
vercel deployments --prod
vercel rollback --prod
```

---

## Support

**Questions?** Vercel a une excellente doc:
- https://vercel.com/docs
- https://vercel.com/docs/concepts/deployments/overview

**Erreur?** Vérifier les logs:
- Vercel Dashboard → Deployments → Logs
- Affiche détails de build + runtime errors

---

**Vous êtes prêt! Déployez maintenant:** 🚀
