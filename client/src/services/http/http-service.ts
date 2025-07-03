import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios';
import { environment } from '../../configuration/environment';
import { HttpServiceError, type HttpServiceResponse } from './types';

const defaultHeaders = { 'content-type': 'application/json' };

const request = async <Request, Response>({
  url,
  data,
  method,
  timeout = environment.requestTimeout,
  headers = defaultHeaders,
  withCredentials = false
}: AxiosRequestConfig<Request>): Promise<HttpServiceResponse<Response>> => {
  try {
    const options: AxiosRequestConfig<Request> = {
      url,
      method,
      headers,
      data,
      timeout,
      timeoutErrorMessage: `Timeout rejection. Time set ${timeout}ms`,
      withCredentials,
    };

    const response = await axios.request<any, AxiosResponse<Response>, Request>(options);
    
    return {
      isSuccessful: true,
      data: response.data,
    };
  } catch (error) {
    return {
      isSuccessful: false,
      error: error as HttpServiceError,
    };
  }
};

export const httpClient = {
  get: async <Request, Response>(config: AxiosRequestConfig<Request>) => request<Request, Response>({
    ...config,
    method: 'GET',
  }),
  post: async <Request, Response>(config: AxiosRequestConfig<Request>) => request<Request, Response>({
    ...config,
    method: 'POST',
  }),
};
