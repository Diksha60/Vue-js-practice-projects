import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import PracticeForm from "./components/practiceForm.vue";
import HelloWorld from "./components/HelloWorld.vue";
import SimpleForm from "./components/simpleForm.vue";
import UseofSlots from "./components/useofSlots.vue";

const Routes = [
    {
        name: "HelloWorld",
        path: "/",
        component: HelloWorld,
    },
    {
        name: "HomeComponent",
        path: "/HomeComponent",
        component: HomeComponent,
    },
    {
        name: "PracticeForm",
        path: "/practiceForm",
        component: PracticeForm,
    },
    {
        name: "SimpleForm",
        path: "/SimpleForm",
        component: SimpleForm,
    },
    {
        name: "UseofSlots",
        path: "/useofSlots",
        component: UseofSlots,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: Routes, // Correct key used here
});

export default router;
