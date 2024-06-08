<template>
    <ion-page>
        <h3 class="empty_contacts" v-if="!contacts.length">
            You have no contacts yet
        </h3>
        <ContactListItem
            v-for="contact in contacts"
            :key="contact.id"
            :contact="contact"
        ></ContactListItem>
    </ion-page>
</template>

<script>
import { IonPage } from "@ionic/vue";
import ContactListItem from "@/components/ContactListItem.vue";

export default {
    data() {
        return {
            contacts: [],
        };
    },

    mounted() {
        this.loadContacts();
    },

    methods: {
        loadContacts() {
            const savedContacts = localStorage.getItem("contacts");
            if (savedContacts) {
                this.contacts = JSON.parse(savedContacts);
            }
        },
    },

    components: { IonPage, ContactListItem },
};
</script>

<style>
.empty_contacts {
    text-align: center;
}
</style>
