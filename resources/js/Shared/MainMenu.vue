<template>
  <div>
    <div class="mb-4">
      <Link class="group flex items-center py-3" :href="route('dashboard')">
      <icon name="dashboard" class="mr-2 w-4 h-4"
        :class="isUrl('') ? 'fill-white' : 'fill-indigo-400 group-hover:fill-white'" />
      <div :class="isUrl('') ? 'text-white' : 'text-indigo-300 group-hover:text-white'">Dashboard</div>
      </Link>
    </div>

    <div class="mb-4">
      <Link class="group flex items-center py-3" :href="route('sessions.index')">
      <icon name="dashboard" class="mr-2 w-4 h-4"
        :class="isUrl('sessions.index') ? 'fill-white' : 'fill-indigo-400 group-hover:fill-white'" />
      <div :class="isUrl('sessions.index') ? 'text-white' : 'text-indigo-300 group-hover:text-white'">Session</div>
      </Link>
    </div>
    <div class="mb-4">
      <Link class="group flex items-center py-3" :href="route('responsables.index')">
      <icon name="dashboard" class="mr-2 w-4 h-4"
        :class="isUrl('responsables.index') ? 'fill-white' : 'fill-indigo-400 group-hover:fill-white'" />
      <div :class="isUrl('responsables.index') ? 'text-white' : 'text-indigo-300 group-hover:text-white'">Responsable</div>
      </Link>
    </div>
  </div>
</template>

<script>
import { Link } from '@inertiajs/vue3';
import Icon from './Icon.vue';
import NavLink from '@/Components/NavLink.vue';

export default {
  components: {
    Icon,
    Link,
    NavLink
  },
  methods: {
    isUrl(...urls) {
      let currentUrl = this.$page.url.substr(1)
      if (urls[0] === '') {
        return currentUrl === ''
      }
      return urls.filter((url) => currentUrl.startsWith(url)).length
    },
  },
}
</script>
