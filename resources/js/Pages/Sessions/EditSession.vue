<script setup>
import AppLayout from '@/Layouts/AppLayout.vue'
import { Head } from '@inertiajs/vue3'

import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';
import SelectInput  from '@/Components/SelectInput.vue';

const title = 'Sessions';

</script>

<template>
    <Head :title="Editions" />
    <AppLayout title="Editions" :title="title">
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white dark:bg-gray-200 overflow-hidden shadow-xl sm:rounded-lg">
                    <h2 class="text-black">Edition</h2>
                </div>
                <div class="flex flex-wrap -mb-8 -mr-6 p-8">

                    <form action="" method="post" class="mt-6">
                        <InputLabel for="ts">
                            Type de session
                        </InputLabel>
                        <SelectInput
                         name="tsession" id="ts" placeholder="Type de Session" class="ml-6 rounded-lg bg-emerald">
                            <option value="null" />
                            <option value="TP">Test psychotechnique</option>
                            <option value="TC">Test collectif</option>
                            <option value="TI">Test individuel</option>
                            <option value="DF">Demarrage Formation</option>
                            <option value="ED">Etude de dossiers</option>
                        </SelectInput
                        ><br>
                        <InputLabel for="nc">Nombre de Candidats</InputLabel>
                        <TextInput type="number" name="cand" id="nc" v-bind:accept=15 class="ml-6 mt-2" /><br>
                        <InputLabel for="data">Date</InputLabel>
                        <TextInput type="date" name="data" id="data" class="ml-6 mt-3" /><br>
                        <InputLabel for="heure">Heure</InputLabel>
                        <TextInput type="time" id="heure" name="heure" class="ml-6 mt-3" /><br>
                        <InputLabel for="resp" class="text-black-600">Responsable</InputLabel>
                        <SelectInput name="tresp" id="ts" class="ml-6 mt-3">
                            <option value="null" />
                            <option value="TP">Josue TOHON</option>
                            <option value="TC">Tiburce KOUAGOU</option>
                            <option value="TI">Fabrice ANABA</option>
                        </SelectInput><br>

                        <button type="submit" name="add"
                            class="rounded-lg shadow bg-purple-600 mt-6 p-4 hover:bg-pink-400">AJOUTER</button>
                    </form>
                </div>
            </div>
        </div>
    </AppLayout>
</template>