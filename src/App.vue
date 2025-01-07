<template>
<!-- <HelloWorld msg="Welcome to My Vue.js App" /> -->
<!-- <HomeComponent /> -->
<!-- <ButtonComponent /> -->
<!-- <TwoWayBinding /> -->
<!-- <InputFields /> -->
<!-- <CheckBox /> -->
<!-- <RadioButton /> -->
<!-- <IfElse /> -->
<!-- <ArrayLoop /> -->
<PracticeOnly />
<!-- <ParentChild name="Diksha Rai" :user="user" :getData="getData" />
<ParentComponent /> -->
<!-- <HtmlBinding /> -->
</template>

<script>
// import HtmlBinding from './components/htmlBinding.vue';

// import ParentChild from './components/parentChild.vue';
// import ParentComponent from './components/parentComponent.vue';

import PracticeOnly from './components/practiceOnly.vue';

// import ButtonComponent from './components/ButtonComponent.vue';
// import CheckBox from './components/checkBox.vue';
// import ArrayLoop from './components/arrayLoop.vue';
// import HelloWorld from './components/HelloWorld.vue'
// import IfElse from './components/ifElse.vue';
// import RadioButton from './components/radioButton.vue';
// import InputFields from './components/inputFields.vue';
// import TwoWayBinding from './components/twoWayBinding.vue';
// import HomeComponent from './components/HomeComponent.vue';

export default {
    name: 'App',
    data() {
        return {
            name: "Alisha",
            user: {
                id: 1,
                names: "Regan Rai",
            }
        }
    },
    methods: {
        getData() {
            console.log("Parent")
            alert("Parent class")
        }
    },
    components: {
        // HelloWorld,
        // ButtonComponent,
        // TwoWayBinding,
        // InputFields,
        // CheckBox,
        // RadioButton,
        // IfElse,
        // ArrayLoop,
        PracticeOnly
        // ParentChild,
        // ChildwithLoop,
        // ParentComponent,
        // HtmlBinding
    },

}
</script>
