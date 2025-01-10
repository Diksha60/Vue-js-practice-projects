<template>
    <h1>Dynamic Routing</h1>
<h1>{{ profile }}'s Profile</h1>
</template>

<script>
import {
    useRoute
} from 'vue-router';

export default {
    name: "ProfileComponent",
    data() {
        return {
            profile: '',
        }
    },
    mounted() {
        const route = useRoute()
        console.log("route", route.params.name)
        this.profile=route.params.name
    }
}
</script>

<!-- we can pass multiple data through route's path -->