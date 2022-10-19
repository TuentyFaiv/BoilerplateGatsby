/* eslint-disable max-classes-per-file */
import swal from "sweetalert";

import type { TFunction } from "react-i18next";
import type { HttpConnectionError } from "@typing/contexts";

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2
  // These options are needed to round to whole numbers if that's what you want.
  // minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  // maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

// Regex
export const REGEX_NUMBERS = /[0-9]/;

// DatePicker
export const spacesInCalendar = 42;
export const weekDays = 7;
export const DEFAULT_FORMAT = "yyyy-MM-dd";

// Errors
export class CustomError extends Error {
  title: string;
  date: Date;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(title = "!Oh no¡", ...params: any[]) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }

    this.name = "CustomError";
    this.title = title;
    this.date = new Date();
  }
}

export class ServiceError extends Error {
  title: string;
  date: Date;

  constructor(
    private data: HttpConnectionError,
    title = "!Connection Error¡",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...params: any[]
  ) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ServiceError);
    }

    this.name = "ServiceError";
    this.title = title;
    this.date = new Date();
  }

  viewData = () => (this.data);
}

export function showError(error: unknown, t: TFunction, alert?: (message: string) => void) {
  let msg = "";
  if (error instanceof Error) {
    msg = error.message;
  }
  if (error instanceof ServiceError) {
    msg = error.viewData().message;
  }
  if (!alert) {
    swal("Error!", t(msg, { ns: "errors" }), "error");
  } else {
    alert(msg);
  }
}
