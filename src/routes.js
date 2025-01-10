import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import PracticeForm from "./components/practiceForm.vue";
import HelloWorld from "./components/HelloWorld.vue";
import SimpleForm from "./components/simpleForm.vue";
import UseofSlots from "./components/useofSlots.vue";
import ProfileComponent from "./components/ProfileComponent.vue";
import PageNotFound from "./components/PageNotFound.vue";

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
    {
        name: "ProfileComponent",
        path: "/ProfileComponent/:name",
        component: ProfileComponent,
    },
    {
        name: "PageNotFound",
        path: "/:pathMatch(.*)*",
        component: PageNotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: Routes, // Correct key used here
});

export default router;


// install: npm i vue-router@4 / npm i vue-router@next(letest version)

// why routing is used?

// to make path for different components