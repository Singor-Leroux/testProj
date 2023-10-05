<script setup>
import AppLayout from '@/Layouts/AppLayout.vue'
import { Head, Link } from '@inertiajs/vue3'

import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';

const title = 'Sessions';

</script>

<template>
    <Head :title="Editions" />
    <AppLayout title="Editions" :title="title">
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-whitedark:bg-gray-200 overflow-hidden shadow-xl sm:rounded-lg">
                    <h1>
                        <Link class="text-indigo-400 text-lg hover:text-indigo-600 p-6" href="/sessions"><strong>Responsable</strong></Link>
                        <span class="text-indigo-400 font-medium">/ </span>
                        <strong>Nom_du_responsable</strong>
                    </h1>
                </div>
                <div class="border-4 border-black-500/100 mt-4 bg-gray-200">

                    <div class="-mb-8 -mr-6 p-10 rounded-sm">
                        <form action="" method="post" class="mt-6">
                            <fieldset>
                                <InputLabel for="ts" class="text-black">
                                    Type de session
                                </InputLabel>
                                <select name="tsession" id="ts" placeholder="Type de Session"
                                    class="ml-6 rounded-lg text-black bg-white-200 w-full lg:w-1/2">
                                    <option value="null" />
                                    <option value="TP">Test psychotechnique</option>
                                    <option value="TC">Test collectif</option>
                                    <option value="TI">Test individuel</option>
                                    <option value="DF">Demarrage Formation</option>
                                    <option value="ED">Etude de dossiers</option>
                                </select><br>
                                <InputLabel for="nc">Nombre de Candidats</InputLabel>
                                <TextInput type="number" name="cand" id="nc" class="ml-6 mt-2 w-full lg:w-1/2"/><br>
                                <InputLabel for="data">Date</InputLabel>
                                <TextInput type="date" name="data" id="data" class="ml-6 mt-3 w-full lg:w-1/2"/><br>
                                <InputLabel for="heure">Heure</InputLabel>
                                <TextInput type="time" id="heure" name="heure" class="ml-6 mt-3 w-full lg:w-1/2"/><br>
                                <InputLabel for="resp" class="text-black-800">Responsable</InputLabel>
                                <select name="tresp" id="ts" class="ml-6 rounded-lg text-black bg-white-200 w-full lg:w-1/2">
                                    <option value="null" />
                                    <option value="TP">Josue TOHON</option>
                                    <option value="TC">Tiburce KOUAGOU</option>
                                    <option value="TI">Fabrice ANABA</option>
                                </select><br>
                                <button name="add"
                                    class="rounded-lg shadow bg-purple-600 mt-6 p-4 hover:bg-pink-400" href="/sessions/ShowSession">MODIFIER</button >

                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>