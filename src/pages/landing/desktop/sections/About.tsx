export default function About() {
  return (
    <section>
      <div className="container">
        <div className="w-[54.3125rem] mb-[3.625rem]">
          <h1 className="font-normal text-[1.75rem] leading-10">
            Мы — команда профессионалов, создающая эффективные решения для
            бизнеса. Уже более [10] лет мы помогаем клиентам достигать целей и
            уверенно двигаться вперёд.
          </h1>
        </div>
        <div className="flex justify-between items-center">
          <ul className="flex flex-col gap-y-4">
            <li className="w-[39rem] flex gap-x-7 py-8 px-6 bg-[#f4f5f6] rounded-4xl">
              <img
                src="./icons/rubl.svg"
                alt="rubl icon"
                width={88}
                height={88}
              />
              <div className="w-[28.125rem]">
                <h3 className="font-normal text-lg leading-6">О нас</h3>
                <p className="font-normal text-sm leading-6">
                  Мы любим то, что делаем, и делаем это хорошо. Для нас важно,
                  чтобы вы были довольны не только результатом, но и процессом.
                  Работаем честно, с душой и на совесть.
                </p>
              </div>
            </li>
            <li className="w-[39rem] flex gap-x-7 py-8 px-6 bg-[#f4f5f6] rounded-4xl">
              <img
                src="./icons/rubl.svg"
                alt="about as"
                width={88}
                height={88}
              />
              <div className="w-[28.125rem]">
                <h3 className="font-normal text-lg leading-6">Кто мы?</h3>
                <p className="font-normal text-sm leading-6">
                  Мы — современная компания, ориентированная на технологичность,
                  эффективность и рост. Постоянное развитие и внимание к деталям
                  — наш путь к высоким результатам.
                </p>
              </div>
            </li>
            <li className="w-[39rem] flex gap-x-7 py-8 px-6 bg-[#f4f5f6] rounded-4xl">
              <img
                src="./icons/task.svg"
                alt="task icon"
                width={88}
                height={88}
              />
              <div className="w-[28.125rem]">
                <h3 className="font-normal text-lg leading-6">
                  Надёжность. Качество. Опыт.
                </h3>
                <p className="font-normal text-sm leading-6">
                  Мы делаем свою работу честно, быстро и с гарантией результата.
                </p>
              </div>
            </li>
            <li className="w-[39rem] flex gap-x-7 py-8 px-6 bg-[#f4f5f6] rounded-4xl">
              <img
                src="./icons/like.svg"
                alt="like icon"
                width={88}
                height={88}
              />
              <div className="w-[28.125rem]">
                <h3 className="font-normal text-lg leading-6">Наша миссия</h3>
                <p className="font-normal text-sm leading-6">
                  Мы создаём продукты и услуги, которые помогают бизнесу
                  становиться лучше.Каждое решение основано на анализе, опыте и
                  стремлении к идеальному результату.
                </p>
              </div>
            </li>
          </ul>
          <img src="./rectangle.svg" alt="ru filter logo" />
        </div>
      </div>
    </section>
  );
}
