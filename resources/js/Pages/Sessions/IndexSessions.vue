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
                <div class="bg-white dark:bg-gray-200 overflow-hidden shadow-xl sm:rounded-lg">
                    <h2 class="text-black">sessions</h2>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
