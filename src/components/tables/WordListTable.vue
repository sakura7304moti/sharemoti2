<template>
  <div class="row q-gutter-md">
    <!--画面左側-->
    <div>
      <q-table
        :title="tableName"
        :rows="records"
        :columns="columns"
        row-key="word"
        :style="{ height: tableHeight }"
        separator="cell"
        rows-per-page-label="表示行数"
        no-results-label="見つからなかった..."
        no-data-label="見つからなかった..."
        :pagination="{ rowsPerPage: 0 }"
        :rows-per-page-options="[0]"
        :filter="condition"
        class="word-list-table"
      >
        <!--sub 1/3 オプション-->
        <template v-slot:top-right>
          <div class="row q-gutter-md word-list-table-header">
            <div class="word-list-table-filter">
              <q-input
                dense
                debounce="300"
                v-model="condition"
                placeholder="検索"
                class="word-list-table-filter-input"
                align="left"
              >
                <template v-slot:append>
                  <q-spinner
                    v-model="isLoading"
                    v-if="isLoading"
                    color="primary"
                    size="md"
                  />
                  <q-icon name="search" v-if="condition.length == 0" />
                  <q-icon name="search" v-else color="primary" />
                  <div class="text-caption" v-if="records.length > 0">
                    {{ records.length }}
                  </div>
                </template>
              </q-input>
            </div>
            <div>
              <q-btn
                label="追加"
                icon-right="note_add"
                color="grey-6"
                @click="saveModalShow = true"
                outline
              />
            </div>
            <div>
              <lock-icon
                v-model="detailEditLock"
                @event-change="detailEditLock = $event"
                class="q-pt-sm"
              />
            </div>
          </div>
        </template>
        <!-- sub 2/3  ヘッダー-->
        <template v-slot:header="props">
          <q-tr :props="props">
            <q-th v-if="detailEditLock == false"> 編集 </q-th>
            <q-th v-for="col in props.cols" :key="col.name" :props="props">
              <div
                v-if="col.label == '名言' || col.label == '詳細'"
                class="word-list-table-main-column"
              >
                {{ col.label }}
              </div>
              <div
                v-if="
                  col.label == '作成日' ||
                  col.label == '更新日' ||
                  col.label == ''
                "
                class="word-list-table-sub-column"
              >
                {{ col.label }}
              </div>
            </q-th>
          </q-tr>
        </template>
        <!-- sub 3/3  アイテム-->
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td v-if="detailEditLock == false">
              <a
                href="#"
                @click.prevent="
                  console.log(props.row.word);
                  onEditClick(props.row);
                "
                ><q-icon name="edit_note" color="secondary" size="md"></q-icon
              ></a>
            </q-td>
            <q-td
              v-for="col in props.cols"
              :key="col.name"
              :props="props"
              style="
                text-align: left;
                white-space: pre-wrap;
                word-wrap: break-word;
              "
            >
              {{ col.value }}
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
    <!--追加画面-->
    <q-dialog v-model="saveModalShow">
      <q-card style="max-width: 800px">
        <q-card-section>
          <div class="q-pa-md">
            <div class="text-subtitle1 row q-gutter-md">
              <div style="margin-right: auto">新規追加</div>
              <q-btn
                text-color="primary"
                @click="saveModalShow = false"
                round
                flat
                label="閉じる"
              />
            </div>
            <div class="row q-gutter-md q-pa-md">
              <q-input
                label="名言"
                type="textarea"
                v-model="insertCondition.word"
                class="form-model"
                dense
                outlined
                stack-label
                style="width: 250px; height: 150px"
                clearable
              />

              <q-input
                label="詳細(省略可)"
                type="textarea"
                v-model="insertCondition.desc"
                class="form-model"
                dense
                outlined
                stack-label
                style="width: 400px; height: 150px"
                clearable
              />
            </div>
            <div class="row q-gutter-md">
              <q-btn
                @click.prevent="
                  insertRecord(insertCondition.word, insertCondition.desc)
                "
                label="追加"
                color="primary"
                outline
                icon="note_add"
                :loading="isSaveLoading"
              />
            </div>

            <div class="text-negative text-caption">
              {{ insertErr }}
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>

  <!--更新ダイアログ-->
  <q-dialog v-model="editModalShow">
    <q-card style="max-width: 800px">
      <q-card-section>
        <div class="q-pa-md">
          <div class="row q-gutter-md">
            <div class="text-h6" style="margin-right: auto">更新・削除</div>
            <q-btn
              label="閉じる"
              text-color="primary"
              @click="editModalShow = false"
              round
              flat
            />
          </div>

          <!--inputs-->
          <div class="row q-gutter-md q-pa-md">
            <q-input
              label="名言"
              type="textarea"
              v-model="updateCondition.word"
              class="form-model"
              dense
              outlined
              stack-label
              style="width: 250px; height: 150px"
              readonly
            />
            <q-input
              label="詳細(省略可)"
              type="textarea"
              v-model="updateCondition.desc"
              class="form-model"
              dense
              outlined
              stack-label
              style="width: 400px; height: 150px"
              clearable
            />
          </div>
          <!--buttons-->
          <div class="row q-gutter-md">
            <q-btn
              @click.prevent="
                updateRecord(updateCondition.word, updateCondition.desc)
              "
              label="更新"
              color="primary"
              outline
              icon="note_add"
              style="margin-right: auto"
              :loading="isSaveLoading"
            />
            <div class="text-negative text-caption">
              {{ updateErr }}
            </div>
            <q-btn
              @click.prevent="deleteCheckModalShow = true"
              label="削除"
              color="negative"
              outline
              icon="note_add"
            />
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>

  <!--削除確認-->
  <q-dialog v-model="deleteCheckModalShow">
    <q-card>
      <q-section>
        <div class="q-pa-md">
          <div class="row q-gutter-md">
            <div class="text-h6" style="margin-right: auto">削除確認</div>
            <q-btn
              icon="close"
              @click="deleteCheckModalShow = false"
              round
              flat
            />
          </div>
          <hr />
          <div>次の名言を削除してもいいかな？</div>
          <q-field label="名言" stack-label>{{ updateCondition.word }}</q-field>
          <div class="row q-gutter-md q-pt-sm">
            <q-btn
              @click.prevent="
                deleteRecord(updateCondition.word, updateCondition.desc)
              "
              label="削除する"
              color="negative"
              outline
              icon="note_add"
              dense
              :loading="isDeleteLoading"
            />
          </div>
        </div>
      </q-section>
    </q-card>
  </q-dialog>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { useWordListModel } from '../../../src/models/WordListModels';
