<template>
    <ion-page>
        <ion-item>
            <ion-label>Name : {{ name }}</ion-label>
        </ion-item>
        <ion-item>
            <ion-label>Email : {{ email }}</ion-label>
        </ion-item>
        <ion-item>
            <ion-label>Phone : {{ phone }}</ion-label>
        </ion-item>
        <ion-button :routerLink="'/' + id + '/edit'"
            >Modify this contact</ion-button
        >
        <ion-button @click="handleDelete" :routerLink="'/'"
            >Delete this contact</ion-button
        >
    </ion-page>
</template>

<script>
import { IonPage, IonButton, IonItem, IonLabel } from "@ionic/vue";
export default {
    data() {
        return {
            id: "",
            name: "",
            email: "",
            phone: "",
        };
    },

    mounted() {
        this.id = this.$route.params.id;

        const savedContacts = localStorage.getItem("contacts");
        if (savedContacts) {
            const contacts = JSON.parse(savedContacts);
            const contact = contacts.find((item) => item.id == this.id);

            if (!contact) {
                this.$router.push("/");
                return;
            }

            this.name = contact.name;
            this.email = contact.email;
            this.phone = contact.phone;
        }
    },

    methods: {
        handleDelete() {
            this.$emit("delete-contact", this.id);
        },
    },

    components: { IonPage, IonButton, IonItem, IonLabel },
};
</script>
