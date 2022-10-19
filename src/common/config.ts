export default {
  brand: "Template Gatsby",
  author: "Template Gatsby",
  i18n_langs: ["es", "en"],
  i18n_fallback_lang: "es",
  api: process.env.API || "http://localhost:5000",
  api_local: process.env.API_LOCAL || `http://localhost:${process.env.PORT || "8000"}`,
  ipregistry_key: process.env.IPREGISTRY_KEY,
  ipregistry_url: process.env.IPREGISTRY_URL
};
