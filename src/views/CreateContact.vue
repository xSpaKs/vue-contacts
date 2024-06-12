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
            <ion-item v-for="error in errors" style="color: red">{{
                error
            }}</ion-item>
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
            errors: [],
        };
    },

    methods: {
        handleSubmit() {
            this.errors = [];

            const isValidName = this.name.trim() != "";
            const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
            const isValidPhone = /^0[1-9]\d{8}$/.test(this.phone);

            if (!isValidName) {
                this.errors.push("Name cannot be empty");
            }

            if (!isValidEmail) {
                this.errors.push("Email is not valid");
            }

            if (!isValidPhone) {
                this.errors.push("Phone number is not valid");
            }

            if (isValidName && isValidEmail && isValidPhone) {
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
