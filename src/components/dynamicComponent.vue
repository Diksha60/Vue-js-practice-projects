<template>
    <h1>Dynamic Component</h1>

    <button @click="tab='DynamicComponentChild'">Child 1</button>
    <button @click="tab='DynamicComponentChild2'">Child 2</button>
    <button @click="tab='DynamicComponentChild3'">Child 3</button>

    <component :is="tab"/>
</template>

<script>
import DynamicComponentChild from './dynamicComponentChild.vue';
import DynamicComponentChild2 from './dynamicComponentChild2.vue';
import DynamicComponentChild3 from './dynamicComponentChild3.vue';

export default {
    name: "DynamicComponent",
    components: {
        DynamicComponentChild,
        DynamicComponentChild2,
        DynamicComponentChild3,
    },
    data() {
        return {
            tab: 'DynamicChildComponent'
        }
    }
    
}
</script>