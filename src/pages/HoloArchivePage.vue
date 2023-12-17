<template>
  <q-page class="">
    <div class="holo-page-title q-pb-md">アーカイブまとめ</div>
  </q-page>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useHoloArchiveModel } from 'src/models/HoloArchivePageModels';
export default defineComponent({
  name: 'holo-archive',
  setup() {
    const {
      channel,
      movie,
      filterMovie,
      load,
      filter,
      page,
      getChannelState,
      getMovieState,
      filteringData,
    } = useHoloArchiveModel();
    getChannelState();
    getMovieState();
    return { channel, movie, filterMovie, load, filter, page, filteringData };
  },
});
</script>
