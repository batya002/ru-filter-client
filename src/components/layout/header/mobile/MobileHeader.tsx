import { useState } from "react";
import { Input } from "@/components/ui";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import clsx from "clsx";

export default function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className={clsx("relative", menuOpen && "hidden")}>
        <div className="container">
          <div className="flex items-center justify-between mb-[0.625rem]">
            <img
              src="./icons/logo.svg"
              alt="logo"
              className="w-[15.5rem] h-[2.3125rem]"
            />
            <button onClick={() => setMenuOpen(true)}>
              <img
                src="./icons/burger-menu.svg"
                alt="burger menu"
                className="w-[2.625rem] h-[2.5rem]"
              />
            </button>
          </div>

          <div className="flex items-center border w-full rounded-lg">
            <div className="relative w-[84%]">
              <Input
                className="h-[4rem] border-none"
                placeholder="Поиск по товарам или категориям...."
              />
              <img
                src="./icons/search.svg"
                alt="search icon"
                className="absolute right-3 top-5"
              />
            </div>
            <button>
              <img
                src="./icons/saved.svg"
                alt="saved icon"
                className="p-5 border-l"
              />
            </button>
          </div>
        </div>
      </header>

      <div
        className={clsx(
          "fixed inset-0 z-[9999] bg-white p-6 flex flex-col transition-transform duration-300",
          menuOpen ? "translate-x-0" : "translate-x-full",
          "will-change-transform"
        )}
      >
        <div className="flex items-center justify-between mb-8">
          <img
            src="./icons/logo.svg"
            alt="logo"
            className="w-[15.5rem] h-[2.3125rem]"
          />
          <button onClick={() => setMenuOpen(false)}>
            <X className="w-8 h-8 text-black" />
          </button>
        </div>

        <div className="flex flex-col gap-6 text-2xl font-semibold">
          <Link to="/" onClick={() => setMenuOpen(false)}>Главный</Link>
          <Link to="/products" onClick={() => setMenuOpen(false)}>Продукция</Link>
          <Link to="/news" onClick={() => setMenuOpen(false)}>Новость</Link>
          <Link to="/contacts" onClick={() => setMenuOpen(false)}>Контакты</Link>
        </div>
      </div>
    </>
  );
}
