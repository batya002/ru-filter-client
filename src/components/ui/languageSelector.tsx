import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "@/hooks/i18n";

type Language = {
  code: "ru" | "uz" | "en";
  label: string;
  icon: string;
};

const languages: Language[] = [
  { code: "ru", label: "Russian", icon: "./icons/ru.svg" },
  { code: "uz", label: "Uzbek", icon: "./icons/uz.svg" },
  { code: "en", label: "English", icon: "./icons/en.svg" },
];

export default function LanguageSelector() {
  const { i18n: tI18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<Language["code"]>("ru");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("app-language") as Language["code"];
    const defaultLang = savedLang || "ru";
    setCurrentLang(defaultLang);
    tI18n.changeLanguage(defaultLang);
  }, [tI18n]);

  const handleLanguageChange = async (lang: Language["code"]) => {
    localStorage.setItem("app-language", lang);
    setCurrentLang(lang);
    setLoading(true);
    setIsOpen(false);

    try {
      await tI18n.changeLanguage(lang);
    } catch (error) {
      console.error("Ошибка загрузки переводов:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)}>
        <img
          src={languages.find((l) => l.code === currentLang)?.icon}
          alt={`${currentLang} language`}
          width={25}
          height={25}
        />
      </button>
      {isOpen && (
        <ul className="absolute w-10 mt-2 z-10 flex flex-col items-center gap-y-2 bg-white border rounded shadow">
          {languages
            .filter((lang) => lang.code !== currentLang)
            .map((lang) => (
              <li
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className="hover:bg-gray-100 cursor-pointer my-1"
              >
                <img
                  src={lang.icon}
                  alt={`${lang.code} language`}
                  width={25}
                  height={25}
                />
              </li>
            ))}
        </ul>
      )}
      {loading && <div>Загрузка переводов...</div>}
    </div>
  );
}
