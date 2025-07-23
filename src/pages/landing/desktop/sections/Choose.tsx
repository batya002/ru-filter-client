export default function Choose() {
  return (
    <section className="my-[8.375rem]">
      <div className="container">
        <div
          className="bg-cover bg-no-repeat"
          style={{ backgroundImage: "url(./choose-bg.png)" }}
        >
          <h2 className="text-center font-bold font-gbold text-4xl pt-[2.0625rem] text-white">
            ПОЧЕМУ ВЫБИРАЮТ НАС?
          </h2>
          <ul className="flex gap-x-[3.9375rem] gap-y-7 justify-center items-center flex-wrap pt-9 pb-6">
            <li className="bg-[#292639d9] w-[33.3125rem] flex gap-x-5 px-[1.875rem] pt-4 pb-[1.875rem] rounded-3xl">
              <img src="./icons/like-2.svg" alt="icon" className="h-12 w-12" />
              <div className="w-[20rem]">
                <h3 className="font-normal text-white text-2xl font-gbold">
                  НАДЁЖНЫЕ ПОСТАВЩИКИ
                </h3>
                <p className="font-light text-xl leading-8 text-white font-glight">
                  Мы строим долгосрочные и честные отношения с неших
                  поставщикам, выбирая партнеров по ключеким.
                </p>
              </div>
            </li>
            <li className="bg-[#292639d9] w-[33.3125rem] flex gap-x-5 pl-[2.0625rem] pt-4 pb-[1.625rem] rounded-3xl">
              <img
                src="./icons/target.svg"
                alt="icon"
                className="h-[2.6875rem] w-[2.6875rem]"
              />
              <div className="w-[22.3125rem]">
                <h3 className="font-normal text-white text-2xl font-gbold">
                  КЛИЕНТООРІЕНТИРОВАНОСТЬ
                </h3>
                <p className="font-light text-xl leading-8 text-white font-glight">
                  Фокусируемся на проектах клиентов, понимаем их погрености и
                  оперативно реагируем на любые запросы
                </p>
              </div>
            </li>
            <li className="bg-[#292639d9] w-[33.3125rem] flex gap-x-5 pl-[1.625rem] py-[1.4375rem] rounded-3xl">
              <img
                src="./icons/settings.svg"
                alt="icon"
                className="h-14 w-14"
              />
              <div className="w-[21.5rem]">
                <h3 className="font-normal text-white text-2xl font-gbold">
                  БЫСТРАЯ РЕАКЦИЯ
                </h3>
                <p className="font-light text-xl leading-8 text-white font-glight">
                  Умеем быстро решать нестандартные задачи без бюрократии.
                  Минимум формальности -максимум геултат
                </p>
              </div>
            </li>
            <li className="bg-[#292639d9] w-[33.3125rem] flex gap-x-5 pl-[2.3125rem] py-[1.8125rem] rounded-3xl">
              <img
                src="./icons/increasing.svg"
                alt="icon"
                className="h-[1.625rem] w-[2.4375rem]"
              />
              <div className="w-[23.125rem]">
                <h3 className="font-normal text-white text-2xl font-gbold">
                  ПОВЫШАЕМ ЭФФЕКТИВНОСТЬ
                </h3>
                <p className="font-light text-xl leading-8 text-white font-glight">
                  Постоянно совершенствуем внутрениною организацию ради
                  максимального результата
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
