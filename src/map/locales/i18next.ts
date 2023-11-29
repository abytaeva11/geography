import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import {initReactI18next} from "react-i18next";

import {kg, ru} from "./index";

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources: {
			kg: {translation: kg},
			ru: {translation: ru},
		},
		lng: "ru",
		fallbackLng: "ru",
		detection: {
			order: ["cookie", "htmlTag", "path", "subdomain"],
			caches: ["cookie"],
		},
	});

export default i18n;
