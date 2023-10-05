<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import { Head } from '@inertiajs/vue3';
const title = 'Sessions';

</script>

<template>

    <Head title="Sessions" />
    <AppLayout title="Sessions" :title="title">
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white dark:bg-gray-200 overflow-hidden shadow-xl sm:rounded-lg p-6">
                    <div class="mb-3">
                        <strong for="recipient-name" class="col-form-label">Type de la sect i on:</strong>
                        <span for="recipient-name" class="col-form-label">...........</span>
                    </div>
                    <div class="mb-3">
                        <strong for="recipient-name" class="col-form-label">Nombre de candidats : </strong>
                        <span for="recipient-name" class="col-form-label">20</span>
                    </div>
                    <div class="mb-3">
                        <strong for="recipient-name" class="col-form-label">Date : </strong>
                        <span for="recipient-name" class="col-form-label">jj/MM/YY</span>
                    </div>
                    <div class="mb-3">
                        <strong for="recipient-name" class="col-form-label">Heure : </strong>
                        <span for="recipient-name" class="col-form-label">hh/mm/ss</span>
                    </div>
                    <div class="mb-3">
                        <strong for="recipient-name" class="col-form-label">Responsable : </strong>
                        <span for="recipient-name" class="col-form-label">.......</span>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
