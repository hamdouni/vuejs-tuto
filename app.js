new Vue({
    el: '#app',
    data: {
        message: 'Salut à toi',
        link: 'http://softinnov.fr',
        persons: ['Brahim', 'Lisa', 'Léo', 'Loukia'],
        visible: true,
        etat: true,
        persontoadd: ""
    },
    methods: {
        bascule: function() {
            this.visible = !this.visible
        },
        reverse: function() {
            this.persons.reverse()
            this.message = this.message.split("").reverse().join("")
        },
        addperson: function() {
            this.persons.unshift(this.persontoadd)
            this.persontoadd = '';
        },
        remove: function(i) {
            this.persons.splice(i,1)
        }
    }
})