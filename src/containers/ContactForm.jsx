import { Formik, Form } from "formik";
import { useTranslation } from "gatsby-plugin-react-i18next";
import swal from "sweetalert";
import { ContactSchema, DEFAULT_CONTACT_VALUES } from "@schemas";
import { sendContactEmail } from "@services";
import { useGetCountry } from "@hooks";

import { Input, TextArea } from "@components";

export default function ContactForm() {
  const { t } = useTranslation("formik");
  const { phoneCode } = useGetCountry();

  const formTranslations = {
    required: t("required"),
    requiredTerms: t("required-terms")
  };

  const handleSubmit = async (values, actions) => {
    try {
      actions.setSubmitting(true);

      const { error } = await sendContactEmail({ values: { ...values, phoneCode } });
      if (error) throw new Error(error);

      actions.resetForm(DEFAULT_CONTACT_VALUES);
      swal({
        title: "Success!",
        text: t("contact-form-success", { ns: "swal" }),
        icon: "success"
      });
    } catch (error) {
      swal("Error!", t(error.message, { ns: "errors" }), "error");
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <section className="contact">
      <Formik
        initialValues={DEFAULT_CONTACT_VALUES}
        validationSchema={ContactSchema(formTranslations)}
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
                  type="text"
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
