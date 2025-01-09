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
<!-- <PracticeOnly /> -->
<!-- <ParentChild name="Diksha Rai" :user="user" :getData="getData" />
<ParentComponent /> -->
<!-- <HtmlBinding /> -->
<!-- <ClassBinding /> -->
<!-- <ParentClildComponentProps /> -->
<!-- <RefinVue /> -->
<!-- <SimpleForm /> -->
<!-- <FormwithManyInputs /> -->
<!-- <InputWithModifires /> -->
<!-- <NonPropsUser /> -->
<!-- <ComputedProperty /> -->
<!-- <PracticeForm /> -->
<!-- <UseofWatcher /> -->
<!-- <UseogSlots /> -->
<!-- <CreatePhase /> -->
 <h1>hello</h1>

 <nav>
        <router-link to="/HomeComponent">Home Component</router-link>
        <router-link to="/practiceForm">Practice Form</router-link>
        <router-link to="/simpleForm">Simple Form</router-link>
        <router-link to="/useofSlots">Use of Slots</router-link>
    </nav>
    <main>
        <router-view></router-view>
    </main>

    <DynamicComponent />
</template>

<script>
import DynamicComponent from './components/dynamicComponent.vue';





// import CreatePhase from './components/createPhase.vue';

// import PracticeForm from './components/practiceForm.vue';
// import UseofWatcher from './components/useofWatcher.vue';
// import UseogSlots from './components/useogSlots.vue';

// import ComputedProperty from './components/computedProperty.vue';

// import NonPropsUser from './components/nonPropsUser.vue';

// import InputWithModifires from './components/inputWithModifires.vue';

// import FormwithManyInputs from './components/formwithManyInputs.vue';
// import SimpleForm from './components/simpleForm.vue';

// import RefinVue from './components/refinVue.vue';

// import ParentClildComponentProps from './components/parentClildComponentProps.vue';

// import ClassBinding from './components/classBinding.vue';

// import HtmlBinding from './components/htmlBinding.vue';

// import ParentChild from './components/parentChild.vue';
// import ParentComponent from './components/parentComponent.vue';

// import PracticeOnly from './components/practiceOnly.vue';

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
            },

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
        // PracticeOnly
        // ParentChild,
        // ChildwithLoop,
        // ParentComponent,
        // HtmlBinding,
        // ClassBinding,
        // ParentClildComponentProps,
        // RefinVue,
        // SimpleForm,
        // FormwithManyInputs,
        // InputWithModifires,
        // NonPropsUser,
        // ComputedProperty,
        // PracticeForm,
        // UseofWatcher,
        // UseogSlots,
        // CreatePhase,
        DynamicComponent,
    },

}
</script>
