      

<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { Head } from "@inertiajs/vue3";

import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';

const title = "Sessions";
</script>

<template>
  <Head title="Sessions" />
  <AppLayout title="Sessions" >
    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div
          class="bg-white dark:bg-gray-200 overflow-hidden shadow-xl sm:rounded-lg"
        >
          <h2 class="text-black">sessions</h2> <br>     

             <div>
              <Head title="Create Session" />
              <div class="max-w-3xl bg-white rounded-md shadow overflow-hidden">
                <form @submit.prevent="">
                  <div  style="display: flex; flex-direction: column; padding: 1rem;">

                    <InputLabel class="pb-4 pr-6 w-full lg:w-1/2">
                        Type de session
                    </InputLabel>
                    <select  label="Type de session">
                        <option :value="null" />
                        <option value="TPT">test psycho-technique</option>
                        <option value="Typing">Typing</option>
                        <option value="CLA">Compétence lingustique en Anglais</option>
                        <option value="formation">Formation</option>
                    </select>

                    <InputLabel class="pb-4 pr-6 w-full lg:w-1/2">
                        Nombre de candidats
                    </InputLabel>
                    <TextInput  label="Nombre de candidats"/>

                    <InputLabel class="pb-4 pr-6 w-full lg:w-1/2">
                        Responsable
                    </InputLabel>
                    <TextInput  label="Responsable"/>

                    <InputLabel class="pb-4 pr-6 w-full lg:w-1/2">
                        Date
                    </InputLabel>
                    <TextInput type="date" label="Date"/>

                    <InputLabel class="pb-4 pr-6 w-full lg:w-1/2">
                        Heure
                    </InputLabel>
                    <TextInput type="time"  label="Heure"/>

                    <button  style="margin: 1rem;border: 1px solid;border-radius: 0.40rem;background-color: rgb(67, 67, 120); color: white; padding: 10px;" type="submit">
                            Créer une session
                    </button>
                    
                    



                  </div>
                </form>
               
              </div>
            </div>
            
        </div>
      </div>
    </div>
  </AppLayout>
</template>




  
  