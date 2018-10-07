function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
function shuffle(arr) {
    let l = arr.length
    for (let i = 0; i < l; i++) {
        r = i + getRandomInt(l - i)
        t = arr.splice(r,1,arr[i])[0]
        arr.splice(i,1,t)
    }
}
function initTable(arr) {
    l = arr.length
    arr.splice(0, l)
    for (let i = 0; i < l; i++) {
        arr.push(9)
    }
    console.log(arr)
}

new Vue({
    el: '#jeu',
    data: {
        liste: [0, 1, 2, 3, 4, 5, 6, 7, 0, 1, 2, 3, 4, 5, 6, 7],
        table: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
        coup: -1,
        compteur: 8,
        essai: 0
    },
    created: function() {
        this.melanger()
    },
    methods: {
        melanger: function() {
            shuffle(this.liste)
            initTable(this.table)
            this.compteur = 8
            this.essai = 0
        },
        choisir: function(index) {

            // si on reclic sur la meme carte on la retourne
            if (index == this.coup) {
                this.coup = -1
                return this.table.splice(index,1,9)
            }

            // si la carte est deja retournée on fait rien
            if (this.table[index] != 9) {
                return
            }

            // 1er clic on retourne la carte
            if (this.coup == -1) {
                this.table.splice(index,1,this.liste[index])
                this.coup = index
                return
            }

            // a partir d'ici on est en 2eme clic
            this.essai ++

            // cartes identiques
            if (this.liste[index] == this.liste[this.coup]) {
                this.table.splice(index,1,this.liste[index])
                this.coup = -1
                this.compteur --
                return
            }

            // cartes différentes, on affiche la 2eme carte
            // puis on retourne les 2 cartes
            this.table.splice(index,1,this.liste[index])
            setTimeout(function(){
                this.table.splice(index,1,9)
                this.table.splice(this.coup,1,9)
                this.coup = -1
            }.bind(this), 500);
        }
    }
})