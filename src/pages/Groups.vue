<template>
  <KeepAlive>
    <base-layout :show-tool-bar-menu="true" color-type="secondary" page-title="Groups">
      <ion-card>
        <ion-card-content>
          <ion-button expand="block" @click="redirect()"
            ><ion-icon name="add-outline"></ion-icon>Add</ion-button
          >
        </ion-card-content>
      </ion-card>
      <ion-list lines="full">
        <ion-card v-for="e in Contact_list">
          <ion-card-header>
            <ion-card-subtitle v-if="e.row_status == 1"
              ><ion-badge color="primary">Active</ion-badge></ion-card-subtitle
            >
            <ion-card-subtitle v-else="e.row_status == 1"
              ><ion-badge color="danger">Inactive</ion-badge></ion-card-subtitle
            >
            <ion-card-title>{{ e.group_descr }}</ion-card-title>
          </ion-card-header>

          <ion-card-content>
            {{ e.group_numbers }}
            <ion-grid>
              <ion-row>
                <ion-col
                  ><ion-button
                    expand="block"
                    color="danger"
                    fill="outline"
                    @click="deleteGrp(e)"
                    ><ion-icon name="trash-outline"></ion-icon>Delete</ion-button
                  ></ion-col
                >
                <ion-col
                  ><ion-button expand="block" color="success" fill="outline"
                    @click="editGrp(e)"
                    ><ion-icon name="create-outline"></ion-icon>Edit</ion-button
                  ></ion-col
                >
              </ion-row>
            </ion-grid>
          </ion-card-content>
        </ion-card>
      </ion-list>
    </base-layout>
  </KeepAlive>
</template>

<script>
import { ref, onMounted, onIonViewDidEnter, computed } from "vue";
import Contacts from "@/api/getMyContacts";
import { defineStore } from "pinia";
import { stationStore } from "../store/station";
import { useRouter } from "vue-router";
import useToast from "../composition/useToast";
import { Preferences } from "@capacitor/preferences";
import { useUserStore } from "../store/user";
import emitter from "../plugins/emitter";
import { IonButton, alertController } from "@ionic/vue";
import {
  loadingController,
} from '@ionic/vue';


export default {
  setup() {
    const Contact_list = ref([]);
    const stnVal = ref([]);
    const stnInput = ref([]);
    const stnStore = stationStore();
    const censusResults = computed(() => stnStore.getStations);
    const isScheduled = ref(false);
    const form = ref({
      date: null,
      receiver: null,
      template: null,
      message: null,
    });
    const { openToast } = useToast();

    const userStore = useUserStore();
    const format = (date) => {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `Selected date is ${day}/${month}/${year}`;
    };

    onMounted(async () => {
      showLoading();
      await loadContacts();
    });
    
    async function showLoading() {
      const load = await loadingController.create({
        message: 'Loading...',
        backdropDismiss: true,
        spinner: 'circles'
      });
      load.present();
    }

    const dismissLoading = async () => {
      await loadingController.dismiss()
    }

    const router = useRouter();

    function redirect() {
      router.push({
        name: "Manage-group",
        params: {
          propKey: JSON.stringify(form),
        },
      });
    }

    function loadContacts() {
      Contacts.get()
        .then((response) => {
          Contact_list.value = [];
          response.data.data.forEach((element) => {
            Contact_list.value.push(element);
          });
          dismissLoading()
        })
        .catch((err) => {
          console.log(err);
        })
        .finally();
    }
    
    async function deleteGrp(e) {
      return new Promise(async (resolve) => {
        const confirm = await alertController.create({
          header: "Delete Group",
          message: e.group_descr,
          buttons: [
            {
              text: "Cancel",
              role: "cancel",
              handler: () => {
                return resolve(false);
              },
            },
            {
              text: "OK",
              handler: () => {
                Contacts.delete(e.my_group_id)
                  .then((response) => {
                    loadContacts();
                  })
                  .catch((err) => {
                    console.log(err);
                  })
                  .finally();
                return resolve(true);
              },
            },
          ],
        });

        await confirm.present();
      });
    }

    
    async function editGrp(e) {
      router.push({
        name: "Manage-group",
        params: {
          propKey: JSON.stringify(e),
        },
      });
    }
    return {
      redirect,
      Contact_list,
      stnVal,
      loadContacts,
      form,
      deleteGrp,
      editGrp,
      censusResults,
      showLoading,
      dismissLoading,
    };
  },
};
</script>

<style>
ion-list {
  overflow: hidden;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
}

ion-card .list-md {
  max-height: 290px !important;
}
</style>
