<template>
  <q-page class="">
    <div class="holo-page-title q-pb-md" style="display: none">
      アーカイブまとめ
    </div>
    <div class="row">
      <div>
        <YouTube
          v-if="playUrl != ''"
          :src="playUrl"
          @ready="true"
          ref="youtube"
          :vars="{ autoplay: 1, rel: 0 }"
        />
      </div>
      <div>
        <div style="display: flex; flex-wrap: wrap">
          <div style="width: 30%; min-width: 400px">
            <search-box />
          </div>
          <div
            v-if="playUrl == ''"
            style="
              display: flex;
              width: 70%;
              flex-wrap: wrap;
              overflow-y: auto;
              height: 80vh;
            "
          >
            <div v-for="state in records" :key="state.id" class="q-pa-md">
              <archive-card :data-state="state" />
            </div>
          </div>
          <div v-else style="overflow-y: auto; height: 80vh">
            <div v-for="state in records" :key="state.id" class="q-pa-md">
              <archive-card :data-state="state" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import SearchBox from 'src/components/holoarchive/SearchBox.vue';
import ArchiveCard from 'src/components/holoarchive/ArchiveCard.vue';
import { useHoloArchiveStore } from 'src/stores/HoloArchiveStore';
import YouTube from 'vue3-youtube';
export default defineComponent({
  name: 'holo-archive',
  components: {
    'search-box': SearchBox,
    'archive-card': ArchiveCard,
    YouTube,
  },
  setup() {
    const store = useHoloArchiveStore();
    const records = ref(store.pageRecords);
    const playUrl = computed(() => store.playMovie);

    return { records, playUrl };
  },
});
</script>
