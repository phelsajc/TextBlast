<template>
  <KeepAlive>
    <base-layout :show-tool-bar-menu="true" color-type="secondary">
      <ion-card>
        <ion-card-header>
          <ion-card-title>Message</ion-card-title>
          <!-- <ion-card-subtitle>Card Subtitle</ion-card-subtitle> -->
        </ion-card-header>

        <ion-card-content>
          <ion-grid>
            <ion-row>
              <ion-col size-lg="16">
                <div>
                  <ion-item>
                    <ion-select
                      v-model="form.receiver"
                      placeholder="Select"
                    >
                    <div slot="label">Sent To <ion-text color="danger">(Required)</ion-text></div>
                      <ion-select-option
                        v-for="e in Contact_list"
                        :value="e.my_group_id"
                        >{{ e.group_descr }}</ion-select-option
                      >
                    </ion-select>
                  </ion-item>
                </div>
              </ion-col>
            </ion-row>

            <ion-row>
              <ion-col size-lg="16">
                <div>
                  <ion-item>
                    <ion-select
                      v-model="form.template"
                      placeholder="Select"
                      @ionChange="selectTemplate($event)"
                    >
                    <div slot="label">Templates <ion-text color="danger">(Required)</ion-text></div>
                      <ion-select-option
                        v-for="e in templates_list"
                        :value="e.template_id"
                        >{{ e.template_name }}</ion-select-option
                      >
                    </ion-select>
                  </ion-item>
                </div>
              </ion-col>
            </ion-row>

            <!-- <ion-row>
              <ion-col size-lg="12">
                <div>
                  <ion-radio-group value="i">
                    <ion-item>
                      <ion-radio value="i" justify="start">Immediet</ion-radio>
                      <ion-radio value="s" justify="start">Scheduled</ion-radio>
                    </ion-item>
                  </ion-radio-group>
                </div>
              </ion-col>
            </ion-row> -->

            <ion-row v-if="isScheduled">
              <ion-col size="12">
                Date
                <VueDatePicker
                  v-model="form.date"
                  :format="'YYY-dd-MM'"
                  :teleport="true"
                  range
                ></VueDatePicker
              ></ion-col>
            </ion-row>

            <!-- <ion-row>
              <ion-col size="12">
                <ion-item>
                  <ion-label>Total Regular Beds</ion-label>
                  <ion-badge color="success">{{ total_reg_beds }}</ion-badge>
                </ion-item>
              </ion-col>
            </ion-row> -->
            <ion-row>
              <ion-col size="12">
                <ion-list>
                  <ion-item>
                    <ion-textarea
                      v-model="form.message"
                      label-placement="floating"
                      value=""
                      :auto-grow="true"
                      fill="outline"
                      rows="10"
                    >
                      <div slot="label">
                        Message <ion-text color="danger">(Required)</ion-text>
                      </div>
                    </ion-textarea>
                  </ion-item>
                </ion-list>
              </ion-col>
            </ion-row>

            <ion-row>
              <ion-col size="12">
                <ion-button expand="block" @click="send()">
                  <ion-icon name="send-outline"></ion-icon> &nbsp;Send</ion-button
                >
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-card-content>
      </ion-card>
    </base-layout>
  </KeepAlive>
</template>

<script>
import { ref, onMounted, onIonViewDidEnter, computed } from "vue";
import moment from "moment";
import Msg from "@/api/sendMsg";
import Templates from "@/api/getMyTemplates";
import Contacts from "@/api/getMyContacts";
import { defineStore } from "pinia";
import { stationStore } from "../../store/station";
import { useRouter } from "vue-router";
import useToast from "../../composition/useToast";

export default {
  setup() {
    const datef = ref();
    const datet = ref();
    const total_reg_beds = ref(0);
    const someData = ref("Hello from parent component");
    const stn_list = ref([]);
    const templates_list = ref([]);
    const Contact_list = ref([]);
    const stnVal = ref([]);
    const stnInput = ref([]);
    const stnStore = stationStore();
    //const censusResults = stnStore.getStations;//ref(stnStore.getStations);
    const censusResults = computed(() => stnStore.getStations);
    const isScheduled = ref(false);
    const form = ref({
      date: null,
      receiver: null,
      template: null,
      message: null,
    });
    const { openToast } = useToast();

    const format = (date) => {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `Selected date is ${day}/${month}/${year}`;
    };

    onMounted(async () => {
      await loadTemplates();
      await loadContacts();
    });

    const router = useRouter();

    function redirect(e) {
      router.push({
        name: "stations",
        params: {
          propKey: JSON.stringify(e),
        },
      });
    }

    async function selectTemplate(ev) {
      console.log(ev);
      const a = this.templates_list.find((e) => e.template_id == ev.detail.value);
      console.log(a.template_descr);
      this.form.message = a.template_descr;
      /* if (ev.detail.value[0] == "All") {
        stnVal.value = [];
        stnVal.value = ["All"];
      } else {
        var index = stnVal.value.indexOf("All");
        if (index !== -1) {
          stnVal.value.splice(index, 1);
          stnVal.value = [];
          await ev.detail.value.forEach((element) => {
            stnVal.value.push(element);
          });
        }
      } */
    }

    function send() {
      /* form.stnInput = stnVal.value;
      form.value.fdate = moment(form.value.date[0]).format("YYYY-MM-DD");
      form.value.tdate = moment(form.value.date[1]).format("YYYY-MM-DD"); */
      if (
        this.form.message != null &&
        this.form.receiver != null &&
        this.form.template != null
      ) {
        Msg.list(form.value)
          .then((response) => {
            this.form.receiver = null;
            this.form.template = null;
            this.form.message = null;
            if(response.data.code==400){
              openToast("Please check the mobile number must be a numeric.", "danger", "top");
            }else{
              openToast("Message successfully sent.", "success", "top");
            }
          })
          .catch((err) => {
            console.log(err);
          })
          .finally();
      }else{
            openToast("Supply all required fields.", "danger", "top");
      }
    }

    function loadTemplates() {
      Templates.get()
        .then((response) => {
          response.data.data.forEach((element) => {
            templates_list.value.push(element);
          });
        })
        .catch((err) => {
          console.log(err);
        })
        .finally();
    }

    function loadContacts() {
      Contacts.get()
        .then((response) => {
          response.data.data.forEach((element) => {
            Contact_list.value.push(element);
          });
        })
        .catch((err) => {
          console.log(err);
        })
        .finally();
    }

    return {
      redirect,
      datef,
      datet,
      selectTemplate,
      total_reg_beds,
      stn_list,
      templates_list,
      Contact_list,
      stnVal,
      loadTemplates,
      loadContacts,
      form,
      send,
      censusResults,
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
