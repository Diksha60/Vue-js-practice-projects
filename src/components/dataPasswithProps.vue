<template>

    <div>
        <div>
            <h3>{{ teacherData.id }}</h3>
            <h3>{{ teacherData.name }}</h3>
            <h3>{{ teacherData.subject }}</h3>

            <button v-on:click="showNameofTeacher(teacherData.name)">Show Name</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "DataPasswithProps",
    props: {
        teacherData: Object,
        showNameofTeacher: Function,
    }
}
</script>