import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend) 
  .use(initReactI18next)
  .init({
    lng: "ru",
    fallbackLng: "ru",
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/locales/{{lng}}.json", // url сервера 
    },
  });

export default i18n;
