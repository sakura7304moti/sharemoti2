import { QTableColumn, useQuasar } from 'quasar';
import { ref } from 'vue';

export function useHoloYoutubeModel() {
  const quasar = useQuasar();
  const records = ref([] as DataState[]);
  const columns = [
    {
      name: 'member',
      label: 'メンバー',
      field: 'member',
      sortable: true,
    },
    {
      name: 'songName',
      label: '曲名',
      field: 'songName',
      sortable: true,
    },
    {
      name: 'date',
      label: '投稿日',
      field: 'date',
      sortable: true,
    },
    {
      name: 'link',
      label: 'リンク',
      field: 'link',
    },
  ] as QTableColumn[];
}
interface DataState {
  date: string;
  member: string;
  link: string;
  songName: string;
  fileName: string;
}
