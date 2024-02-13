<template>
  <q-page class="">
    <div class="q-pb-md text-h5">スマブラ切り抜き集</div>

    <div class="ssbu-container">
      <div class="ssbu-left-content">
        <div v-if="playUrl != ''">
          <q-video :src="playUrl" style="width: 569px; height: 320px" />
          <div class="row q-gutter-xs text-primary">
            <div>
              <q-icon name="music_note" color="primary" />
            </div>
            <div>{{ playName }}</div>
          </div>
        </div>

        <div v-else>
          <div class="video-container">
            <div class="video-placeholder">
              <!-- 動画再生ボタンアイコン（例: フォントアイコンを使用） -->
              <i class="play-icon">▶️</i>
              <div class="text-white">動画はここで再生されるよ</div>
            </div>
          </div>
        </div>
      </div>
      <div class="ssbu-list-table">
        <q-table
          :rows="records"
          :columns="columns"
          row-id="id"
          separator="cell"
          rows-per-page-label="表示行数"
          no-results-label="見つからなかった..."
          no-data-label="見つからなかった..."
          :pagination="{ rowsPerPage: initTablePage }"
          :rows-per-page-options="pageOption"
          :filter="filter"
          :filter-method="filteringData"
          style="width: 830px"
          class="ssbu-table-scrollable-container"
          id="ssbu-table"
        >
          <!--sub 1/3 オプション-->
          <template v-slot:top-left>
            <div class="row q-gutter-md" style="width: 830px">
              <div>
                <q-input
                  dense
                  debounce="300"
                  v-model="filter.title"
                  placeholder="検索"
                  style="width: 200px"
                  align="left"
                  :readonly="disableFilter"
                >
                  <template v-slot:append>
                    <q-spinner
                      v-model="load.search"
                      v-if="load.search"
                      color="primary"
                      size="md"
                    />
                    <q-icon name="search" v-if="filter.title.length == 0" />
                    <q-icon name="search" v-else color="primary" />
                    <div class="text-caption" v-if="records.length > 0">
                      {{ records.length }}
                    </div>
                  </template>
                </q-input>
              </div>
              <div>
                <ssbu-name-select
                  v-model="filter.charName"
                  :readonly="disableFilter"
                />
              </div>
              <div>
                <q-select
                  v-model="filter.date"
                  :options="dateList"
                  dense
                  stack-label
                  clearable
                  label="日付"
                  transition-show="jump-up"
                  transition-hide="jump-up"
                  style="width: 130px"
                  :readonly="disableFilter"
                />
              </div>
              <div>
                <q-select
                  v-model="filter.folder"
                  :options="folderList"
                  dense
                  stack-label
                  clearable
                  label="種類"
                  transition-show="jump-up"
                  transition-hide="jump-up"
                  style="width: 130px"
                  :readonly="disableFilter"
                />
              </div>
            </div>
          </template>

          <!-- sub 2/3  ヘッダー-->
          <template v-slot:header="props">
            <q-tr :props="props">
              <q-th>再生</q-th>
              <q-th v-for="col in props.cols" :key="col.name" :props="props">
                <div v-if="col.label == '再生'" style="width: 50px">
                  {{ col.label }}
                </div>

                <div v-if="col.label == 'キャラ名'" style="width: 150px">
                  {{ col.label }}
                </div>

                <div v-if="col.label == 'タイトル'" style="width: 400px">
                  {{ col.label }}
                </div>

                <div v-if="col.label == '日付'" style="width: 50px">
                  {{ col.label }}
                </div>
              </q-th>
            </q-tr>
          </template>

          <!-- sub 3/3  アイテム-->
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td>
                <q-btn
                  icon="play_arrow"
                  :href="
                    api.apiEndpoint() + '/ssbu/download?id=' + props.row.id
                  "
                  @click.prevent="
                    console.log('play', props.row);
                    playUrl =
                      api.apiEndpoint() + '/ssbu/download?id=' + props.row.id;
                    playName = props.row.fileName;
                  "
                />
              </q-td>
              <q-td
                v-for="col in props.cols"
                :key="col.name"
                :props="props"
                style="white-space: normal; text-align: left"
              >
                {{ col.value }}
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useSsbuListModel } from 'src/models/SsbuListModels';
import SsbuNameSelect from 'src/components/selects/SsbuNameSelect.vue';
import api from 'src/api/file/SsbuListApi';
export default defineComponent({
  name: 'ssbu-list',
  components: {
    'ssbu-name-select': SsbuNameSelect,
  },
  setup() {
    const {
      filter,
      filteringData,
      disableFilter,
      folderList,
      selectId,
      columns,
      load,
      records,
      dateList,
      ssbuNames,
      search,
      getSsbuNames,
    } = useSsbuListModel();
    getSsbuNames();
    search();

    /*ちょうどいいくらいのページ数を取得 */
    const initTablePage = ref(100);
    initTablePage.value = Math.floor((window.innerHeight * 0.8 - 166) / 51);
    const pageOption = ref([10, 50, 100, 500] as number[]);
    if (!pageOption.value.find((it) => it == initTablePage.value)) {
      pageOption.value.push(initTablePage.value);
      pageOption.value.sort((a, b) => a - b);
    }

    pageOption.value.push(0);

    return {
      filter,
      filteringData,
      disableFilter,
      folderList,
      selectId,
      columns,
      load,
      records,
      dateList,
      ssbuNames,
      search,
      api,
      playUrl: ref(''),
      playName: ref(''),
      initTablePage,
      pageOption,
    };
  },
});
</script>
<style>
/*テーブルのstyle */
.ssbu-list-table {
  max-width: 800px;
}

.ssbu-list-table .q-table__top,
.ssbu-list-table .q-table__bottom,
.ssbu-list-table thead tr:first-child th {
  /* bg color is important for th; just specify one */
  background-color: white;
}

.ssbu-list-table thead tr th {
  position: sticky;
  z-index: 1;
}

.ssbu-list-table thead tr:first-child th {
  top: 0;
}

/* this is when the loading indicator appears */
.ssbu-list-table.q-table--loading thead tr:last-child th {
  /* height of all previous header rows */
  top: 48px;
}

/* prevent scrolling behind sticky top row on focus */
.ssbu-list-table tbody {
  /* height of all previous header rows */
  scroll-margin-top: 48px;
}
/*動画とテーブルのstyle */
.ssbu-container {
  display: flex;
  flex-wrap: wrap;
}

.ssbu-left-content {
  width: 570px;
}

.ssbu-right-content {
  width: 800px;
}

@media screen and (max-width: 1370px) {
  .ssbu-container {
    flex-direction: column;
  }

  .ssbu-left-content,
  .ssbu-right-content {
    width: 100%;
  }
}

/*テーブルのstyle */
.ssbu-table-scrollable-container {
  height: 80vh; /* ページの高さの80%に設定 */
  overflow-y: auto; /* 縦方向にスクロール可能にする */
}

/*? */
.video-container {
  width: 569px;
  height: 320px;
  position: relative;
  overflow: hidden; /* オーバーフローしたコンテンツを非表示にする */
}

.video-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000; /* ボタンアイコンの背景色 */
  opacity: 0.7; /* 不透明度を設定して動画の一部を透過させる */
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.play-icon {
  font-size: 40px;
  color: #fff; /* ボタンアイコンの色 */
  cursor: pointer;
}
</style>
