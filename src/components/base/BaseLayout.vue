<template>
  <ion-page>
    <ion-header>
      <ion-toolbar :color="colorToolbar">
        <ion-buttons slot="start" v-if="showToolBarMenu">
          <div v-if="pageDefaultBackLink">
            <ion-back-button
              v-if="!ignoreHistory"
              text=""
              :default-href="pageDefaultBackLink"
            ></ion-back-button>
            <ion-back-button
              v-else
              text=""
              default-href=""
              @click.prevent="back()"
            ></ion-back-button>
          </div>
          <ion-menu-button
            v-show="showMenuButton"
            color="primary"
          ></ion-menu-button>
          &nbsp;<ion-text class="ml-4 font-weight-bold"> {{ pageTitle }} </ion-text>
        </ion-buttons>
        <ion-buttons slot="end" class="ml-auto">
          <slot name="actions-end"></slot>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :class="`ion-padding ${className}`" :scroll-events="true" :color="colorType">
      <slot />
    </ion-content>
  </ion-page>
</template>

<script setup>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonContent,
  IonBackButton,
  IonButtons,
  IonMenuButton,
  IonText,
} from "@ionic/vue";
import { toRefs, defineProps } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
  pageTitle: {
    type: String,
    required: false,
  },
  pageDefaultBackLink: {
    type: String,
    required: false,
  },
  colorType: {
    type: String,
    required: false,
  },
  colorToolbar: {
    type: String,
    default: 'light',
    required: false,
  },
  showMenuButton: {
    type: Boolean,
    default: true,
  },
  ignoreHistory: {
    type: Boolean,
    default: false,
  },
  className: {
    type: String,
    required: false,
  },
  showToolBarMenu: { //my custom
    type: Boolean,
    required: false,
  },
});

const { pageDefaultBackLink } = toRefs(props);

const router = useRouter();

function back() {
  router.push(pageDefaultBackLink);
}
</script>
