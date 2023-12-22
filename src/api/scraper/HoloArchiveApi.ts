import { ScraperAPIClient } from './ScraperBaseApi';
export class HoloArchiveApi extends ScraperAPIClient {
  public GetMovie(): Promise<MovieState | null> {
    const url = '/holoArchive/search/movie';
    const path = this.combineUrl(url);
    return this.httpGet<MovieState>(path);
  }

  public GetChannel(): Promise<ChannelState | null> {
    const url = '/holoArchive/search/channel';
    const path = this.combineUrl(url);
    return this.httpGet<ChannelState>(path);
  }
}
const api = new HoloArchiveApi();
export default api;

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
