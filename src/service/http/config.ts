import { AxiosRequestHeaders, Method } from "axios";

type requestConfig = {
  name: string;
  methods: Method;
  headers: AxiosRequestHeaders;
  data: Object | Array<any>;
  params: any;
};
