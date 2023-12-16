import { ref } from 'vue';
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
  const load = ref({
    channel: false,
    movie: false,
  } as LoadState);

  const quasar = useQuasar();

  /*function */
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
            movie.value.records.push(it);
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
    load,
    getChannelState,
    getMovieState,
  };
}

/*Page State */
interface LoadState {
  channel: boolean;
  movie: boolean;
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
  date: string;
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
