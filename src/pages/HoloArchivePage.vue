<template>
  <q-page class="">
    <div class="holo-page-title q-pb-md">アーカイブまとめ</div>
    <search-box />
    {{ records }}
  </q-page>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import SearchBox from 'src/components/holoarchive/SearchBox.vue';
import { useHoloArchiveStore } from 'src/stores/HoloArchiveStore';
export default defineComponent({
  name: 'holo-archive',
  components: {
    'search-box': SearchBox,
  },
  setup() {
    const store = useHoloArchiveStore();
    const records = ref(store.pageRecords);
    return { records };
  },
});
</script>
