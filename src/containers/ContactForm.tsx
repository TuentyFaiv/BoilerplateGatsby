import { Formik, Form } from "formik";
import { useTranslation } from "gatsby-plugin-react-i18next";
import swal from "sweetalert";
import { ContactSchema, DEFAULT_CONTACT_VALUES } from "@schemas";
import { submitForm, useContactService } from "@services";
import { useGetCountry } from "@hooks";

import type { ContactValues } from "@typing/services";
import type { BootContact } from "@typing/interfaces";

import { Input, TextArea } from "@components";

export default function ContactForm() {
  const { t } = useTranslation("formik");
  const { sendEmail } = useContactService();
  const { country: { phoneCode } } = useGetCountry();

  const boot: BootContact = {
    required: t("required"),
    email: t("required-email"),
    requiredTerms: t("required-terms")
  };

  const handleSubmit = submitForm<ContactValues>(async (values) => {
    await sendEmail({ ...values, phoneCode });

    swal({
      title: "Success!",
      text: t("contact-form-success", { ns: "swal" }),
      icon: "success"
    });
  }, t, DEFAULT_CONTACT_VALUES);

  return (
    <section className="contact">
      <Formik
        initialValues={DEFAULT_CONTACT_VALUES}
        validationSchema={ContactSchema(boot)}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="contact__form" id="contact">
            <div className="contact__content">
              <h2 className="contact__title">
                {t("contact-form-title", { ns: "contact" })}
              </h2>
              <p className="contact__subtitle">
                {t("contact-form-subtitle", { ns: "contact" })}
              </p>
              <div className="contact__form-grid">
                <Input
                  label={t("name")}
                  name="name"
                  type="text"
                  placeholder={t("name")}
                />
                <Input
                  label={t("subject")}
                  name="subject"
                  type="text"
                  placeholder={t("subject")}
                />
                <Input
                  label={t("phone")}
                  name="phone"
                  type="text"
                  placeholder={t("phone")}
                />
                <Input
                  label={t("email")}
                  name="email"
                  type="email"
                  placeholder={t("email")}
                />
                <TextArea
                  label={t("details")}
                  name="message"
                  placeholder={t("details")}
                />
              </div>
              <button
                type="submit"
                className="contact__form-button"
                disabled={isSubmitting}
              >
                {t("contact-submit")}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
}
