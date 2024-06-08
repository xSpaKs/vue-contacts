import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";

import ListContact from "../views/ListContact.vue";
import CreateContact from "@/views/CreateContact.vue";
import ModifyContact from "@/views/ModifyContact.vue";
import DetailsContact from "@/views/DetailsContact.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        redirect: "/home",
    },
    {
        path: "/home",
        name: "List",
        component: ListContact,
    },
    {
        path: "/create",
        name: "Create",
        component: CreateContact,
    },
    {
        path: "/:id/edit",
        name: "Modify",
        component: ModifyContact,
    },
    {
        path: "/:id",
        name: "Details",
        component: DetailsContact,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
