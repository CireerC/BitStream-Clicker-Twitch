<role>
Tu es un développeur fullstack senior spécialisé dans la conception de jeux incrémentaux (idle games) pour le web. Tu maîtrises les mathématiques de progression des idle games, les architectures frontend modulaires, et l'intégration d'APIs tierces (Twitch).
</role>

<context>
Le projet est un jeu incrémental web hébergé sur Vercel, jouable directement dans un navigateur sans installation. Le jeu repose sur une architecture modulaire : plusieurs mini-modules indépendants (clicker, production passive, mini-jeux aléatoires) alimentent une monnaie commune qui débloque des améliorations. La progression persiste via localStorage avec une logique idle qui génère des ressources même lorsque le joueur est absent. Une intégration Twitch applique un multiplicateur de gains lorsque le stream est en ligne, créant un lien direct entre le jeu et la chaîne.

L'objectif est une expérience minimaliste, évolutive et jouable en continu, avec une montée en puissance progressive inspirée des meilleures pratiques mathématiques des idle games.
</context>

<mathematical_reference>
Avant de concevoir toute courbe de progression, de coût d'amélioration ou de taux de production, consulte et applique les formules mathématiques décrites dans cette ressource officielle :
https://www.gamedeveloper.com/design/the-math-of-idle-games-part-i

Utilise notamment :
- La formule de coût exponentiel pour les upgrades : cost(n) = base_cost × growth_rate^n
- Le calcul du temps de retour sur investissement (ROI) pour équilibrer chaque module
- Les courbes de progression logarithmique pour éviter les murs de progression
</mathematical_reference>

<instructions>
Conçois et implémente le jeu incrémental complet en suivant ces étapes dans l'ordre :

1. **Architecture et structure du projet**
   - Initialise un projet Vite + TypeScript déployable sur Vercel
   - Structure les dossiers : `/modules`, `/core`, `/store`, `/ui`, `/integrations`
   - Définis un `GameStore` central (vanilla TS ou Zustand) qui centralise la monnaie, les multiplicateurs globaux et l'état de chaque module

2. **Système de monnaie et de sauvegarde**
   - Implémente une monnaie unique (ex. "Bits") avec un accumulateur global
   - Sauvegarde l'état complet dans localStorage toutes les 10 secondes et à chaque fermeture de page
   - Implémente la logique offline : au rechargement, calcule les ressources générées pendant l'absence (plafonner à 8h max pour l'équilibre)

3. **Module Clicker**
   - Clic de base → +N Bits (N augmente avec les upgrades)
   - Ajoute un système de combo (clics rapides successifs → multiplicateur temporaire)
   - Feedback visuel sur chaque clic (particules, chiffre flottant)

4. **Module Production Passive**
   - Plusieurs "générateurs" achetables (ex. Bot Lv1, Bot Lv2, Farm…)
   - Chaque générateur produit X Bits/seconde
   - Coût d'achat selon la formule exponentielle de la référence mathématique
   - Affiche le BPS (Bits Per Second) total en temps réel

5. **Module Mini-jeux Aléatoires**
   - Un mini-jeu apparaît toutes les 2–5 minutes (intervalle aléatoire)
   - Exemples : clic rapide sur une cible, séquence de touches, question simple
   - Récompense : burst de Bits (x10 du BPS actuel pendant 30 secondes)
   - Interface modale non intrusive avec countdown

6. **Système d'Améliorations (Upgrades)**
   - Arbre d'upgrades débloquables par seuils de Bits totaux gagnés (pas actuels)
   - Catégories : Clicker, Producteurs, Global (multiplicateurs)
   - Chaque upgrade affiche son effet, son coût et son ROI estimé

7. **Intégration Twitch**
   - Appelle l'API Twitch (Helix) pour vérifier si le stream d'une chaîne cible est en ligne
   - Polling toutes les 2 minutes pour minimiser les appels API
   - Si stream en ligne → applique un multiplicateur global ×1.5 sur tous les gains
   - Affiche un badge "🔴 LIVE +50%" dans l'UI avec le nom du jeu streamé

8. **UI et Design**
   - Interface minimaliste mais distinctive — évite les palettes génériques (pas de gradient violet sur blanc)
   - Choisis une typographie unique et une palette cohérente avec des accents forts
   - Animations CSS sur les compteurs (count-up), les achats, les unlocks
   - Layout : panneau gauche (modules actifs), centre (stats + monnaie), droite (upgrades)
   - Responsive desktop-first, lisible sur mobile
</instructions>

<constraints>
- Aucune dépendance backend : tout tourne côté client
- Pas de framework CSS générique (pas de Bootstrap) — utilise du CSS custom ou Tailwind avec une config originale
- Le jeu doit être jouable sans compte Twitch (le bonus est optionnel/conditionnel)
- Toutes les formules mathématiques (coûts, production, progression) doivent être documentées en commentaires avec référence à la source
- Code TypeScript strict, modulaire, avec un fichier de config centrale pour tous les paramètres de balance (`/core/balance.ts`)
</constraints>

<output_format>
Fournis :
1. La structure complète du projet (arborescence de fichiers)
2. Le code source complet de chaque module, fichier par fichier
3. Un fichier `balance.ts` commenté avec toutes les constantes mathématiques et leur justification
4. Un fichier `README.md` avec les instructions de déploiement sur Vercel et la configuration de l'API Twitch

Commence par la structure du projet et le `GameStore` central, puis implémente les modules dans l'ordre listé ci-dessus. Fournis un code production-ready, commenté sur la logique complexe.
</output_format>