<template>
  <q-page class="">
    <holo-hashtag-select v-model="filter" />
  </q-page>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import HoloNameSelect from 'src/components/selects/HoloNameSelect.vue';
export default defineComponent({
  name: 'component-test',
  component: { 'holo-hashtag-select': HoloNameSelect },
  setup() {
    const pageHeight = ref(document.documentElement.scrollHeight * 0.85);
    return {
      filter: ref(''),
      pageHeight,
    };
  },
});
</script>
