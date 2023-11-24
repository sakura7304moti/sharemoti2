import { QTableColumn, useQuasar } from 'quasar';
import api, { NameListUpdateRequest } from 'src/api/main/NameListApi';
import { ref } from 'vue';

export function useNameListModel() {
  const quasar = useQuasar();
  const saveModalShow = ref(false); //追加
  const editModalShow = ref(false); //更新・削除

  const condition = ref({
    key: '',
    val: '',
  } as ConditionState);
  const insertCondition = ref({
    key: '',
    val: '',
  } as ConditionState);

  const updateCondition = ref({
    key: '',
    val: '',
  } as ConditionState);
  const isLoading = ref(false);
  const isSaveLoading = ref(false);
  const isDeleteLoading = ref(false);
  const detailEditLock = ref(true);
  const records = ref([] as DataState[]);

  const columns = [
    {
      name: 'key',
      label: 'あだ名',
      field: 'key',
      sortable: true,
    },
    {
      name: 'val',
      label: 'キャラ名',
      field: 'val',
      sortable: true,
    },
  ] as QTableColumn[];

  /*SELECT */
  const search = async function () {
    isLoading.value = true;
    const request = {
      key: condition.value.key,
      val: condition.value.val ?? '',
    } as ConditionState;

    await api
      .search(request)
      .then((response) => {
        if (response) {
          console.log('response', response);

          records.value.splice(0);
          response.records?.forEach((rec) => {
            if (rec.val != 'その他') {
              records.value.push({
                id: (rec.key ?? '') + (rec.val ?? ''),
                key: rec.key ?? '',
                val: rec.val ?? '',
              });
            }
          });
          sortRecords();
        }
      })
      .catch((e) => {
        console.log(e);

        quasar.notify({
          color: 'red',
          position: 'top',
          message: 'データの取得に失敗しました',
        });
      });
    isLoading.value = false;
  };

  /*INSERT , UPDATE*/
  const saveDisplayList = ref([] as DataState[]);
  const sortfn = function (a: ConditionState, b: ConditionState) {
    if (a.val > b.val) {
      return 1;
    } else {
      return -1;
    }
  };
  const sortRecords = function () {
    records.value.sort(sortfn);
  };
  const onEditClick = function (rec: ConditionState) {
    updateCondition.value = JSON.parse(JSON.stringify(rec));
    updateBeforeCondition.value = JSON.parse(JSON.stringify(rec));
    editModalShow.value = true;
  };

  const insertErr = ref('');
  const insertRecord = async function (key: string, val: string) {
    //バリテーション
    insertErr.value = '';
    if (key == '') {
      insertErr.value = 'あだ名を空にはできないよ!';
    }
    if (records.value.find((it) => it.key == key)) {
      insertErr.value = '既に同じあだ名が存在してるよ!';
    }
    if (insertErr.value == '') {
      isSaveLoading.value = true;
      const request = {
        key: key.replace(/\n/g, ''),
        val: val.replace(/\n/g, ''),
      } as ConditionState;
      await api
        .insert(request)
        .then((response) => {
          if (response) {
            console.log('response', response);

            //追加した場合
            if (response.insert) {
              records.value.push({
                id: key + val,
                key: key,
                val: val,
              });
              saveDisplayList.value.push({
                id: key + val,
                key: key,
                val: val,
              });
              insertCondition.value.key = '';
              insertCondition.value.val = '';
              quasar.notify({
                color: 'blue',
                position: 'top',
                message: '追加完了しました',
              });
              sortRecords();
              //saveModalShow.value = false;
              insertErr.value = '';
            }
          }
        })
        .catch((e) => {
          console.log(e);

          quasar.notify({
            color: 'red',
            position: 'top',
            message: 'データの取得に失敗しました',
          });
        });
      isSaveLoading.value = false;
    }
  };

  const updateErr = ref('');
  const updateBeforeCondition = ref({
    key: '',
    val: '',
  } as ConditionState);
  const updateRecord = async function (key: string, val: string) {
    //バリエーション
    updateErr.value = '';
    const rec = records.value.find((it) => it.val == val);
    if (!rec) {
      updateErr.value = '更新するあだ名が見つからなかった...';
    }
    if (rec?.key == key) {
      updateErr.value = 'キャラ名が変わってないから更新しないよ!';
    }

    if (updateErr.value == '') {
      isSaveLoading.value = true;
      const request = {
        bkey: updateBeforeCondition.value.key.replace(/\n/g, ''),
        bval: updateBeforeCondition.value.val.replace(/\n/g, ''),
        key: key.replace(/\n/g, ''),
        val: val.replace(/\n/g, ''),
      } as NameListUpdateRequest;
      console.log('update c', request);
      await api
        .update(request)
        .then((response) => {
          if (response) {
            console.log('response', response);

            //更新した場合
            if (response.update) {
              const index = records.value.findIndex(
                (it) =>
                  it.key == updateBeforeCondition.value.key &&
                  it.val == updateBeforeCondition.value.val
              );
              records.value[index] = {
                id: key + val,
                key: key,
                val: val,
              };
              insertCondition.value.key = '';
              insertCondition.value.val = '';
              quasar.notify({
                color: 'blue',
                position: 'top',
                message: '更新完了しました',
              });
              editModalShow.value = false;
            }
          }
        })
        .catch((e) => {
          console.log(e);

          quasar.notify({
            color: 'red',
            position: 'top',
            message: 'データの取得に失敗しました',
          });
        });
      isSaveLoading.value = false;
    }
  };

  /*DELETE */
  const deleteCheckModalShow = ref(false);
  const deleteRecord = async function (key: string, val: string) {
    isDeleteLoading.value = true;
    const request = {
      key: key.replace(/\n/g, ''),
      val: val.replace(/\n/g, ''),
    } as ConditionState;

    await api
      .delete(request)
      .then((response) => {
        if (response) {
          console.log('response', response);

          //削除成功した場合
          if (response.status) {
            quasar.notify({
              color: 'blue',
              position: 'top',
              message: '削除完了しました',
            });
            const index = records.value.findIndex((it) => it.key == key);
            records.value.splice(index, 1);
            updateCondition.value = {
              key: '',
            } as ConditionState;
            editModalShow.value = false;
            deleteCheckModalShow.value = false;
          } else {
            quasar.notify({
              color: 'red',
              position: 'top',
              message: 'データの削除に失敗しました',
            });
          }
        }
      })
      .catch((e) => {
        console.log(e);

        quasar.notify({
          color: 'red',
          position: 'top',
          message: 'データの取得に失敗しました',
        });
      });
    isDeleteLoading.value = false;
  };

  /*INIT */
  const initNameList = async function () {
    await api.init();
  };

  return {
    condition,
    saveModalShow,
    editModalShow,
    records,
    search,
    saveDisplayList,
    isLoading,
    insertCondition,
    updateRecord,
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
    initNameList,
    updateBeforeCondition,
    columns,
  };
}

interface ConditionState {
  key: string;
  val: string;
}

interface DataState {
  id: string;
  key: string;
  val: string;
}
