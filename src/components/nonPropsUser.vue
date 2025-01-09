<template>
    <h1>Non Props User</h1>
    <NonPropsUserChild msg="Hello Form Parent" id="msg"/>
    
</template>

<script>
import NonPropsUserChild from './nonPropsUserChild.vue';

export default {
    name: 'NonPropsUser',
    components: {
        NonPropsUserChild
    },
}
</script>