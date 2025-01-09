<!-- <template>
<h1>Class Binding</h1>

<div>
    <p :class="styling">Hello Class</p>
    <button v-on:click="color=!color">Click Here</button>
</div>
</template>

<script>
export default {
    name: "ClassBinding",
    data() {
        return {
            color: false,
        }
    },
    computed: {
        styling() {
            return {
                green: this.color,
                font: true,
                height: true,
            }
        }
    }

}
</script>

<style>
.green {
    background-color: aquamarine;
    padding: 16px;
    font-size: 16px;
    width: 200px;
    margin: 16px;
}

.font {
    color: rebeccapurple;
    font-weight: 600;
}
.height {
    height: 40px;
}
</style> -->

<template>
    <h1>Class binding</h1>

    <div :class="addStyle">Class Binding</div>
    <button v-on:click="color=!color">Apply Style</button>
</template>

<script>
export default {
    name: "ClassBinding",
    data() {
        return {
            color: false,
        }
    },
    computed: {
        addStyle() {
            return {
                green:this.color, 
                font:this.color, 
                fontColor:this.color 
            }
        }
    }

}
</script>

<style>
.green {
    background-color: antiquewhite;
    padding: 20px;
    margin: 20px;
    width: 250px;
}
.font {
    font-size: 20px;
    font-weight: 600;
}
.fontColor {
    color: brown;
}
</style>