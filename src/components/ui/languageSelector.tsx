import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "@/hooks/i18n";

const languages = [
  { code: "ru", label: "Russian", icon: "./icons/ru.svg" },
  { code: "uz", label: "Uzbek", icon: "./icons/uz.svg" },
  { code: "en", label: "English", icon: "./icons/en.svg" },
];

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(i18n.language || "ru");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("app-language") || "ru";
    setCurrentLang(savedLang);
    i18n.changeLanguage(savedLang);
  }, [i18n]);

  const handleLanguageChange = async (lang: string) => {
    setLoading(true);
    setIsOpen(false);
    try {
      await i18n.changeLanguage(lang);
      localStorage.setItem("app-language", lang);
      setCurrentLang(lang);
    } catch (err) {
      console.error("Ошибка смены языка:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)}>
        <img
          src={languages.find((l) => l.code === currentLang)?.icon}
          alt={currentLang}
          width={25}
          height={25}
        />
      </button>
      {isOpen && (
        <ul className="absolute w-10 mt-2 z-10 flex flex-col items-center gap-y-2 bg-white border rounded shadow">
          {languages
            .filter((l) => l.code !== currentLang)
            .map((l) => (
              <li
                key={l.code}
                onClick={() => handleLanguageChange(l.code)}
                className="hover:bg-gray-100 cursor-pointer my-1"
              >
                <img src={l.icon} alt={l.label} width={25} height={25} />
              </li>
            ))}
        </ul>
      )}
      {loading && <div>Загрузка переводов...</div>}
    </div>
  );
}
