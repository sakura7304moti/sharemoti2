<template>
  <q-page class="">
    <div class="text-h5 q-pb-md">Hololewd Scraper</div>
    <!--入力フォーム-->
    <div class="row q-gutter-md">
      <q-select
        label="fullNames"
        v-model="condition.fullName"
        :options="holoList"
        class="form-model"
        dense
        stack-label
        clearable
      />
      <q-select
        label="min like"
        v-model="condition.minLike"
        :options="selectItems"
        class="form-model"
        emit-value
        map-options
        dense
      />
    </div>

    <!--botton-->
    <div class="row q-gutter-md q-pt-md">
      <q-btn
        label="検索"
        color="primary"
        dense
        icon="search"
        @click="search"
        :loading="isLoading"
      />
    </div>

    <!--pagi-->
    <div class="q-pt-sm" v-if="dataState.totalPages > 1">
      <q-pagination
        v-model="condition.pageNo"
        :max="dataState.totalPages"
        :max-pages="10"
        @click="search()"
      />
      <hr />
    </div>

    <!--gallery-->
    <div class="q-pt-md">
      <ul class="gallery q-pt-md">
        <li v-for="r in dataState.records" :key="r.image">
          <a
            :href="r.image"
            @click.prevent.stop="r.displayMenu = !r.displayMenu"
            class="image-container"
            :class="{
              'image-selected': r.displayMenu,
            }"
          >
            <img :src="r.image" />
            <div class="button-overlay" v-if="r.displayMenu">
              <div class="row q-gutter-md button">
                <!--Download-->
                <q-btn
                  icon="file_download"
                  @click.prevent="imageDownload(r.image)"
                  color="primary"
                  round
                  ><q-tooltip :delay="1000">download</q-tooltip></q-btn
                >
                <!--View-->
                <q-btn
                  icon="image"
                  @click.prevent="fullScViewClick(r.image)"
                  color="secondary"
                  round
                  ><q-tooltip :delay="1000">image view</q-tooltip></q-btn
                >
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>

    <!--View Modal-->
    <q-dialog
      v-model="fullSc"
      persistent
      full-height
      full-width
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card>
        <q-card-section>
          <q-bar>
            <q-btn
              dense
              flat
              icon="close"
              v-close-popup
              style="margin-left: auto"
            >
              <q-tooltip class="bg-white text-primary">Close</q-tooltip>
            </q-btn>
          </q-bar>
          <img :src="fullScreenViewUrl" :height="pageHeight" />
        </q-card-section>
      </q-card>
    </q-dialog>

    <!--pagi-->
    <div class="q-pt-md" v-if="dataState.totalPages > 1 && !isLoading">
      <hr />

      <q-pagination
        v-model="condition.pageNo"
        :max="dataState.totalPages"
        :max-pages="10"
        @click="search()"
      />
      <hr />
    </div>
  </q-page>
</template>
<script lang="ts">
import { useViewSupport } from 'src/utils/viewSupport';
import { useHololewdModel } from 'src/models/HololewdModels';
import { computed, defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'holoewd-page',
  setup() {
    const {
      condition,
      dataState,
      search,
      isLoading,
      holoList,
      getHoloList,
      selectItems,
      imageLinkOpen,
    } = useHololewdModel();
    const { fileDownload, imageDownload } = useViewSupport();
    const downloadMode = ref(false);

    const fullScreenViewUrl = ref('');
    const fullSc = ref(false);
    const fullScViewClick = function (url: string) {
      fullScreenViewUrl.value = url;
      fullSc.value = true;
    };

    const pageOpenClick = function (url: string) {
      window.open(url);
    };

    const pageWidth = computed(() => {
      return window.innerWidth;
    });

    const pageHeight = computed(() => {
      return window.innerHeight - 100;
    });
    return {
      condition,
      dataState,
      search,
      isLoading,
      holoList,
      getHoloList,
      selectItems,
      imageLinkOpen,
      fileDownload,
      imageDownload,
      downloadMode,
      fullSc,
      fullScreenViewUrl,
      fullScViewClick,
      maximizedToggle: ref(true),
      pageOpenClick,
      pageWidth,
      pageHeight,
    };
  },
});
</script>
<style>
/*input */
.form-model {
  width: 200px;
  height: 40px;
}
.form-date-span {
  width: 10px;
}
.gallery {
  columns: 4; /*段組みの数*/
  padding: 0 15px; /*ギャラリー左右に余白をつける*/
}

.gallery li {
  margin-bottom: 20px; /*各画像下に余白をつける*/
}

/*ギャラリー内のイメージは横幅100%にする*/
.gallery img {
  width: 100%;
  height: auto;
  vertical-align: bottom; /*画像の下にできる余白を削除*/
}
/*===== メニュー表示用 ===== */
.image-container {
  position: relative;
  display: inline-block;
}

.image-container img {
  display: block;
  width: 100%;
  height: auto;
}

.button-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.button-overlay .button {
  width: 100%;
  height: 40px;
  background-color: rgba(128, 128, 128, 0);
}

/*　横幅900px以下の段組み設定　*/
@media only screen and (max-width: 900px) {
  .gallery {
    columns: 3;
  }
}

@media only screen and (max-width: 768px) {
  .gallery {
    columns: 2;
  }
}

/*========= レイアウトのためのCSS ===============*/

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  color: #333;
}

h1 {
  text-align: center;
  font-size: 6vw;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin: 30px 0;
}

p {
  margin: 0 10px 10px 10px;
  word-wrap: break-word;
}

/*image select */
.image-selected {
  background: #f0f7ff;
  border: dashed 2px #5b8bd0; /*点線*/
}
</style>
