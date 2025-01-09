<template>
<div>
    <div>
        <h3>{{ studentData.id }}</h3>
        <h3>{{ studentData.name }}</h3>

        <button v-on:click="showStudentName(studentData.name)">Show Name</button>

        <button v-on:click="getUserName(user)">Get name</button>
    </div>
</div>
</template>

<script>
export default {
    name: "DataPasswithProps2",
    props: {
        studentData: Object,
        showStudentName: Function,
        getUserName: Function,
    },
    data() {
        return {
            user : "Sujan Rai"
        }
    }
}
</script>
