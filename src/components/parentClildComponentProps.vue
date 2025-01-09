<template>
<h1>Parent Child Component</h1>
<h3>{{ users }}</h3>

<h2>Teacher List</h2>

<ul>
    <li v-for="teacher in teachers" :key="teacher.id">
        <DataPasswithProps :teacherData="teacher" :showNameofTeacher="showNameofTeacher"/>
    </li>
</ul>

<h2>Student List</h2>

<ul>
    <li v-for="student in students" :key="student.id">
        <DataPasswithProps2 :studentData="student" :showStudentName="showStudentName" :getUserName="getUserName"/>
    </li>
</ul>

<h3>{{ users }}</h3>
</template>

<script>
import DataPasswithProps from './dataPasswithProps.vue';
import DataPasswithProps2 from './dataPasswithProps2.vue';

export default {
    name: "ParentChildComponentProps",
    components: {
        DataPasswithProps,
        DataPasswithProps2
    },
    data() {
        return {
            teachers: [{
                    id: "T1",
                    name: "Rahul Baral",
                    subject: "Math"
                },
                {
                    id: "T2",
                    name: "Muna Khadka",
                    subject: "Nepali"
                },
                {
                    id: "T3",
                    name: "Ratna Rai",
                    subject: "Science"
                },
            ],

            students: [{
                    id: "S1",
                    name: "Rohit Kumar"
                },
                {
                    id: "S2",
                    name: "Kamal Khatri"
                },
                {
                    id: "S3",
                    name: "Melina Rai"
                },
            ],
            users: "",
        }
    },
    methods: {
        showNameofTeacher(name) {
            alert(name)
        },
        showStudentName(name) {
            alert(name)
        },
        getUserName(name) {
            this.users = name
        }
    }
}
</script>
