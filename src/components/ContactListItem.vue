<template>
    <ion-item
        v-if="contact"
        :routerLink="'/' + contact.id"
        :detail="false"
        class="list-item"
    >
        <ion-label class="ion-text-wrap">
            <h2>
                {{ contact.name }}
            </h2>
            <h3>{{ contact.email }}</h3>
            <h3>
                {{ contact.phone }}
            </h3>
        </ion-label>
    </ion-item>
</template>

<script lang="ts">
import { IonIcon, IonItem, IonLabel, IonButton } from "@ionic/vue";

export default {
    props: ["contact"],

    components: { IonIcon, IonItem, IonLabel, IonButton },
};
</script>

<style scoped>
.list-item {
    --padding-start: 0;
    --inner-padding-end: 0;
    color: rgb(180 180 180);
    cursor: pointer;
    transition: color 0.3s ease;
}

.list-item:hover {
    color: white;
}

.list-item ion-label {
    margin-left: 20px;
    margin-top: 12px;
    margin-bottom: 12px;
}

.list-item h2 {
    font-weight: 600;
    margin: 0;

    /**
   * With larger font scales
   * the date/time should wrap to the next
   * line. However, there should be
   * space between the name and the date/time
   * if they can appear on the same line.
   */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>
