<!-- <template>
<h1>Parent Component</h1>

<ul>
    <li v-for="user in users" :key="user.id">
        <ChildwithLoop :details="user" :showName="showName" />
    </li>
</ul>
</template>

<script>
import ChildwithLoop from './childwithLoop.vue';

export default {
    name: "ParentComponent",
    components: {
        ChildwithLoop
    },
    data() {
        return {
            users: [{
                    id: 1,
                    name: "Regan Rai",
                },
                {
                    id: 2,
                    name: "Alisha Rai",
                },
                {
                    id: 3,
                    name: "Sahil Rai",
                },
                {
                    id: 4,
                    name: "Hima Rai",
                },
            ]
        }
    },
    methods: {
        showName(name) {
            alert(name)
        }
    }
}
</script> -->

<template>
    <h1>Parent Component</h1>

    <ul>
        <li v-for="user in users" :key="user.id">
            <ChildwithLoop :details="user" :showName="showName"/>
        </li>
    </ul>
</template>

<script>
import ChildwithLoop from './childwithLoop.vue';

export default {
    name: "ParentComponent",
    components: {
        ChildwithLoop
    },
    data() {
        return {
            users: [
                {
                    id: "R1",
                    name: "Arjun Rai",
                    email: "arjun@gmail.com"
                },
                {
                    id: "R2",
                    name: "Suresh Karki",
                    email: "suresh@gmail.com"
                },
                {
                    id: "R3",
                    name: "Naresh Rai",
                    email: "naresh@gmail.com"
                },
                {
                    id: "R4",
                    name: "Rahul Maske",
                    email: "rahul@gmail.com"
                },
            ]
        }
    },
    methods: {
        showName(name) {
            alert(name)
            console.log(name)
        }
    }
}
</script>
