      

<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { Head } from "@inertiajs/vue3";

import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';
defineProps(['admins']);
const title = "Création d'une nouvelle session";
</script>

<template>

    <Head title="Sessions" />
    <AppLayout  :title="title">
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white dark:bg-gray-200 overflow-hidden shadow-xl sm:rounded-lg">
                    <h2 class="text-black">Formulaire d'enregistrement</h2> <br>

                    <div>

                        <Head title="Create Session" />
                        <div class="max-w-3xl bg-white rounded-md shadow overflow-hidden">
                            <form @submit.prevent="">
                                <div style="display: flex; flex-direction: column; padding: 1rem;">

                                    <InputLabel class="pb-4 pr-6 w-full lg:w-1/2">
                                        Type de session
                                    </InputLabel>
                                    <select label="Type de session" >
                                        <option :value="null" />
                                        <option value="{{type_ses.id}}" v-for="type_ses in type_session">{{type_ses.step_name}}</option>
                                    </select>

                                    <InputLabel class="pb-4 pr-6 w-full lg:w-1/2">
                                        Nombre de candidats
                                    </InputLabel>
                                    <TextInput label="Nombre de candidats" />

                                    <InputLabel class="pb-4 pr-6 w-full lg:w-1/2">
                                        Responsable
                                    </InputLabel>
                                    <!-- <select label="Responsable" >
                                        <option :value="null" />
                                        <option value="{{admin.id}}" v-for="admin in admins">{{admin.admin_name}}</option>
                                    </select> -->

                                    <p>
                                        {{ 
                                            console.log(admins)
                                             }}
                                    </p>

                                    <InputLabel class="pb-4 pr-6 w-full lg:w-1/2">
                                        Date
                                    </InputLabel>
                                    <TextInput type="date" label="Date" />

                                    <InputLabel class="pb-4 pr-6 w-full lg:w-1/2">
                                        Heure
                                    </InputLabel>
                                    <TextInput type="time" label="Heure" />

                                    <button
                                        style="margin: 1rem;border: 1px solid;border-radius: 0.40rem;background-color: rgb(67, 67, 120); color: white; padding: 10px;"
                                        type="submit">
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