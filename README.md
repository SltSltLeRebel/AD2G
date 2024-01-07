# AD2G

## MVP : Minimum Viable Product

- Réaliser une fiche de personnages
- exporter la fiche pdf

## User Stories

- En tant qu'utilisateur, je veux pouvoir créer une fiche de personnage
  -> Sur la route `GET /characters/new` se présente un formulaire.
  -> Champs:

  - Caractéristiques: FORCE/CONSISTANCE/DEXTERITE/INTELLIGENCE/SAGESSE/CHARISME : entier entre 0 et 2O
  - Équipement: liste de strings
  - Compétences: checkbox, valeurs booléennes
  - Proficiency bonus: integer libre
  - Armes: objet avec nom, dégâts, type de dégats, bonus, portée, attribut (force ou dextérité, radio)
  - Armure: chiffre
  - Nom: string
  - vitesse: chiffre
  -

- En tant qu'utilisateur, je veux pouvoir exporter la fiche en PDF
  -> Sur la route `GET /characters/new` se présente un bouton "exporter".
  -> Sur la route `POST /characters/export` télécharge le fichier au format PDF.
