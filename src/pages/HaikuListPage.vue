<template>
  <q-page class="">
    <q-toggle v-model="tableView" label="テーブル表示" />
    <haiku-list-table
      v-if="tableView"
      v-model="tableFilter"
      :height="tableHeight"
    />
    <haiku-list-component v-else v-model="listFilter" />
  </q-page>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import HaikuList from 'components/HaikuList.vue';
import HaikuListTable from 'src/components/tables/HaikuListTable.vue';
export default defineComponent({
  name: 'haiku-list',
  components: {
    'haiku-list-component': HaikuList,
    'haiku-list-table': HaikuListTable,
  },
  setup() {
    return {
      tableView: ref(false),
      listFilter: ref(''),
      tableFilter: ref(''),
      tableHeight: ref(document.documentElement.scrollHeight * 0.85),
    };
  },
});
</script>
<style>
@font-face {
  font-family: 'haiku';
  src: url(../fonts/haiku2.ttf) format('truetype');
}
@font-face {
  font-family: 'HinaMincho-Regular';
  src: url(../fonts/HinaMincho-Regular.ttf) format('truetype');
}
</style>
