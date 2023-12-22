<template>
  <q-layout
    style="
      background-image: url('https://hololive.hololivepro.com/wp-content/themes/hololive/images/fixed_bg.jpg');
    "
  >
    <div class="row">
      <div>
        <img
          src="https://hololive.hololivepro.com/wp-content/themes/hololive/images/head_l.png"
          style="height: 100px"
        />
      </div>
      <div v-for="item in pageList" :key="item.url" class="row q-gutter-md">
        <div>
          <a
            @click.prevent="router.replace(item.url)"
            href=""
            :class="{
              'holo-layout-text-selected': nowPathName == item.url,
              'holo-layout-text': nowPathName != item.url,
            }"
          >
            {{ item.title }}
          </a>
        </div>
      </div>
    </div>

    <q-page-container>
      <router-view class="q-pa-md" />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { createPinia, setActivePinia } from 'pinia';
export default defineComponent({
  name: 'holo-layout',
  setup() {
    setActivePinia(createPinia());
    const route = useRoute();
    const router = useRouter();
    const nowPathName = computed(() => route.path);
    const pageList = [
      {
        url: '/twitter',
        title: 'twitter',
      },
      {
        url: '/holosong',
        title: 'cover song',
      },
      {
        url: '/holoalbum',
        title: 'original song',
      },
      {
        url: '/holomemory',
        title: 'memory',
      },
      {
        url: '/holoarchive',
        title: 'archive',
      },
      {
        url: '/',
        title: 'my home',
      },
    ] as pageState[];
    return {
      drawerView: ref(true),
      router,
      pageList,
      nowPathName,
    };
  },
});
interface pageState {
  url: string;
  title: string;
}
</script>
<style>
.holo-layout-text {
  font-size: 16px;
  line-height: 3em;
  text-decoration: none;
  font-weight: 600;
  color: #116e9b;
  padding: 0 14px;
  transition: 0.2s;
}
.holo-layout-text:hover {
  font-size: 16px;
  line-height: 3em;
  text-decoration: none;
  font-weight: 600;
  color: #56c6fd;
  padding: 0 14px;
}
.holo-layout-text-selected {
  font-size: 16px;
  line-height: 3em;
  text-decoration: none;
  font-weight: 600;
  color: #56c6fd;
  padding: 0 14px;
}
.holo-page-title {
  font-size: 32px;
  font-weight: bold;
  line-height: 1.1em;
}
</style>
