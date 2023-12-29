import { defineStore } from 'pinia';
import { ref } from 'vue';
import api from 'src/api/scraper/HoloArchiveApi';
export const useHoloArchiveStore = defineStore('holo-archive', {
  state: () => {
    return {
      fullRecords: ref([] as Movie[]),
      pageRecords: ref([] as Movie[]),
      playMovie: ref(''),
      filter: ref({
        channelId: '',
        fromDate: '',
        toDate: '',
        movieType: '',
        title: '',
      } as FilterState),
      beforeFilter: ref({
        channelId: '',
        fromDate: '',
        toDate: '',
        movieType: '',
        title: '',
      } as FilterState),
      page: ref({
        pageNo: 1,
        pageCount: 0,
        pageSize: 200,
      } as PageState),
      channels: ref([] as Channel[]),
      loading: ref(false),
    };
  },
  getters: {
    isPageReset: function () {
      if (
        this.filter.channelId != this.beforeFilter.channelId ||
        this.filter.fromDate != this.beforeFilter.fromDate ||
        this.filter.toDate != this.beforeFilter.toDate ||
        this.filter.title != this.beforeFilter.title ||
        this.filter.movieType != this.beforeFilter.movieType
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  actions: {
    getMovies: async function () {
      /**
       * アーカイブを取得
       */
      this.loading = true;
      this.fullRecords.splice(0);
      this.getChannels();
      await api.GetMovie().then((response) => {
        if (response) {
          response.records.forEach((it) => {
            this.fullRecords.push({
              id: it.id,
              url: it.url,
              title: it.title,
              date: new Date(it.date.split(' ')[0]),
              channelId: it.channelId,
              avatarUrl: this.channels.filter(
                (c) => c.channelId == it.channelId
              )[0].avatarUrl,
              viewCount: it.viewCount,
              thumbnailUrl: it.thumbnailUrl.replace(
                'maxresdefault',
                'mqdefault'
              ),
              movieType: it.movieType,
            });
          });
          this.filteringData();
        }
      });
      this.loading = false;
    },
    getChannels: function () {
      /**
       * チャンネルを取得
       */
      this.channels.splice(0);
      api.GetChannel().then((response) => {
        if (response) {
          response.records.forEach((it) => this.channels.push(it));
        }
      });
    },
    filteringData: function () {
      if (this.fullRecords.length == 0) {
        this.getMovies();
      }
      let letRows = this.fullRecords;
      this.pageRecords.splice(0);
      //絞り込み
      if (this.filter.channelId != '' && this.filter.channelId != undefined) {
        letRows = letRows.filter((it) => it.channelId == this.filter.channelId);
      }

      if (this.filter.fromDate != '' && this.filter.fromDate != undefined) {
        letRows = letRows.filter(
          (it) => it.date >= new Date(this.filter.fromDate)
        );
      }

      if (this.filter.toDate != '' && this.filter.toDate != undefined) {
        letRows = letRows.filter(
          (it) => it.date <= new Date(this.filter.toDate)
        );
      }

      if (this.filter.title != '' && this.filter.title != undefined) {
        letRows = letRows.filter((it) => {
          try {
            return it.title.includes(this.filter.title);
          } catch (e) {
            return false;
          }
        });
      }

      if (this.filter.movieType != '' && this.filter.movieType != undefined) {
        letRows = letRows.filter((it) => it.movieType == this.filter.movieType);
      }

      //ページ情報更新
      if (this.isPageReset) {
        this.page.pageNo = 1;
      }

      //検索情報を保存
      this.beforeFilter.channelId = this.filter.channelId;
      this.beforeFilter.fromDate = this.filter.fromDate;
      this.beforeFilter.toDate = this.filter.toDate;
      this.beforeFilter.title = this.filter.title;
      this.beforeFilter.movieType = this.filter.movieType;

      //ページ情報更新
      this.page.pageCount = Math.ceil(letRows.length / this.page.pageSize);
      const startIndex = Math.max(this.page.pageNo - 1, 0) * this.page.pageSize;

      //レコードをセット
      letRows
        .sort((a, b) => {
          // date で降順にソート
          if (a.date > b.date) return -1;
          if (a.date < b.date) return 1;

          // channelId で昇順にソート
          if (a.channelId < b.channelId) return -1;
          if (a.channelId > b.channelId) return 1;

          // title で昇順にソート
          if (a.title < b.title) return -1;
          if (a.title > b.title) return 1;

          return 0;
        })
        .slice(startIndex, startIndex + this.page.pageSize)
        .forEach((it) => this.pageRecords.push(it));
      console.log('page records', this.pageRecords);
    },

    setPlayMovie: function (url: string) {
      console.log('play', url);
      this.playMovie = url;
    },
  },
});
interface Movie {
  id: string;
  url: string;
  title: string;
  date: Date;
  channelId: string;
  avatarUrl: string;
  viewCount: number;
  thumbnailUrl: string;
  movieType: 'movie' | 'live' | 'short';
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
interface Channel {
  channelId: string;
  channelName: string;
  description: string;
  headerUrl: string;
  avatarUrl: string;
}
/**
 * State
 * 検索データ
 * ページング済み検索データ
 * ページデータ
 * 検索条件
 *
 *
 *
 *
 *
 */
