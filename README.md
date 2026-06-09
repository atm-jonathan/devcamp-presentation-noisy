# Devcamp Dolibarr — Présentation ATM Consulting

## Lancer la présentation

Ouvrir `index.html` dans un navigateur.

Pour un meilleur rendu (polices Google Fonts), utiliser un serveur local :
```
cd /home/client/devcamp-presentation
python3 -m http.server 8080
# puis ouvrir http://localhost:8080
```

## Navigation

| Touche | Action |
|--------|--------|
| `→` / `Space` | Slide suivante |
| `←` | Slide précédente |
| `F` | Plein écran |
| `Esc` | Vue d'ensemble |

## Ajouter des captures d'écran

Déposer les images dans les dossiers correspondants :

```
assets/img/screenshots/
├── adl/
│   ├── mode-standard.png     # Slide 4 — problème (mode liste standard)
│   ├── mode-advanced.png     # Slide 7 — vue générale mode advanced
│   ├── filtres.png           # Slide 7 — filtres actifs
│   └── colonnes.png          # Slide 7 — sélecteur de colonnes
└── remindme/
    ├── ecran.png             # Slide 12 — rappel type Écran
    ├── evenement.png         # Slide 13 — événement créé dans l'agenda
    ├── mail.png              # Slide 14 — config rappel mail
    ├── creation.png          # Slide 16 — interface de création
    └── liste.png             # Slide 16 — liste des rappels
```

Les emplacements sans image affichent automatiquement un placeholder.

## Structure des slides

| # | Contenu |
|---|---------|
| 1 | Titre |
| 2 | Au programme |
| 3 | **Section AdvancedDocumentLines** |
| 4 | Le problème |
| 5 | La solution |
| 6 | Fonctionnalités |
| 7 | En images (screenshots) |
| 8 | Documents supportés |
| 9 | **Section RemindMe** |
| 10 | Le principe |
| 11 | 3 types de rappels |
| 12 | Type Écran |
| 13 | Type Événement |
| 14 | Type Mail |
| 15 | Scénarios concrets |
| 16 | En images (screenshots) |
| 17 | Questions / Conclusion |
