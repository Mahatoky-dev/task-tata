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

- [ok] permetre la modification d'une tache
    - [ok] fonction pour cree le bouton modif
        - [ok] quand on clic sur modif , le contenu du task va etre transmi dans une placeload d'un input quand l'input est validé , le contenu change a celui qui a ete modifeir
            - [ok] cree l'input avec le contenu du text en plasload
            - [ok] cree un bouton update
            - [ok] ajouté un listner a upda te 
            - [ok] lors du clique c'est le contenu de l'input qui va etre comme task
    - [ok] ajout du btn modif dans task

### bug : quand on modifie puis qu'on valide les modificatjon d' une task qui a des task fille , les tasque fille disparaise , ce qui est normal car on a remplace le task directement par l'input lors d'un modife . 
    => une soulution posible est de stoquer le contenu principale de la task dans une article precise . et quand on modifie , c'est cette contenu pricipale qui est transforme en input mais pas le task completement.
    
- la modification se fera maintenant en double cliquant sur le task
- lors de la creation du task :
    - on va ajouté le listner qui va mermetre la modification du contenu
        - la fonction qui va ajouté le listner va :
            - identifier le double clic sur le task
            - faire les meme action que le bouton lors du double clique.