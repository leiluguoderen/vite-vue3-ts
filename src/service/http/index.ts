import axios, {
  Axios,
  AxiosRequestConfig,
  AxiosResponse,
  CancelToken,
  CancelTokenSource,
} from "axios";

class HttpService {
  private config: AxiosRequestConfig = {};

  private axiosInstance: Axios;

  private cancelTokenSourceSet: Array<CancelTokenSource> = [];

  private constructor() {
    this.axiosInstance = new Axios(this.config);
    this.axiosInstance.interceptors.request.use(this.requestInterceptors);
    this.axiosInstance.interceptors.response.use(this.responseInterceptors);
  }

  async requestInterceptors(config: AxiosRequestConfig) {
    // 添加token
    (config.headers as any).accessToken = "";
    return config;
  }

  responseInterceptors(response: AxiosResponse) {
    // todo:请求完成去掉cancelToken

    if (response.data.code === 0) {
      // 跳过数据处理
      if (response.data.skipDataHandler) {
        return response.data.data;
      }
      return response.data.data;
    } else {
      // 跳过错误显示
      if (response.data.skipErrorHandler) {
        return response.data.data;
      }
      throw new Error(response.data.msg);
    }
  }

  request = () => {};

  getHttpCancelToken(): [CancelToken, Function] {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    this.cancelTokenSourceSet.push(source);
    const cancel = () => {
      source.cancel();
    };

    return [source.token, cancel];
  }

  cancelAllRequest() {
    this.cancelTokenSourceSet.forEach((source) => {
      source.cancel();
    });
  }
}
