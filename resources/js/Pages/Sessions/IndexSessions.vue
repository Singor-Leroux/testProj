<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import { Head, Link } from '@inertiajs/vue3';
const title = 'Sessions';
defineProps(['examples']);

</script>

<template>

    <Head title="Sessions" />
    <AppLayout title="Sessions" :title="title">
        <h2 class="text-gray-600 font-bold text-4xl">sessions</h2>
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="flex items-center justify-between mb-6">
                    <div class="mr-4 w-full max-w-md">
                        <label class="block text-gray-700">gdg:</label>
                        <select class=" rounded form-select mt-1 w-1/4 rounded border-none shadow">
                            <option :value="null" />
                            <option value="with" class="border-none p-2">With Trashed</option>
                            <option value="only">Only Trashed</option>
                        </select>
                        <input type="search" name="searchSession" placeholder="Search...." class=" rounded shadow"
                            style="border: none;">
                        <a href="" class="text-sm text-gray-500 opacity-75 ml-3 hover:opacity-100">Reset</a>
                    </div>
                    <a :href="route('sessions.create')" class="text-xl font-bold text-gray-500 border btn w-full bg-indigo-500 p-1 hover:bg-amber-500 hover:border-amber-500 text-center w-fit text-white rounded border-indigo-500">&nbsp; Create session</a>
                </div>
                <div class="bg-white rounded-md shadow overflow-x-auto">
                    <table class="w-full whitespace-nowrap">
                        <thead>
                            <tr class="text-left font-bold">
                                <th class="pb-4 pt-6 px-6 opacity-70">Id</th>
                                <th class="pb-4 pt-6 px-6 opacity-70">Type de session</th>
                                <th class="pb-4 pt-6 px-6 opacity-70">Nombre de candidat</th>
                                <th class="pb-4 pt-6 px-6 opacity-70">Responsable</th>
                                <th class="pb-4 pt-6 px-6 opacity-70">Date</th>
                                <th class="pb-4 pt-6 px-6 opacity-70">Heure</th>
                                <th class="pb-4 pt-6 px-6 opacity-70">Etat</th>
                            </tr>
                        </thead>
                        <tbody>
                                <tr class="p-4 hover:bg-gray-100 focus:within:bg-gray-100"  v-for="example in examples" :key="example.id">
                                    <td class="border-t px-6 py-4 m-6">{{ example.id }}</td>
                                    <td class="border-t px-6 py-4 m-6">{{ example.quota }}</td>
                                    <td class="border-t px-6 py-4 m-6">{{ example.session_date }}</td>
                                    <td class="border-t px-6 py-4 m-6">{{ example.session_time }}</td>
                                </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </AppLayout>
</template>