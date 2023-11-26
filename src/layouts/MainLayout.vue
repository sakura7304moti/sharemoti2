<template>
  <q-layout>
    <mainDrawer />
    <q-page-container>
      <router-view class="q-pa-md" />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import MainDrawerVue from './drawer/MainDrawer.vue';
export default defineComponent({
  name: 'MainLayout',
  components: {
    mainDrawer: MainDrawerVue,
  },
  setup() {
    const leftDrawerOpen = ref(false);
    const router = useRouter();

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      router,
    };
  },
});
</script>
<style>
.menu-icon-image {
  width: 52px;
}
</style>
