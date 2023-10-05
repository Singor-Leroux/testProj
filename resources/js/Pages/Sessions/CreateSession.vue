      

<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { Head, useForm } from "@inertiajs/vue3";

import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';

defineProps(['typ_ad']);

const form = useForm({
    type_section: '',
    quota: '',
    respo: '',
    date_sec: '',
    time_sec: '',
});
const title = "Création d'une nouvelle session";
</script>

<template>

    <Head title="Sessions" />
    <AppLayout :title="title">
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white dark:bg-gray-200 overflow-hidden shadow-xl sm:rounded-lg">
                    <h2 class="text-black">Formulaire d'enregistrement</h2> <br>

                    <div>

                        <Head title="Create Session" />
                        <div class="max-w-3xl bg-white rounded-md shadow overflow-hidden">
                            <form @submit.prevent="form.post(route('sessions.store')); form.message = ''">
                                <div style="display: flex; flex-direction: column; padding: 1rem;">

                                    <InputLabel class="pb-4 pr-6 w-full lg:w-1/2">
                                        Type de session
                                    </InputLabel>
                                    <select label="Type de session" v-model="form.type_section">
                                        <option :value="null" />
                                        <option value="{{type_ses.id}}" v-for="type_ses in typ_ad[0]">
                                            {{ type_ses.step_name }}</option>
                                    </select>

                                    <InputLabel class="pb-4 pr-6 w-full lg:w-1/2">
                                        Nombre de candidats
                                    </InputLabel>
                                    <TextInput label="Nombre de candidats" v-model="form.quota" />

                                    <InputLabel class="pb-4 pr-6 w-full lg:w-1/2">
                                        Responsable
                                    </InputLabel>
                                    <select label="Responsable" v-model="form.respo">
                                        <option :value="null" />
                                        <option value="{{admin.id}}" v-for="admin in typ_ad[1]">{{ admin.admin_name }}
                                            {{ admin.admin_surname }}</option>
                                    </select>
                                    <InputLabel class="pb-4 pr-6 w-full lg:w-1/2">
                                        Date
                                    </InputLabel>
                                    <TextInput type="date" label="Date" v-model="form.date_sec" />

                                    <InputLabel class="pb-4 pr-6 w-full lg:w-1/2">
                                        Heure
                                    </InputLabel>
                                    <TextInput type="time" label="Heure" v-model="form.time_sec" />

                                    <button
                                        style="margin: 1rem;border: 1px solid;border-radius: 0.40rem;background-color: rgb(67, 67, 120); color: white; padding: 10px;"
                                        type="submit">
                                        Créer une session
                                    </button>
                                    <!-- <PrimaryButton class="mt-2 ml-4" :class="{ 'opacity-25': form.processing }"
                                        :disabled="form.processing">
                                        Créer une session
                                    </PrimaryButton> -->
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>