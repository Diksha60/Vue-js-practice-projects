<template>
    <h1 v-on:mousemove="getConsole()">Mouse Move</h1>
    <button v-on:click="test()">Click Here</button>
    <button v-on:click="getData('Button is called')">Click Me</button>
    <button v-on:click="forDoubleClick('For double click btn')">Duble Click Here</button>
    </template>
    
    <script>
    export default {
        name: "ButtonComponent",
        methods: {
            test() {
                alert("function for button is called")
            },
            getData(msg) {
                alert(msg)
            },
            forDoubleClick(msg1) {
                alert(msg1)
            },
            getConsole() {
                console.warn("function called")
            }
        }
    }
    </script>