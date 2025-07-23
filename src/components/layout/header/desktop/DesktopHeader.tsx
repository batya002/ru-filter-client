import { Input, LanguageSelector } from "@/components/ui";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function DesktopHeader() {
  const { t } = useTranslation();

  const navList = [
    { title: t("home"), to: "/" },
    { title: t("products"), to: "/products" },
    { title: t("news"), to: "/news" },
    { title: t("contacts"), to: "/contacts" },
  ];

  return (
    <header className="py-5">
      <div className="container">
        <div className="flex justify-between items-center mb-5">
          <div className="flex items-center gap-x-3.5">
            <img
              src="./icons/phone.svg"
              alt="phone icon"
              width={16}
              height={16}
            />
            <a
              href="tel:+998901899426"
              className="font-normal text-sm leading-5"
            >
              +998 (90) 189-94-26
            </a>
          </div>
          <LanguageSelector />
        </div>
        <div className="flex justify-between items-center mb-2.5">
          <div className="flex items-center gap-x-4">
            <Link to="/">
              <img src="./icons/logo.svg" alt="logo" width={237} height={50} />
            </Link>
            <nav>
              <ul className="flex items-center gap-x-12">
                {navList.map((value, index) => (
                  <li key={index}>
                    <NavLink
                      to={value.to}
                      className={({ isActive }) =>
                        isActive
                          ? "font-bold text-sm leading-5 border-b-2 border-black pb-1"
                          : "font-normal text-sm leading-5"
                      }
                    >
                      {value.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex items-center gap-x-5">
            <div className="w-[10.1875rem]">
              <p className="font-normal text-sm leading-6">
                Получите консультацию в мессенджерах
              </p>
            </div>
            <ul className="flex items-center gap-x-2">
              <li>
                <img
                  src="./icons/facebook.svg"
                  alt="facebook logo"
                  width={30}
                  height={30}
                />
              </li>
              <li>
                <img
                  src="./icons/instagram.svg"
                  alt="instagram logo"
                  width={30}
                  height={30}
                />
              </li>
              <li>
                <img
                  src="./icons/telegram.svg"
                  alt="telegram logo"
                  width={30}
                  height={30}
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-[16.5rem] flex items-center gap-x-6 p-5 rounded-tl-sm rounded-bl-sm bg-[#f4f5f6]">
            <img
              src="./icons/burger-menu.svg"
              alt="burger menu icon"
              width={18}
            />
            <p className="font-normal text-sm leading-3.5">
              Каталог оборудования
            </p>
          </div>
          <div className="relative">
            <Input
              className="w-[59.375rem] h-14 rounded-none"
              placeholder="Поиск по товарам или категориям...."
            />
            <img
              src="./icons/search.svg"
              alt="search icon"
              className="absolute right-4 top-4"
              width={24}
              height={24}
            />
          </div>
          <button>
            <img
              src="./icons/saved.svg"
              alt="saved icon"
              className="px-6 py-4 border"
            />
          </button>
        </div>
      </div>
    </header>
  );
}
