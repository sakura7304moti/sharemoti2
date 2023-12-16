<template>
  <!--ページリンク一覧-->
  <div class="q-pt-md row q-gutter-md">
    <!--main-->
    <q-card style="width: 400px">
      <q-card-section>
        <div class="text-h6">おばあちゃんち</div>
        <div class="q-pa-md">
          <div v-for="state in mainPages" :key="state.url" class="q-pb-sm">
            <q-btn
              :label="state.title"
              @click="router.replace(state.url)"
              align="left"
              text-color="black"
              color="green-2"
              class="light-index-button"
            />
          </div>
        </div>
      </q-card-section>
    </q-card>

    <!--file-->
    <q-card style="width: 400px">
      <q-card-section>
        <div class="text-h6">お土産</div>
        <div class="q-pa-md">
          <div v-for="state in filePages" :key="state.url" class="q-pb-sm">
            <q-btn
              :label="state.title"
              @click="router.replace(state.url)"
              align="left"
              text-color="black"
              color="blue-2"
              class="light-index-button"
            />
          </div>
        </div>
      </q-card-section>
    </q-card>

    <!--file-->
    <q-card style="width: 400px">
      <q-card-section>
        <div class="text-h6">おまけ</div>
        <div class="q-pa-md">
          <div v-for="state in scraperPages" :key="state.url" class="q-pb-sm">
            <q-btn
              :label="state.title"
              @click="router.replace(state.url)"
              align="left"
              text-color="black"
              color="yellow-2"
              class="light-index-button"
            />
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'light-index',
  setup() {
    const router = useRouter();
    const mainPages = ref([
      {
        title: '名言集',
        url: '/wordlist',
      },
      {
        title: 'あだ名一覧',
        url: '/namelist',
      },
      {
        title: '焼き直し条約',
        url: '/yaki',
      },
      {
        title: '俳句王',
        url: '/haiku',
      },
      {
        title: '学校',
        url: '/school',
      },
      {
        title: 'お茶の間',
        url: '/info',
      },
    ] as PageState[]);

    const filePages = ref([
      {
        title: 'カラオケ',
        url: '/karaoke',
      },
      {
        title: 'ボイス',
        url: '/voice',
      },
      {
        title: 'スマブラ',
        url: '/ssbu',
      },
      {
        title: 'オム子レイディオ',
        url: '/radio',
      },
      {
        title: '画像',
        url: '/img',
      },
    ] as PageState[]);

    const scraperPages = ref([
      {
        title: 'twitter',
        url: '/twitter',
      },
      {
        title: '歌みた',
        url: '/holosong',
      },
      {
        title: 'オリ曲',
        url: '/holoalbum',
      },
      {
        title: '記念配信',
        url: '/holomemoriy',
      },
    ] as PageState[]);
    return {
      router,
      mainPages,
      filePages,
      scraperPages,
    };
  },
});
interface PageState {
  title: string;
  url: string;
}
</script>
<style>
.light-index-button {
  width: 100%;
  font-size: 16px;
  line-height: 3em;
  text-decoration: none;
  font-weight: 600;
  padding: 0 14px;
  transition: 0.2s;
}
</style>
