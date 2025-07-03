import { AxiosError } from "axios";

export class HttpServiceError extends AxiosError {}

export type HttpServiceResponse<T> = {
  isSuccessful: true;
  data: T;
} | {
  isSuccessful: false;
  error: HttpServiceError;
}
