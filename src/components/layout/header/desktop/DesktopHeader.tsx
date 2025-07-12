import { Input, LanguageSelector } from "@/components/ui";
import { Link, NavLink } from "react-router-dom";

export default function DesktopHeader() {
  const navList = [
    {
      title: "Главный",
      to: "/",
    },
    {
      title: "Продукция",
      to: "/products",
    },
    {
      title: "Новости",
      to: "/news",
    },
    {
      title: "Контакты",
      to: "/contacts",
    },
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
        <div className="flex justify-between items-center">
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
          <div className="w-[16.5rem] p-5 rounded-tl-sm rounded-bl-sm bg-[#f4f5f6]">
            <p className="font-normal text-sm leading-3.5">
              Каталог оборудования
            </p>
          </div>
          <Input className="w-[56.25rem] h-14 rounded-none" placeholder="Поиск по товарам или категориям...."/>
        </div>
      </div>
    </header>
  );
}
