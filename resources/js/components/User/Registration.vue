<template>
    <div class="w-25">
        <input type="email" v-model="email" class="form-control mb-3 mt-3" placeholder="email">
        <input type="text" v-model="name" class="form-control mb-3" placeholder="name">
        <input type="text" v-model="password" class="form-control mb-3" placeholder="password">
        <input type="text" v-model="password_confirmation" class="form-control mb-3" placeholder="confirm password">
        <div v-if="error" class="text-danger">{{error}}</div>
        <input type="submit" @click.prevent="storeUser" class="btn btn-success" value="Sign Up">
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Registration",

    data() {
        return {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            error: ''
        }
    },

    methods: {
        storeUser() {
            axios.post('/api/users', {
                name: this.name,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation
            }).then( res => {
                console.log(res);
            }).catch( error => {
                this.error = error.response.data.error
            })
        }
    }

}
</script>

<style scoped>

</style>
