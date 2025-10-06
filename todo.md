une aplis permetant de cree un todo mais aussi de faire un pomodoro.

# todo
- importation des libs utiles
    - js
    - css
- creaiton de l'hml de base
    - [ok] une section dedié au stocage de task
- dinamisation des tache
    - [ok] cree fonction pour cree une task
    - [ok] cree fonction pour suprimé une task
    - [ok] cree fonction pour ajouté task
        - [ok] cree fonction pour cree une task
        - [ok] cree fonction pour cree un bouton qui permet de cree une task dans une liste de task
    - [ok] creation du bouton , adst (add sous task)
    - [ok] lors du clic sur le bt, adst :
        - [ok] verifier si il possede des sous task
        - [ok] si non on cree et on demande a l'use d'ajouté l'element dedant
        - [ok] si oui on ajotue simplement l'element dedant

- [ok] permetre la termineson d'une tache
- [ok] ajouté une bouton ok au task
    - [ok] creation de fonction createur de bt ok
    - [ok] mettre le btn ok dans les action de la tache

- permetre la modification d'une tache
    - fonction pour cree le bouton modif
        - quand on clic sur modif , le contenu du task va etre transmi dans une placeload d'un input quand l'input est validé , le contenu change a celui qui a ete modifeir
            - cree l'input avec le contenu du text en plasload
            - cree un bouton update
            - ajouté un listner a upda te 
                 - lors du clique c'est le contenu de l'input qui va etre comme task
    - ajout du btn modif dans task