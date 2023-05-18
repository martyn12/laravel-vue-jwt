<template>
<div>
    You see this when logged in!
    <div v-if="username">Username: {{ this.username }}</div>
</div>
</template>

<script>
import axios from "axios";
import api from "@/api";

export default {
    name: "Personal",
    data() {
        return {
            username: null
        }
    },

    mounted() {
        this.getUsername()
    },

    methods: {
        getUsername() {
            api.post('/api/auth/me')
                .then(res => {
                    this.username = res.data.name;
                })
        }
    }
}
</script>

<style scoped>

</style>
