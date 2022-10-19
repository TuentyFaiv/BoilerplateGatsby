import { object, string, boolean } from "yup";
import { REGEX_NUMBERS } from "@utils";

import type { ContactValues } from "@typing/services";
import type { BootContact } from "@typing/interfaces";

export const ContactSchema = (boot: BootContact) => object().shape({
  name: string().required(boot.required),
  phone: string().matches(REGEX_NUMBERS).required(boot.required),
  email: string().email(boot.email).required(boot.required),
  message: string().max(200),
  subject: string().max(80),
  terms: boolean().oneOf([true], boot.requiredTerms) // Optinal
});

export const DEFAULT_CONTACT_VALUES: ContactValues = {
  name: "",
  phone: "",
  email: "",
  message: "",
  terms: false
};
