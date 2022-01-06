import config from "@config";

export const sendContactEmail = async ({ values }) => {
  const request = await fetch(`${config.api_email}/api/email/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ ...values })
  });
  const response = await request.json();

  return response;
};
