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

### bug : quand on modifie puis qu'on valide les modificatjon d' une task qui a des task fille , les tasque fille disparaise , ce qui est normal car on a remplace le task directement par l'input lors d'un modife . **fixé**
    => une soulution posible est de stoquer le contenu principale de la task dans une article precise . et quand on modifie , c'est cette contenu pricipale qui est transforme en input mais pas le task completement.

    on va ajouté une header a la task :
    cette header va contenir toute les info de base de la task comme :
        - [ok] la description 
        - [ok] les action
    lors de la modif de cette tache , c'est cette header qui va etre remplacé par l'input.
    et c'est ce qui va etre modifier lors de la modif . cela permetra ne pas touché au task fille.
- [ok] la modification se fera maintenant en double cliquant sur le task
- [ok] lors de la creation du task :
    - [ok] on va ajouté le listner qui va mermetre la modification du contenu
        - [ok] la fonction qui va ajouté le listner va :
            - [ok] identifier le double clic sur le task
            - [ok] faire les meme action que le bouton lors du double clique.

## lors du modification d'une task on va pas utiliser une bouton mais la touche entrer
- [ok] savgarder dans une fonction la methode de sauvgarde des chagement.
- [ok] enlevé la touche validé dans le changement de texte. dans l'input temp
- [ok] utiliser une event listner keyDown et condition entrer . 

## lors de l'ajout d'une task on voudrais ne pas affiché le bouton validé mais tout de suite pouvoir validé avec la touche entré
- [ok] racuperer l'input d'ajout de task fille 
- [ok] cree une task sans contenu
- [ok] utilisser la fonction de modification de task

## la nouvelle task , ajouté via touche entrer sur une task , va se faire apres le task , mais pas a la fin de la liste de task.
- [ok] identifier la fonction qui ecoute a touche enter
- [ok] cree fonction ajoutTaskAfter(task)

## lorsqu'on valide une task apres modificaton ou ajout , il va avoir le focus
- identifier la fonction modif task  
- donné le focus au task 
    ## bug quand on ajoute une task , l'input d'une nouvelle task ouvre directement
    cause bulbbing
    fixé par stopBulbbing