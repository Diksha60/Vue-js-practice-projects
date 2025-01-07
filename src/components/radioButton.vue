<template>
    <h1>Radio button</h1>
    
    <h3>Gender</h3>

    <label for="male">Male</label>
    <input type="radio" value="Male" name="gender" v-model="gender" id="male">
    <br>

    <label for="female">Female</label>
    <input type="radio" value="Female" name="gender" v-model="gender" id="female">
    <br>

    <label for="others">Others</label>
    <input type="radio" value="Others" name="gender" v-model="gender" id="others">
    <br>

    <h1>Gender: {{ gender }}</h1>
</template>

<script>
export default {
    name: "RadioButton",
    data()
    {
        return {
            gender: null
        }
    }
}
</script>