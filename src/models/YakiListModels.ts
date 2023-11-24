import { QTableColumn, useQuasar } from 'quasar';
import api from 'src/api/main/YakiListApi';
import { ref } from 'vue';

export function useYakiListModel() {
  const quasar = useQuasar();
  const saveModalShow = ref(false); //追加
  const editModalShow = ref(false); //更新・削除
  const selecter = ['焼き直し', '焼き直しフェニックス'];
  const columns = [
    {
      name: 'word',
      label: '条約',
      field: 'word',
      sortable: true,
    },
    {
      name: 'yaki',
      label: '種類',
      field: 'yaki',
      sortable: true,
    },
  ] as QTableColumn[];
  const condition = ref({
    word: '',
    yaki: '',
  } as ConditionState);
  const insertCondition = ref({
    word: '',
    yaki: '焼き直し',
  } as ConditionState);

  const updateCondition = ref({
    word: '',
    yaki: '',
  } as ConditionState);
  const isLoading = ref(false);
  const isSaveLoading = ref(false);
  const isDeleteLoading = ref(false);
  const detailEditLock = ref(true);
  const records = ref([] as DataState[]);

  /*SELECT */
  const search = async function () {
    isLoading.value = true;
    await api
      .search({
        text: condition.value.word,
      })
      .then((response) => {
        if (response) {
          console.log('response', response);

          records.value.splice(0);
          response.records?.forEach((rec) =>
            records.value.push({
              word: rec.word ?? '',
              yaki: rec.yaki ?? '',
            })
          );
          sortRecords();
          if (condition.value.word == '焼き直し') {
            records.value = records.value.filter((it) => it.yaki == '焼き直し');
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
    isLoading.value = false;
  };

  /*INSERT , UPDATE*/
  const sortfn = function (a: ConditionState, b: ConditionState) {
    if (a.word > b.word) {
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
    editModalShow.value = true;
  };

  const insertErr = ref('');
  const insertRecord = async function (word: string, yaki: string) {
    //バリテーション
    insertErr.value = '';
    if (word == '') {
      insertErr.value = '条約を空にはできないよ!';
    }
    if (records.value.find((it) => it.word == word)) {
      insertErr.value = '既に同じ条約が存在してるよ!';
    }
    if (insertErr.value == '') {
      isSaveLoading.value = true;
      const request = {
        word: word.replace(/\n/g, ''),
        yaki: yaki.replace(/\n/g, ''),
      } as ConditionState;
      await api
        .save(request)
        .then((response) => {
          if (response) {
            console.log('response', response);

            //追加した場合
            if (response.insert) {
              records.value.push({
                word: word,
                yaki: yaki,
              });
              insertCondition.value.word = '';
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
  const updateRecord = async function (word: string, yaki: string) {
    //バリエーション
    updateErr.value = '';
    const rec = records.value.find((it) => it.word == word);
    if (!rec) {
      updateErr.value = '更新する条約が見つからなかった...';
    }
    if (rec?.yaki == yaki) {
      updateErr.value = '詳細が変わってないから更新しないよ!';
    }

    if (updateErr.value == '') {
      isSaveLoading.value = true;
      const request = {
        word: word.replace(/\n/g, ''),
        yaki: yaki.replace(/\n/g, ''),
      } as ConditionState;
      await api
        .save(request)
        .then((response) => {
          if (response) {
            console.log('response', response);

            //更新した場合
            if (response.update) {
              const index = records.value.findIndex((it) => it.word == word);
              records.value[index] = {
                word: word,
                yaki: yaki,
              };
              insertCondition.value.word = '';
              insertCondition.value.yaki = '';
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
  const deleteRecord = async function (word: string, yaki: string) {
    isDeleteLoading.value = true;
    const request = {
      word: word.replace(/\n/g, ''),
      yaki: yaki.replace(/\n/g, ''),
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
            const index = records.value.findIndex((it) => it.word == word);
            records.value.splice(index, 1);
            updateCondition.value = {
              word: '',
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

  return {
    condition,
    saveModalShow,
    editModalShow,
    records,
    search,
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
    selecter,
    columns,
  };
}

interface ConditionState {
  word: string;
  yaki: string;
}

interface DataState {
  word: string;
  yaki: string;
}
