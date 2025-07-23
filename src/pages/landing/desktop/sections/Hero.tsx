export default function Hero() {
  return (
    <section className="mt-[4.625rem] mb-[8.8125rem]">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="w-[54.3125rem] px-9 pt-9 pb-12 bg-no-repeat" style={{backgroundImage: "url(./hero-3.webp)"}}>
            <div className="w-[30.125rem]">
              <h1 className="font-normal text-4xl leading-9 text-white font-gbold">
                Масляные фильтры Универсальные технологии фильтрации
              </h1>
              <ul className="list-disc pl-5 mt-[1.875rem] mb-[4.3125rem]">
                <li className="font-bold text-sm leading-9 text-white font-gbold">
                  Номинальная тонкость фильтрации
                </li>
                <li className="font-bold text-sm leading-9 text-white font-gbold">
                  Рекомендуемый конечный перепад
                </li>
                <li className="font-bold text-sm leading-9 text-white font-gbold">
                  Рабочее давление
                </li>
                <li className="font-bold text-sm leading-9 text-white font-gbold">
                  Влагостойкость
                </li>
              </ul>
              <button className="text-[#1a1c23] py-4 px-7 rounded-[5rem] bg-[#fedC5a] font-normal text-lg leading-5 font-suisse">
                В каталог
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-y-8">
            <div className="w-[23.625rem] bg-no-repeat px-7 pt-[1.125rem] pb-[1.3125rem]" style={{backgroundImage: "url(./hero-1.webp)"}}>
              <div className="w-[11.875rem]">
                <h2 className="font-normal font-gbold text-[1.1875rem] leading-6 text-white mb-[0.5625rem]">
                  Воздушные фильтры WIX
                </h2>
                <p className="font-normal font-glight text-[0.75rem] leading-[1.0625rem] text-white mb-[1.9375rem]">
                  Эффективный воздушный фильтрулавливает все загрязнения воздуха
                </p>
                <button className="text-white px-5 py-3  border border-white rounded-[5rem]">
                  В каталог
                </button>
              </div>
            </div>
            <div className="w-[23.625rem] bg-no-repeat px-7 pt-[1.4375rem] pb-5" style={{backgroundImage: "url(./hero-2.webp)"}}>
              <div className="w-[11.25rem]">
                <h2 className="font-normal font-gbold text-[1.1875rem] leading-6 text-white mb-[0.4375rem]">
                  Масляные фильтры Raf filter
                </h2>
                <p className="font-normal font-glight text-[0.75rem] leading-[1.0625rem] text-white mb-3">
                  Фильтры RAF Filter Premium обеспечивают наилучшую очистку
                  воздуха благодаря использованию
                </p>
                <button className="text-white px-5 py-3  border border-white rounded-[5rem]">
                  В каталог
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
