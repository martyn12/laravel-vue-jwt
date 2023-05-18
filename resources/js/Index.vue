<template>
<div class="p-5">
    <router-link v-if="accessToken" :to="{ name: 'fruit.index' }" class="m-2">fruits</router-link>
    <router-link v-if="!accessToken" :to="{ name: 'user.login' }" class="m-2">Login</router-link>
    <router-link v-if="!accessToken" :to="{ name: 'user.registration' }" class="m-2">Registration</router-link>
    <router-link v-if="accessToken" :to="{ name: 'user.personal' }" class="m-2">Personal</router-link>
    <a v-if="accessToken" @click.prevent="logout" href="#">Logout</a>
    <router-view :key="$route.fullPath"></router-view>
</div>
</template>

<script>
import api from "@/api";
export default {
    name: "Index",
    data() {
        return {
            accessToken: null
        }
    },

    mounted() {
        this.getAccessToken()
    },

    updated() {
        this.getAccessToken()
    },

    methods: {
        getAccessToken() {
            this.accessToken = localStorage.getItem('access_token')
        },
        logout() {
            api.post('/api/auth/logout')
                .then( res => {
                    localStorage.removeItem('access_token')
                    this.$router.push({name: 'user.login'})
                })
        }
    }

}
</script>

<style scoped>

</style>
