<template>
  <q-page class=""> アーカイブまとめ </q-page>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useHoloArchiveModel } from 'src/models/HoloArchivePageModels';
export default defineComponent({
  name: 'holo-archive',
  setup() {
    const { channel, movie, load, getChannelState, getMovieState } =
      useHoloArchiveModel();
    getMovieState();
    return {};
  },
});
</script>
