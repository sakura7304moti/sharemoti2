import { APIClient } from '../BaseApi';
//API呼び出しのためのクラス
export class FileAPIClient extends APIClient {
  public apiEndpoint = function () {
    const path = location.origin.replace(':9000', ''); //http:xxx
    return path + ':2000';
  };

}