import lockIcon from '../../../src/components/LockIcon.vue';
export default defineComponent({
  name: 'table-word-list',
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: false,
      default: '名言集',
    },
    height: {
      type: Number,
      required: false,
      default: 700,
    },
  },
  components: {
    'lock-icon': lockIcon,
  },
  setup(props) {
    const {
      saveModalShow,
      editModalShow,
      records,
      search,
      isLoading,
      updateRecord,
      insertCondition,
      isSaveLoading,
      deleteRecord,
      isDeleteLoading,
      detailEditLock,
      updateCondition,
      onEditClick,
      insertErr,
      insertRecord,
      updateErr,
      deleteCheckModalShow,
      columns,
    } = useWordListModel();
    search();

    watch(editModalShow, () => {
      if (editModalShow.value == false) {
        updateCondition.value.word = '';
        updateCondition.value.desc = '';
      }
    });

    return {
      condition: ref(props.modelValue),
      tableName: ref(props.label),
      tableHeight: ref(props.height + 'px'),
      editModalShow,
      records,
      search,
      isLoading,
      updateRecord,
      insertCondition,
      isSaveLoading,
      deleteRecord,
      isDeleteLoading,
      saveModalShow,
      visibleColumns: ref(true),
      detailEditLock,
      updateCondition,
      onEditClick,
      insertErr,
      insertRecord,
      updateErr,
      deleteCheckModalShow,
      columns,
    };
  },
});
</script>
<style>
/*input 入力の横幅 */
.form-model {
  width: 200px;
  height: 40px;
}
/*テーブルのstyle */
.word-list-table {
  max-width: 800px;
}

.word-list-table-header {
  width: 800px;
}

.word-list-table-main-column {
  width: 200px;
}

.word-list-table-sub-column {
  width: 100px;
}

.word-list-table-filter {
  width: 70%;
}

.word-list-table-filter-input {
  width: 200px;
}

.word-list-table .q-table__top,
.word-list-table .q-table__bottom,
.word-list-table thead tr:first-child th {
  /* bg color is important for th; just specify one */
  background-color: white;
}

.word-list-table thead tr th {
  position: sticky;
  z-index: 1;
}

.word-list-table thead tr:first-child th {
  top: 0;
}

/* this is when the loading indicator appears */
.word-list-table.q-table--loading thead tr:last-child th {
  /* height of all previous header rows */
  top: 48px;
}

/* prevent scrolling behind sticky top row on focus */
.word-list-table tbody {
  /* height of all previous header rows */
  scroll-margin-top: 48px;
}
/*スマホ用 */
@media only screen and (max-width: 400px) {
  .word-list-table {
    max-width: 350px;
  }
  .word-list-table-header {
    max-width: 350px;
  }
  .word-list-table-main-column {
    width: 50px;
  }

  .word-list-table-sub-column {
    width: 30px;
  }
  .word-list-table-filter {
    width: 50%;
  }

  .word-list-table-filter-input {
    width: 170px;
  }
}
</style>
