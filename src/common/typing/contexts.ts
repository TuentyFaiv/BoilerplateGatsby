import type { ReactNode } from "react";
import type { Http } from "@context";

import {
  HTTPMetod,
  HTTPContentType
} from "./enums";

export type ContextService = {
  api: Http | null;
};

export type ContextServiceProvider = {
  children: ReactNode;
};

export type HTTPRequestConfig = {
  signal?: AbortSignal | undefined;
  body?: string | FormData | undefined;
  method: HTTPMetod;
  headers: {
    Authorization?: string | undefined;
    "Content-Type"?: HTTPContentType | undefined;
  }
};

export type HTTPLog = {
  url?: string;
  request?: HTTPRequestConfig;
  response?: unknown;
};

export type HTTPConfigConnection<T> = {
  method: HTTPMetod;
  secure: boolean;
  endpoint: string;
  query: string;
  body?: T;
  contentType?: HTTPContentType;
  errorMessage?: string;
  signal?: AbortSignal;
  lang?: string;
  local?: boolean;
  punkaso?: boolean;
  log?: boolean;
};

type HTTPConfigOptionalMethods = {
  query?: string;
  secure?: boolean;
};

export type HTTPConfigGet = Omit<HTTPConfigConnection<unknown>, "method" | "body" | "query" | "secure">
& HTTPConfigOptionalMethods;
export type HTTPConfigMethods<T> = Omit<HTTPConfigConnection<T>, "method" | "query" | "secure">
& HTTPConfigOptionalMethods;

export type HTTPConnectionReturn<T> = {
  success: boolean;
  message: string;
  payload: T;
};

export type HttpConnectionError = {
  status: string;
  message: string;
  errors: {
    description?: string;
  };
  code: number;
};

export type HTTPBodyFiles<T> = {
  files?: File[];
  file: File;
} & T & Record<string, never>;
