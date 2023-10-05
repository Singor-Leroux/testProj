<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import { Head } from '@inertiajs/vue3';

const title = 'Responsable';

</script>

<template>
    <Head title="Responsable" />
    <AppLayout title="Responsable" :title="title">
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white dark:bg-gray-200 overflow-hidden shadow-xl sm:rounded-lg">
                    <h2 class="text-black">Responsable</h2>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
