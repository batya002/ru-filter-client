export default function Approach() {
  return (
    <section
      className="pt-24 pb-32 bg-no-repeat bg-cover mb-[8.5625rem]"
      style={{ backgroundImage: 'url("./project-bg.webp")' }}
    >
      <div className="container">
        <h2 className="font-bold text-4xl leading-14 text-center text-white">
          Подход к клиентам и реализация проектов
        </h2>
        <ol className="flex items-center justify-around gap-x-5 mt-24">
          <li className="w-[15.625rem]">
            <img src="./" alt="icon" className="w-[3.625rem] h-[3.625rem]" />
            <h3 className="font-bold text-lg text-white mb-3.5">
              КОНСУЛЬТАЦИЯ И АНАЛИЗ ПОТРЕБНОСТЕЙ
            </h3>
            <p className="font-normal text-[0.9375rem] leading-[1.3125rem] text-white line-clamp-4">
              Мы начинаем с детального изучения потребностей клиента,
              особенностей его производства и условий эксплуатации.
            </p>
          </li>
          <li className="w-[15.625rem]">
            <img src="./" alt="icon" className="w-[3.625rem] h-[3.625rem]" />
            <h3 className="font-bold text-lg text-white mb-3.5">
              РАЗРАБОТКА ТЕХНИЧЕСКОГО РЕШЕНИЯ
            </h3>
            <p className="font-normal text-[0.9375rem] leading-[1.3125rem] text-white line-clamp-4">
              На основе анализа наши инженеры разрабатывают индивидуальный
              проект фильтрационной системы.
            </p>
          </li>
          <li className="w-[15.625rem]">
            <img src="./" alt="icon" className="w-[3.625rem] h-[3.625rem]" />
            <h3 className="font-bold text-lg text-white mb-3.5">
              ПРОИЗВОДСТВО ОБОРУДОВАНИЯ
            </h3>
            <p className="font-normal text-[0.9375rem] leading-[1.3125rem] text-white line-clamp-4">
              Фильтры и комплектующие изготавливаются на собственных
              производственных мощностях с использованием современных
              технологий.
            </p>
          </li>
          <li className="w-[15.625rem]">
            <img src="./" alt="icon" className="w-[3.625rem] h-[3.625rem]" />
            <h3 className="font-bold text-lg text-white mb-10">ДОСТАВКА И МОНТАЖ</h3>
            <p className="font-normal text-[0.9375rem] leading-[1.3125rem] text-white line-clamp-4">
              Оборудование доставляется на объект клиента и при необходимости
              проводится монтаж и наладка специалистами RuFiltr.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}
