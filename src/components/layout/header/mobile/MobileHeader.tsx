import { Input } from "@/components/ui";

export default function MobileHeader() {
  console.log("Hello mobile");
  return (
    <header>
      <div className="container">
        <div className="flex items-center justify-between mb-[0.625rem]">
          <img
            src="./icons/logo.svg"
            alt="logo"
            className="w-[15.5rem] h-[2.3125rem]"
          />
          <img
            src="./icons/burger-menu.svg"
            alt="burger menu"
            className="w-[2.625rem] h-[2.5rem]"
          />
        </div>
        <div className="flex items-center border w-full rounded-lg">
          <div className="relative w-[84%]">
            <Input className="h-[4rem]  border-none" />
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
  );
}
