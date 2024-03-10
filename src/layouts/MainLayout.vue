<template>
  <q-layout>
    <!--ヘッダー-->
    <div
      style="height: 60px; padding-top: 16px; padding-left: 24px; display: flex"
    >
      <!--ヘッダーの左側-->
      <div style="font-size: 20px; font-weight: 500; width: 300px">
        韓国の<br />おばあちゃんち
      </div>

      <!--ヘッダーの右側-->
      <div class="nav-top">
        <div
          @click.prevent="
            router.replace('/');
            headerClose();
          "
          class="nav-child"
        >
          トップ
        </div>
        <!--各種ページ-->
        <div v-for="p in pages" :key="p.id" class="nav-child">
          <div @mouseover="headerOpen(p.id)" @click="headerOpen(p.id)">
            <q-icon name="expand_more" />{{ p.title }}
          </div>

          <div v-if="head.id == p.id">
            <div
              v-for="item in callPageList(p.id)"
              :key="item.url"
              class="nav-child-page"
              :class="{ 'nav-child-select': head.id == p.id }"
            >
              <div
                @click="
                  router.replace(item.url);
                  headerClose();
                "
              >
                <div class="q-pa-sm">
                  {{ item.title }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--info-->
        <div
          class="nav-child"
          @mouseover="headerOpen(4)"
          @click="headerOpen(4)"
        >
          <q-icon name="expand_more" />その他

          <div
            v-for="item in otherPages"
            :key="item.url"
            class="nav-child-page q-pa-sm"
            :class="{ 'nav-child-select': head.id == 4 }"
            style="width: 100px"
            @click="otherPageClick(item.url)"
          >
            <img :src="item.imgUrl" style="height: 32px" v-if="head.id == 4" />
          </div>
          <div
            class="nav-child-page q-pa-sm"
            :class="{ 'nav-child-select': head.id == 4 }"
            style="width: 100px"
            @click="
              otherPageClick(
                'https://www.youtube.com/playlist?list=PLbP5km9K7tgfHKxHvk9nOx7hcbLbnHSuS'
              )
            "
          >
            <img
              src="../assets/youtube_icon.png"
              style="height: 32px"
              v-if="head.id == 4"
            />
          </div>
        </div>
      </div>
    </div>

    <!--ページ-->
    <q-page-container style="position: relative" @click="headerClose()">
      <router-view class="q-pa-md" />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import PageSetting, { Setting } from 'src/components/PageSetting.vue';
import MainDrawer from 'src/components/drawer/MainDrawer.vue';
import LightDrawer from 'src/components/drawer/LightDrawer.vue';
import { LocalStrageObject } from 'src/utils/localStrageSupport';
import { computed, defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { createPinia, setActivePinia } from 'pinia';

export default defineComponent({
  name: 'MainLayout',
  components: {
    //'page-settings': PageSetting,
    //'main-drawer': MainDrawer,
    //'light-drawer': LightDrawer,
  },

  setup() {
    const opened = ref(false);
    setActivePinia(createPinia());
    const leftDrawerOpen = computed(() => opened.value);
    const router = useRouter();
    const model = new LocalStrageObject();
    const setting = ref({
      indexType: 'default',
      drawerType: 'default',
    } as Setting);

    const getValue = model.getterValue<Setting>('page-setting');
    if (getValue) {
      setting.value = getValue;
    }

    const head = ref({
      id: 0,
      display: false,
    } as head);

    const headerOpen = function (id: number) {
      head.value.id = id;
      head.value.display = true;
    };

    const headerClose = function () {
      head.value.id = 0;
      head.value.display = false;
    };

    const headerClick = function (id: number) {
      if (head.value.id == 0 || id != 0) {
        headerOpen(id);
      } else {
        headerClose();
      }
    };

    /*page */
    const { callPageList, pages, otherPages } = usePage();

    const otherPageClick = function (url: string) {
      window.open(url);
      headerClose();
    };

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        opened.value = !opened.value;
      },
      router,
      setting,
      head,
      headerOpen,
      headerClose,
      headerClick,
      callPageList,
      pages,
      otherPages,
      otherPageClick,
    };
  },
});
interface headItem {
  title: string;
  id: number;
}
interface head {
  id: number;
  display: boolean;
}
interface PageState {
  title: string;
  url: string;
}
interface PageOtherState {
  url: string;
  imgUrl: string;
}

/*page function */
function usePage() {
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
    {
      title: '動画',
      url: '/movie',
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
      url: '/holomemory',
    },
    {
      title: 'アーカイブ',
      url: '/holoarchive',
    },
  ] as PageState[]);

  const otherPages = ref([
    {
      imgUrl: 'src/assets/google_drive_icon.png',
      url: 'https://drive.google.com/drive/folders/1XSRGqBx5FeJaOSJj9UtF3e2M7S3Z3PsG?usp=sharing',
    },
    {
      imgUrl: 'src/assets/notion_icon.png',
      url: 'https://brindle-spring-0d6.notion.site/URL-2998ca28318d430cbdd7d5b7ad034ccf?pvs=4',
    },
  ] as PageOtherState[]);

  function callPageList(no: number) {
    if (no == 1) return mainPages.value;
    if (no == 2) return filePages.value;
    if (no == 3) return scraperPages.value;
    return [] as PageState[];
  }

  const pages = ref([
    {
      id: 1,
      title: 'テーブル',
    },
    {
      id: 2,
      title: 'お土産',
    },
    {
      id: 3,
      title: 'おまけ',
    },
  ] as headItem[]);

  return { pages, otherPages, callPageList };
}
</script>
<style>
@import '../css/q-table.css';
.menu-icon-image {
  width: 52px;
}
body {
  background-color: rgb(240, 238, 220);
  color: #333;
  font-family: 'Noto Sans JP', sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
}
/*navigation */
.nav-top {
  justify-content: flex-end;
  display: flex;
  padding-top: 20px;
  padding-right: 20px;
  width: calc(100% - 300px);
  height: 100%;
}
.nav-child {
  color: #333;
  text-decoration: none;
  cursor: pointer;
  font-size: 1rem;
  line-height: 1.85;
  transition: color 0.2s ease;
  padding-right: 32px;
  height: 100%;
  width: 120px;
  position: relative;
  z-index: 2;
}
.nav-child:hover {
  color: #808080;
}
.nav-child-select {
  background-color: rgba(202, 220, 175, 1);
  color: rgb(127, 109, 98);
  border-bottom: 1.5px dashed rgba(51, 51, 51, 0.2); /* 線の太さ、スタイル、色を指定 */
}
.nav-child-select:hover {
  background-color: rgba(182, 200, 155, 1);
}
.nav-child-page {
  height: 50px;
  width: 160px;
  cursor: pointer;
}
/*animation */
</style>
