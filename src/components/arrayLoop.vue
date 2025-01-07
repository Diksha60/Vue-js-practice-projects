<template>
    <h1>Array and Loop</h1>
    <ul>
        <li v-for="language in languages" :key="language">
            {{ language }}
        </li>
    </ul>

    <p v-for="user in users" :key="user.id">Name: {{ user.name }}</p>
    <p v-for="user in users" :key="user.id">Email: {{ user.email }}</p>
</template>

<script>
export default {
    name: "ArrayLoop",
    data() {
        return{
            languages : ['Php', 'React', 'Vue js', 'Html', 'Java'],
            users: [
                {
                    id: 1,
                    name: "Regan Rai",
                    email: "regan@gmail.com"
                },
                {
                    id: 2,
                    name: "Asmita Rai",
                    email: "asmita@gmail.com"
                },
                {
                    id: 3,
                    name: "Rinu Rai",
                    email: "rinu@gmail.com"
                },
            ]
        }
    }
}
</script>