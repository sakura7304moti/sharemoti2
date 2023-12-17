import { computed, ref } from 'vue';
import api from 'src/api/scraper/HoloArchiveApi';
import { useQuasar } from 'quasar';

export function useHoloArchiveModel() {
  /*val */
  const channel = ref({
    records: [] as Channel[],
  } as ChannelState);
  const movie = ref({
    records: [] as Movie[],
  } as MovieState);
  const filterMovie = computed(() => filteringData(movie.value.records));
  const load = ref({
    channel: false,
    movie: false,
  } as LoadState);

  const filter = ref({
    channelId: '',
    fromDate: '',
    toDate: '',
    movieType: '',
    title: '',
  } as FilterState);
  const beforeFilter = ref({
    channelId: '',
    fromDate: '',
    toDate: '',
    movieType: '',
    title: '',
  } as FilterState);
  const page = ref({
    pageNo: 1,
    pageCount: 0,
    pageSize: 20,
  } as PageState);

  const quasar = useQuasar();

  /*filter function */
  const filteringData = function (rows: readonly Movie[]) {
    let letRows = rows;

    //絞り込み
    if (filter.value.channelId != '' && filter.value.channelId != undefined) {
      letRows = letRows.filter((it) => it.channelId == filter.value.channelId);
    }

    if (filter.value.fromDate != '' && filter.value.fromDate != undefined) {
      letRows = letRows.filter(
        (it) => it.date >= new Date(filter.value.fromDate)
      );
    }

    if (filter.value.toDate != '' && filter.value.toDate != undefined) {
      letRows = letRows.filter(
        (it) => it.date <= new Date(filter.value.fromDate)
      );
    }

    if (filter.value.title != '' && filter.value.title != undefined) {
      letRows = letRows.filter((it) => it.title.includes(filter.value.title));
    }

    if (filter.value.movieType != '' && filter.value.movieType != undefined) {
      letRows = letRows.filter((it) => it.movieType == filter.value.movieType);
    }

    //ページ情報更新
    if (!isEqualsFilter()) {
      page.value.pageNo = 1;
    }
    page.value.pageCount = Math.ceil(letRows.length / page.value.pageSize);
    const startIndex = Math.max(page.value.pageNo - 1, 0) * page.value.pageSize;
    return letRows.slice(startIndex, startIndex + page.value.pageSize);
  };

  const isEqualsFilter = function () {
    if (
      filter.value.channelId == beforeFilter.value.channelId &&
      filter.value.fromDate == beforeFilter.value.fromDate &&
      filter.value.toDate == beforeFilter.value.toDate &&
      filter.value.title == beforeFilter.value.title &&
      filter.value.movieType == beforeFilter.value.movieType
    ) {
      return true;
    } else {
      false;
    }
  };

  /*api function */
  const getChannelState = async function () {
    load.value.channel = true;
    await api
      .GetChannel()
      .then((response) => {
        if (response) {
          console.log('channel', response);
          channel.value.records.splice(0);
          response.records.forEach((it) => {
            channel.value.records.push(it);
          });
        } else {
          quasar.notify({
            color: 'red',
            position: 'top',
            message: 'データの取得に失敗しました',
          });
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
    load.value.channel = false;
  };

  const getMovieState = async function () {
    load.value.movie = true;
    await api
      .GetMovie()
      .then((response) => {
        if (response) {
          console.log('movie', response);
          movie.value.records.splice(0);
          response.records.forEach((it) => {
            movie.value.records.push({
              id: it.id,
              url: it.url,
              title: it.title,
              date: new Date(it.date.split(' ')[0]),
              channelId: it.channelId,
              viewCount: it.viewCount,
              thumbnailUrl: it.thumbnailUrl,
              movieType: it.movieType,
            });
          });
        } else {
          quasar.notify({
            color: 'red',
            position: 'top',
            message: 'データの取得に失敗しました',
          });
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
  };
  return {
    channel,
    movie,
    filterMovie,
    load,
    filter,
    page,
    getChannelState,
    getMovieState,
    filteringData,
  };
}

/*Page State */
interface LoadState {
  channel: boolean;
  movie: boolean;
}

interface FilterState {
  channelId: string;
  fromDate: string;
  toDate: string;
  movieType: string;
  title: string;
}

interface PageState {
  pageNo: number;
  pageCount: number;
  pageSize: number;
}

/*Api Response */
interface ChannelState {
  records: Array<Channel>;
}

interface MovieState {
  records: Array<Movie>;
}

interface Movie {
  id: string;
  url: string;
  title: string;
  date: Date;
  channelId: string;
  viewCount: number;
  thumbnailUrl: string;
  movieType: 'movie' | 'live' | 'short';
}

interface Channel {
  channelId: string;
  channelName: string;
  description: string;
  headerUrl: string;
  avatarUrl: string;
}
