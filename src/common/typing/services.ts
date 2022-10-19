import type { FormikHelpers } from "formik";

// Contact
export type BodyContact = {
  name: string;
  phone: string;
  email: string;
  message: string;
  terms: boolean;
  phoneCode: string;
};
export type ContactValues = Omit<BodyContact, "phoneCode">;

// Exchange
export type BodyExchange = {
  amount: number;
  currency: string;
};
export type ReturnExchange = {
  amount: string;
  currency: string;
};

// SubmitForm
export type Submit<T> = (values: T, actions: FormikHelpers<T>) => void;
