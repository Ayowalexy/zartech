import { BaseQueryFn } from '@reduxjs/toolkit/query';
import axios, { AxiosRequestConfig, AxiosError, AxiosRequestHeaders, AxiosResponse } from 'axios';

const axiosInstance = axios.create();

export const axiosBaseQuery =
  ({
    baseUrl = '',
    baseHeaders = {}
  }: {
    baseUrl: string;
    baseHeaders?: AxiosRequestConfig['headers'];
  }): BaseQueryFn<
    {
      url: string;
      method?: AxiosRequestConfig['method'];
      body?: AxiosRequestConfig['data'];
      headers?: AxiosRequestConfig['headers'];
    },
    unknown,
    unknown
  > =>
    async ({ url, method = "GET", body, headers = {} }) => {
      const axiosHeader: AxiosRequestConfig['headers'] = {
        ...baseHeaders
      }
      try {
        const result = await axiosInstance({ url: baseUrl + url, method, data: body, headers: { ...baseHeaders, ...headers } });
        return { data: result.data };
      } catch (axiosError) {
        let err = axiosError as AxiosError;
        return {
          error: { data: err.response?.data }
        };
      }
    };
