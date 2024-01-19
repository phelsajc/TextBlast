<template>
  <base-layout
    page-default-back-link="/admin-dashboard"
    :show-tool-bar-menu="true"
    :show-menu-button="false"
    page-title="Group"
    color-type="secondary"
  > 
  <ion-card>
        <ion-card-header>
        </ion-card-header>

        <ion-card-content>
          <ion-grid>
            <ion-row>
              <ion-col size="12">
                <ion-list>
                  <ion-item>
                    <ion-input
                      v-model="form.desc"
                      label-placement="floating"
                      value=""
                      :auto-grow="true"
                      fill="outline"
                    >
                      <div slot="label">
                        Description <ion-text color="danger">(Required)</ion-text>
                      </div>
                    </ion-input>
                  </ion-item>
                </ion-list>
              </ion-col>
            </ion-row>
            
            <ion-row>
              <ion-col size="12">
                <ion-list>
                  <ion-item>
                    <ion-textarea
                      v-model="form.number"
                      label-placement="floating"
                      value=""
                      :auto-grow="true"
                      fill="outline"
                      rows="10"
                    >
                      <div slot="label">
                        Number <ion-text color="danger">(Required)</ion-text>
                      </div>
                    </ion-textarea>
                  </ion-item>
                </ion-list>
                <ion-note color="primary">number sepeartor is ; semi-colon e.g. 09999999999;09999999998;09999999997</ion-note>
              </ion-col>
            </ion-row>

            <ion-row>
              <ion-col size="12">
                <ion-button expand="block" @click="save()">
                  <ion-icon name="save-outline"></ion-icon> &nbsp;Save</ion-button
                >
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-card-content>
      </ion-card>
  </base-layout>
</template>

<script>
import { onBeforeUnmount, onMounted, ref, computed, reactive, defineProps } from "vue";
import Contacts from "@/api/getMyContacts";
import useToast from "../composition/useToast";
import { useRoute, useRouter } from "vue-router";
import { AlertController } from '@ionic/vue';

export default {
  setup(props) {
    const route = useRoute();
    const stn = '';
    //const propsRef = defineProps(["propKey"]);
    const results = JSON.parse(route.params.propKey);
    const form = ref({
      desc: results?results.group_descr:null,
      number: results?results.group_numbers:null,
      id: results?results.my_group_id:null,
    });
    let isEdit = results.group_descr?true:false;
    onMounted(async () => {
      console.log(results)
    });

    const router = useRouter();
    
    const { openToast } = useToast();
    
    function save() {
      if (
        this.form.desc != null && this.form.desc != "" &&
        this.form.number != null && this.form.number != "" 
      ) {
        Contacts.add(form.value)
          .then((response) => {
            console.log(isEdit)
            if(!isEdit){
              router.push({
                name: "Groups",
              });
            }
            
            if (response.data.code == 400) {
              openToast(
                "Please check the mobile number must be a numeric.",
                "danger",
                "top"
              );
            } else {
              openToast("Message successfully sent.", "success", "top");
            }
          })
          .catch((err) => {
            console.log(err);
          })
          .finally();
      } else {
        openToast("Supply all required fields.", "danger", "top");
      }
    }

    return {
      stn,
      results,
      form,
      save,
      //receivedProp,
    };
  },
};
</script>

<style>
  ion-note {
      size: 8px !important;
  }
</style>
