<template>
    <div class="w-25">
        <input type="email" v-model="email" class="form-control mb-3 mt-3" placeholder="email">
        <input type="text" v-model="password" class="form-control mb-3" placeholder="password">
        <div v-if="error" class="text-danger">{{error}}</div>
        <input @click.prevent="login" type="submit" class="btn btn-success" value="Sign In">
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Login",
    data() {
        return {
            email: '',
            password: '',
            error: ''
        }
    },

    methods: {
        login() {
            axios.post('/api/auth/login', {
                email: this.email,
                password: this.password
            })
                .then( res => {
                    localStorage.setItem('access_token', res.data.access_token)
                    this.$router.push({name: 'user.personal'})
                })
                .catch( error => {
                    this.error = error.response.data.error
                })
        }
    }
}
</script>

<style scoped>

</style>
