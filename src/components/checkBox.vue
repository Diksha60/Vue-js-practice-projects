<template>
<h1>Check Box</h1>

<h2>Language</h2>
<label for="react">React</label>
<input type="checkbox" value="React" v-model="language" id="react">
<br>

<label for="vue">Vue js</label>
<input type="checkbox" value="Vue js" v-model="language" id="vue">
<br>

<label for="java">Java</label>
<input type="checkbox" value="Java" v-model="language" id="java">
<br>

<label for="c++">c++</label>
<input type="checkbox" value="C++" v-model="language" id="c++">
<br>

<p>Selected languages: {{ language }}</p>
</template>

<script>
export default {
    name: "CheckBox",
    data() {
        return {
            language: [],
        }
    }
}
</script>
