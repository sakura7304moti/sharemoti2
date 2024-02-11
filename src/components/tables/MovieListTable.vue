<template>
  <q-table
    :title="tableName"
    v-if="!load.search"
    :rows="records"
    :columns="columns"
    row-key="id"
    :style="{ height: tableHeight }"
    separator="cell"
    rows-per-page-label="表示行数"
    no-results-label="見つからなかった..."
    no-data-label="見つからなかった..."
    :pagination="{ rowsPerPage: 0 }"
    :rows-per-page-options="[0]"
    :filter="filter"
    :filter-method="filteringData"
    class="table-base scroll-table"
  >
    <!--sub 1/3 オプション-->
    <template v-slot:top-right>
      <div class="row q-gutter-md table-base-header">
        <div class="table-base-filter">
          <q-input
            dense
            debounce="300"
            v-model="filter.fileName"
            placeholder="検索"
            class="table-base-filter-input"
            align="left"
          >
            <template v-slot:append>
              <q-spinner
                v-model="load.search"
                v-if="load.search"
                color="primary"
                size="md"
              />
              <q-icon name="search" v-if="filter.fileName.length == 0" />
              <q-icon name="search" v-else color="primary" />
              <div class="text-caption" v-if="records.length > 0">
                {{ records.length }}
              </div>
            </template>
          </q-input>
        </div>
      </div>
      <div class="q-pt-sm">
        <q-select
          v-model="filter.poster"
          :options="posterOptions"
          dense
          stack-label
          label="投稿者"
          transition-show="jump-up"
          transition-hide="jump-up"
          style="width: 150px"
          clearable
        />
      </div>
    </template>

    <!-- sub 2/3  ヘッダー-->
    <template v-slot:header="props">
      <q-tr :props="props">
        <q-th style="width: 50px"><div class="q-pt-md">再生</div> </q-th>
        <q-th v-for="col in props.cols" :key="col.name" :props="props">
          <div v-if="col.label == 'タイトル'" class="table-base-main-column">
            {{ col.label }}
          </div>
          <div v-if="col.label == 'ファイル名'" class="table-base-sub-column">
            {{ col.label }}
          </div>
        </q-th>
      </q-tr>
    </template>

    <!-- sub 3/3  アイテム-->
    <template v-slot:body="props">
      <q-tr :props="props">
        <q-td>
          <a
            :href="`${api.apiEndpoint()}/movieList/download?fileName=${
              props.row.fileName
            }&poster=${props.row.poster}`"
            class="play-btn"
            ><q-icon name="play_circle" color="primary" size="sm"></q-icon
          ></a>
        </q-td>
        <q-td
          v-for="col in props.cols"
          :key="col.name"
          :props="props"
          style="white-space: normal; text-align: left"
        >
          <div class="text-weight-medium">
            {{ col.value }}
          </div>
          <div>
            {{ records.find((it) => it.fileName == col.value)?.poster }}
          </div>
        </q-td>
      </q-tr>
    </template>
  </q-table>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useMovieListModel } from 'src/models/MovieListModels';
import api from 'src/api/file/MovieListApi';
export default defineComponent({
  name: 'table-movie-list',
  props: {
    label: {
      type: String,
      required: false,
      default: '完成品一覧',
    },
    height: {
      type: Number,
      required: false,
      default: 700,
    },
  },
  setup(props) {
    const {
      columns,
      quasar,
      records,
      load,
      search,
      filter,
      filteringData,
      posterOptions,
    } = useMovieListModel();
    search();

    return {
      tableName: ref(props.label),
      tableHeight: ref(props.height + 'px'),
      columns,
      quasar,
      records,
      load,
      search,
      filter,
      filteringData,
      posterOptions,
      api,
    };
  },
});
</script>
