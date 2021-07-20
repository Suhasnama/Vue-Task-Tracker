const app = Vue.createApp({
    data() {
        return {
            firstName: null,
            lastName: null,
            age: null,
            email: null,
            picture: null,
            gender: null,
        }
    },
    methods: {
        async getUser() {
            // Get data
            const users = (await (await fetch('https://randomuser.me/api/'))
                .json())
                .results

            // update UI
            this.firstName = users[0].name.first
            this.lastName = users[0].name.last
            this.age = users[0].dob.age
            this.email = users[0].email
            this.picture = users[0].picture.large
            this.gender = users[0].gender
        }
    },

    // VUE life cycle method. (special method)
    mounted() {
        this.getUser()
        console.log(this.$el);
    }

})

app.mount('#app')