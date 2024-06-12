<template>
    <ion-page>
        <form @submit.prevent="handleSubmit">
            <ion-item>
                <ion-label>Name : </ion-label>
                <ion-input v-model="name" />
            </ion-item>
            <ion-item>
                <ion-label>Email : </ion-label>
                <ion-input v-model="email" />
            </ion-item>
            <ion-item>
                <ion-label>Phone : </ion-label>
                <ion-input v-model="phone" />
            </ion-item>
            <ion-item v-for="error in errors" style="color: red">{{
                error
            }}</ion-item>
            <ion-button type="submit" expand="block"
                >Confirm the modifications</ion-button
            >
        </form>
    </ion-page>
</template>

<script>
import { IonPage, IonButton, IonLabel, IonInput, IonItem } from "@ionic/vue";
export default {
    data() {
        return {
            id: "",
            name: "",
            email: "",
            phone: "",
            errors: "",
        };
    },

    mounted() {
        this.loadContact();
    },

    methods: {
        loadContact() {
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
                this.$emit("modify-contact", {
                    id: this.id,
                    name: this.name,
                    email: this.email,
                    phone: this.phone,
                });
            }
        },
    },

    components: { IonPage, IonButton, IonLabel, IonInput, IonItem },
};
</script>

<style>
ion-label {
    white-space: nowrap;
    padding-right: 15px;
}
</style>
