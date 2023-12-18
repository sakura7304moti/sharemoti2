<template>
  <q-page class="">
    <div class="holo-page-title q-pb-md">アーカイブまとめ</div>
    <search-box />
  </q-page>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import SearchBox from 'src/components/holoarchive/SearchBox.vue';
export default defineComponent({
  name: 'holo-archive',
  components: {
    'search-box': SearchBox,
  },
  setup() {
    return {};
  },
});
</script>
