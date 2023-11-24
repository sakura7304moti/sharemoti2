import { APIClient } from '../BaseApi';
//API呼び出しのためのクラス
export class ScraperAPIClient extends APIClient {
  public apiEndpoint = function () {
    const path = location.origin.replace(':9000', ''); //http:xxx
    return path + ':3000';
  };

}