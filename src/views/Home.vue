<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-button :routerLink="'/'">Home page</ion-button>
                <ion-button :routerLink="'/create'"
                    >Create a contact</ion-button
                >
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <router-view
                @create-contact="createContact"
                @delete-contact="deleteContact"
                @modify-contact="modifyContact"
            />
        </ion-content>
    </ion-page>
</template>

<script>
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonButton,
    IonContent,
    IonRouterOutlet,
} from "@ionic/vue";

export default {
    data() {
        return {
            contacts: [],
        };
    },

    mounted() {
        const savedContacts = localStorage.getItem("contacts");
        if (savedContacts) {
            this.contacts = JSON.parse(savedContacts);
        }
    },

    methods: {
        createContact(data) {
            this.contacts.push({
                id:
                    Date.now().toString(36) +
                    Math.random().toString(36).substr(2),
                name: data.name,
                email: data.email,
                phone: data.phone,
            });

            localStorage.setItem("contacts", JSON.stringify(this.contacts));
            this.$router.push("/" + data.id);
            return;
        },

        deleteContact(id) {
            this.contacts = this.contacts.filter((item) => item.id != id);
            localStorage.setItem("contacts", JSON.stringify(this.contacts));
        },

        modifyContact(data) {
            const index = this.contacts.findIndex(
                (item) => item.id === data.id
            );

            if (index !== -1) {
                this.contacts[index] = {
                    id: data.id,
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                };

                localStorage.setItem("contacts", JSON.stringify(this.contacts));
            }

            this.$router.push("/" + data.id);
            return;
        },
    },

    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonButton,
        IonContent,
        IonRouterOutlet,
    },
};
</script>
