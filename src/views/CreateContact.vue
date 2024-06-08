<template>
    <ion-page>
        <form @submit.prevent="handleSubmit">
            <ion-item>
                <ion-label>Name</ion-label>
                <ion-input v-model="name" />
            </ion-item>
            <ion-item>
                <ion-label>Email</ion-label>
                <ion-input v-model="email" />
            </ion-item>
            <ion-item>
                <ion-label>Phone</ion-label>
                <ion-input v-model="phone" />
            </ion-item>
            <ion-button type="submit" expand="block"
                >Create a contact</ion-button
            >
        </form>
    </ion-page>
</template>

<script>
import {
    IonPage,
    IonContent,
    IonLabel,
    IonInput,
    IonItem,
    IonButton,
} from "@ionic/vue";

export default {
    data() {
        return {
            name: "",
            email: "",
            phone: "",
        };
    },

    methods: {
        handleSubmit() {
            if (this.name != "" && this.email != "" && this.phone != "") {
                this.$emit("create-contact", {
                    name: this.name,
                    email: this.email,
                    phone: this.phone,
                });
            }
        },
    },

    components: { IonPage, IonContent, IonLabel, IonInput, IonItem, IonButton },
};
</script>
