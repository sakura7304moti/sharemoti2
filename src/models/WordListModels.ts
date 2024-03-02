import { QTableColumn, useQuasar } from 'quasar';
import api from 'src/api/main/WordList2Api';
import { ref } from 'vue';

export function useWordListModel() {
  const quasar = useQuasar();
  const saveModalShow = ref(false); //追加
  const editModalShow = ref(false); //更新・削除

  const columns = [
    {
      name: 'word',
      label: '名言',
      field: 'word',
      sortable: true,
    },
    {
      name: 'desc',
      label: '詳細',
      field: 'desc',
      sortable: true,
    },
    {
      name: 'createAt',
      label: '作成日',
      field: 'createAt',
      sortable: true,
    },
    {
      name: 'updateAt',
      label: '更新日',
      field: 'updateAt',
      sortable: true,
    },
  ] as QTableColumn[];

  const condition = ref('');
  const insertCondition = ref({
    word: '',
    desc: '',
  } as ConditionState);

  const updateCondition = ref({
    word: '',
    desc: '',
  } as ConditionState);
  const isLoading = ref(false);
  const isSaveLoading = ref(false);
  const isDeleteLoading = ref(false);
  const detailEditLock = ref(true);
  const records = ref([] as DataState[]);

  /*SELECT */
  function addHours(date: Date, hours: number): Date {
    const result = new Date(date);
    result.setHours(result.getHours() + hours);
    return result;
  }

  function formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  function displayDate(date: string): string {
    const inputDate = new Date(date);

    // 7時間後の日時
    //const resultDate = addHours(inputDate, 7);

    // yyyy-mm-ddの形式に変換
    const resultString = formatDate(inputDate);
    return resultString;
  }
  const search = async function () {
    isLoading.value = true;
    await api
      .search({
        text: condition.value,
      })
      .then((response) => {
        if (response) {
          console.log('response', response);

          records.value.splice(0);
          response.records?.forEach((rec) =>
            records.value.push({
              word: rec.word ?? '',
              desc: rec.desc ?? '',
              createAt: displayDate(rec.createAt ?? ''),
              updateAt: displayDate(rec.updateAt ?? ''),
            })
          );
          sortRecords();
          console.log('select', records.value);
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
  const insertRecord = async function (word: string, desc: string) {
    //バリテーション
    insertErr.value = '';
    if (word == '') {
      insertErr.value = '名言を空にはできないよ!';
    }
    if (records.value.find((it) => it.word == word)) {
      insertErr.value = '既に同じ名言が存在してるよ!';
    }
    if (insertErr.value == '') {
      isSaveLoading.value = true;
      const request = {
        word: word, //.replace(/\n/g, ''),
        desc: desc, //.replace(/\n/g, ''),
      } as ConditionState;
      await api
        .save(request)
        .then((response) => {
          if (response) {
            console.log('response', response);

            //追加した場合
            if (response.insert) {
              search();
              insertCondition.value.word = '';
              insertCondition.value.desc = '';
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
  const updateRecord = async function (word: string, desc: string) {
    //バリエーション
    updateErr.value = '';
    const rec = records.value.find((it) => it.word == word);
    if (!rec) {
      updateErr.value = '更新する名言が見つからなかった...';
    }
    if (rec?.desc == desc) {
      updateErr.value = '詳細が変わってないから更新しないよ!';
    }

    if (updateErr.value == '') {
      isSaveLoading.value = true;
      const request = {
        word: word, //.replace(/\n/g, ''),
        desc: desc, //.replace(/\n/g, ''),
      } as ConditionState;
      await api
        .save(request)
        .then((response) => {
          if (response) {
            console.log('response', response);

            //更新した場合
            if (response.update) {
              search();
              insertCondition.value.word = '';
              insertCondition.value.desc = '';
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
  const deleteRecord = async function (word: string, desc: string) {
    isDeleteLoading.value = true;
    const request = {
      word: word, //.replace(/\n/g, ''),
      desc: desc, //.replace(/\n/g, ''),
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
    columns,
  };
}

interface ConditionState {
  word: string;
  desc: string;
}

interface DataState {
  word: string;
  desc: string;
  createAt: string;
  updateAt: string;
}
