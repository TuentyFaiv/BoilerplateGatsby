import { useI18next } from "gatsby-plugin-react-i18next";

import "@stylesComponents/Language.scss";

export default function Language() {
  const { languages, language, changeLanguage } = useI18next();

  const handleLanguage = () => {
    changeLanguage(language === "es" ? "en" : "es");
  };

  return (
    <button type="button" onClick={handleLanguage} className="language" data-lang={language}>
      {languages.map((lang) => (
        <span
          key={lang}
          className="language__lang"
          data-lang={lang}
          data-active={lang === language}
        >
          {lang}
        </span>
      ))}
    </button>
  );
}
