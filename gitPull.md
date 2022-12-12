# S06-oKanban-OlivierHachette

## Format saisons

S06 et S07 : 1 semaine (5 jours)

Parcours le 11ème jour

Tous les jours, matinée : correction et notions, fin de matinée ou après-midi c'est "challenge"

Solo ou Groupe (maximum 3), dans tous les cas vous avez possibilité d'utiliser l'entraide, vous pouvez utiliser les issues github (fonctionnement plus proche de l'apothéose).

Chacun a son repo.

**S06** : c'est le back (API).

**S07** : c'est le front.

## E01

- API ?
  - JSON
  - Monolithique vs Modulaires (Microservices)
- Git (!)
- Projet : oKanban
  - Cahier des charges
  - ... MCD / user stories
- Verification git

### JSON

Pour transformer un objet javascript en JSON, on mets entre guillemets doubles les clefs, le texte doit aussi être entre guillemets doubles. On peut utiliser les 3 types primitifs et les objets et array mais pas les fonctions ou objets customs.

On ne fait pas la transformation à la main, mais à l'aide d'une API disponible dans javascript.

Pour voir le JSON sur le navigateur : extension JSON viewer.

## Git

### Fonctionnement

On a le repo du prof qui est le repo faisant foi duquel on va faire des pull pour mettre à jour la branch master. Chaque jour pour faire votre code, vous reviendrez sur la branch master et vous créez une nouvelle branche pour travailler (on ne travaille surtout pas sur la branche master !)

### Liste des commandes

(une fois le clone effectué, à refaire si nouveau clone)

- `git remote add correction git@github.com:O-clock-Moai/S06-oKanban-OlivierHachette.git` : rajoute correction comme étant un repo distant à votre repertoire

Puis tous les jours :

- pour récupérer la correction, sur la branch master : `git pull correction main`
- la première fois (ou si plus tard erreur) il y aura une erreur 'unrelated history' il faut donc faire la commande `git pull --no-edit --allow-unrelated-histories -X theirs correction main`
- il faut ensuite changer de branche :

  - `git checkout -b branchJ1` (par exemple J1, J2, etc.) l'option `-b` créé la branche
  - `git add .`
  - `git commit -m "[WIP] Message de commit"`
  - `git push`
    - La première fois après création d'une branche, il va vous dire de faire la commande `git push --set-upstream origin <nomDeLaBranche>` - copiez-collez et faites la commande
  - `git checkout <nomDeBranche>` ne fonctionne pas si vous avez des modifications en cours non commité

- Pour revenir sur master `git checkout master`

  - Pour savoir sur quelle branche vous êtes : `git status`

- Pour voir les remotes : `git remote -v`

[Lien du o'Challenge](https://kourou.oclock.io/o-challenge/?ref=Ty1jbG9jay1Nb2FpL1MwNi1vS2FuYmFuLU9saXZpZXJIYWNoZXR0ZXxPLWNsb2NrLU1vYWl8UzA2LW9LYW5iYW58MjAyMi0xMi0xMlQwOTowMHw=)

## (bashrc)

Le .bashrc est un script qui est lancé dans chaque terminal que vous ouvrez. On peut donc customiser un peu l'environnement en rajoutant des petits scripts, comme par exemple modifier l'affichage du prompt dans le terminal. Vous pouvez remplacer votre fichier `~/.bashrc` par celui que vous ai copié collé dans docs.

Le nom de la branche est aussi en bas à gauche de vscode si jamais.
