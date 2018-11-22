import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";
import translationEN from "./locales/en.json";
import translationFR from "./locales/fr.json";

i18n
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: translationEN
      },
      fr: {
        translation: translationFR
      }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: true
    }
  });

export default i18n;
