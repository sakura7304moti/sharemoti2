import { useQuasar } from 'quasar';
import api, { HololewdRequest } from 'src/api/scraper/HololewdApi';
import { selectItem } from 'src/types/selectorType';
import { ref } from 'vue';

export function useHololewdModel() {
  //val
  const quasar = useQuasar();
  const condition = ref({
    pageNo: 1,
    pageSize: 20,
    fullName: '',
    firstName: '',
    lastName: '',
    minLike: 0,
    maxLike: 0,
  } as ConditionState);
  const fetchedCondition = ref({
    pageNo: 1,
    pageSize: 20,
    fullName: '',
    firstName: '',
    lastName: '',
    minLike: 0,
    maxLike: 0,
  } as ConditionState);

  const dataState = ref({
    totalPages: 0,
    records: [] as HololewdRecord[],
  } as DataState);

  const selectItems = [
    {
      label: '未指定',
      value: 0,
    },
    {
      label: '100',
      value: 100,
    },
    {
      label: '500',
      value: 500,
    },
    {
      label: '1000',
      value: 1000,
    },
    {
      label: '2000',
      value: 2000,
    },
    {
      label: '3000',
      value: 3000,
    },
    {
      label: '4000',
      value: 4000,
    },
    {
      label: '5000',
      value: 5000,
    },
  ] as Array<selectItem>;

  const holoList = ref([] as string[]);
  //function
  const getHoloList = async function () {
    holoList.value.splice(0);
    await api
      .holoList()
      .then((response) => {
        console.log('response', response);
        response?.forEach((res) => holoList.value.push(res));
      })
      .catch((e) => {
        console.log(e);
        quasar.notify({
          color: 'red',
          position: 'top',
          message: 'データの取得に失敗しました',
        });
      });
  };
  getHoloList();

  const isLoading = ref(false);
  //検索条件変わっていたらページを1にする
  const compareCondition = function () {
    if (condition.value.fullName != fetchedCondition.value.fullName) {
      condition.value.pageNo = 1;
    }
    if (condition.value.firstName != fetchedCondition.value.firstName) {
      condition.value.pageNo = 1;
    }
    if (condition.value.lastName != fetchedCondition.value.lastName) {
      condition.value.pageNo = 1;
    }
    if (condition.value.minLike != fetchedCondition.value.minLike) {
      condition.value.pageNo = 1;
    }
    if (condition.value.maxLike != fetchedCondition.value.maxLike) {
      condition.value.pageNo = 1;
    }
  };

  const search = async function () {
    isLoading.value = true;
    dataState.value.records.splice(0);
    compareCondition(); //検索条件変わったらページ数1にする
    const request = {
      page_no: condition.value.pageNo,
      page_size: condition.value.pageSize,
      full_name: condition.value.fullName ?? '',
      first_name: condition.value.firstName ?? '',
      last_name: condition.value.lastName ?? '',
      min_like: condition.value.minLike,
      max_like: condition.value.maxLike,
      displayMenu: false,
    } as HololewdRequest;

    await api
      .search(request)
      .then((response) => {
        if (response) {
          console.log('response', response);

          dataState.value.totalPages = response.totalPages;

          response.records.forEach((rec) => {
            rec.images.forEach((r) => {
              dataState.value.records.push({
                fullName: rec.fullName,
                firstName: rec.firstName,
                lastName: rec.lastName,
                url: rec.url,
                image: r,
                video: '', //後で追加する
                vote: rec.vote,
                displayMenu: false,
              } as HololewdRecord);
            });
          });

          const c: ConditionState = JSON.parse(JSON.stringify(condition.value));
          fetchedCondition.value = {
            fullName: c.fullName,
            firstName: c.firstName,
            lastName: c.lastName,
            minLike: c.minLike,
            maxLike: c.maxLike,
            pageNo: c.pageNo,
            pageSize: c.pageSize,
          };
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

  const imageLinkOpen = function (url: string) {
    window.open(url);
  };

  return {
    condition,
    dataState,
    search,
    isLoading,
    holoList,
    getHoloList,
    selectItems,
    imageLinkOpen,
  };
}

interface ConditionState {
  pageNo: number;
  pageSize: number;
  fullName: string;
  firstName: string;
  lastName: string;
  minLike: number;
  maxLike: number;
}

interface HololewdRecord {
  fullName: string;
  firstName: string;
  lastName: string;
  url: string;
  image: string;
  video: string;
  vote: number;
  displayMenu: boolean;
}
interface DataState {
  totalPages: number;
  records: Array<HololewdRecord>;
}
