import {  PageResult } from '../BaseApi';
import { ScraperAPIClient } from "./ScraperBaseApi";

export class HololewdApi extends ScraperAPIClient {
  public search(
    request: HololewdRequest
  ): Promise<PageResult<HololewdResponse> | null> {
    const url = '/hololewd/search';
    const path = this.combineUrl(url);

    return this.httpPost<HololewdRequest, PageResult<HololewdResponse>>(
      path,
      request
    );
  }

  public holoList(): Promise<Array<string> | null> {
    const url = '/hololewd/hololist';
    const path = this.combineUrl(url);

    return this.httpGet<Array<string>>(path);
  }
}

const api = new HololewdApi();
export default api;

/*
 *interfaces
 */
export interface HololewdRequest {
  page_no: number | null;
  page_size: number | null;
  full_name: string | null;
  first_name: string | null;
  last_name: string | null;
  min_like: number | null;
  max_like: number | null;
}
export interface HololewdResponse {
  fullName: string;
  firstName: string;
  lastName: string;
  url: string;
  images: Array<string>;
  videos: Array<string>;
  vote: number;
}
