<template>
    <h1>Mounted Phase</h1>

    <h3>Name: {{ name }}</h3>
    <h4>Email: {{ email }}</h4>
</template>

<script>
export default {
    name: "MountedPhase",
    data() {
        return {
            name: "Regan Rai",
            email: "regan@gmil.com"
        }
    },
    beforeMount() {
        this.name = "Rahul Mitra"
        alert("beforeMount", this.$el)
        console.log("beforeMount", this.$el)
        this.name = "Rahul Mitra"
    },
    // mounted() {
    //     this.name = "Ranjana Karki"
    //     alert("afterMount", this.$el)
    //     console.log("afterMount", this.$el)
    // },
}
</script>
<!-- it is used when all the operations are made -->

<!-- can we acccess html DOM in beforeMounted with id and ref? 
 No, we can only access these in mounted-->