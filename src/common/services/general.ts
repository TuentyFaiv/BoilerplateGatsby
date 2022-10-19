/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { showError } from "@utils";

import type { TFunction } from "react-i18next";
import type { FormikHelpers } from "formik";
import type { Submit } from "@typing/services";

export default function submitForm<T>(action: Submit<T>, t: TFunction, DEFAULT_VALUES: T) {
  return async (values: T, actions: FormikHelpers<T>) => {
    try {
      actions.setSubmitting(true);

      await action(values, actions);

      actions.resetForm({ values: DEFAULT_VALUES });
    } catch (error) {
      showError(error, t);
    } finally {
      actions.setSubmitting(false);
    }
  };
}
