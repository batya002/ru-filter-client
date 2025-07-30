export default function About() {
  return (
    <section>
      <div className="container">
        <h1 className="font-normal text-2xl leading-7 text-[#5a5a5a]">
          Мы — команда профессионалов, создающая эффективные решения. Уже более
          [10] лет мы помогае клиентам достигать целей и уверенно двигаться
          вперёд.
        </h1>
        <ul className="flex flex-col gap-y-3 mt-7 mb-10">
          <li className="min-w-xs p-2 flex items-center gap-x-3 rounded-[12.5rem] bg-[#f4f5f6]">
            <img src="./icons/rubl.svg" alt="icon" width={78} height={78} />
            <div>
              <h3 className="font-bold text-xl leading-6 text-[#5a5a5a] mb-1.5">
                О нас
              </h3>
              <p className="font-normal text-[1rem] leading-[0.875rem] text-[#5a5a5a]">
                Мы любим то, что делаем, и делаем это хорошо.Для нас важно,
                чтобы вы были.{" "}
              </p>
            </div>
          </li>
          <li className="min-w-xs p-2 flex items-center gap-x-3 rounded-[12.5rem] bg-[#f4f5f6]">
            <img src="./icons/task.svg" alt="icon" width={78} height={78} />
            <div>
              <h3 className="font-bold text-xl leading-6 text-[#5a5a5a] mb-1.5">
                О нас
              </h3>
              <p className="font-normal text-[1rem] leading-[0.875rem] text-[#5a5a5a]">
                Мы любим то, что делаем, и делаем это хорошо.Для нас важно,
                чтобы вы были.{" "}
              </p>
            </div>
          </li>
          <li className="min-w-xs p-2 flex items-center gap-x-3 rounded-[12.5rem] bg-[#f4f5f6]">
            <img src="./icons/like.svg" alt="icon" width={78} height={78} />
            <div>
              <h3 className="font-bold text-xl leading-6 text-[#5a5a5a] mb-1.5">
                О нас
              </h3>
              <p className="font-normal text-[1rem] leading-[0.875rem] text-[#5a5a5a]">
                Мы любим то, что делаем, и делаем это хорошо.Для нас важно,
                чтобы вы были.{" "}
              </p>
            </div>
          </li>
        </ul>
        <img src="./images/rectangle.webp" alt="ru filter logo" className="h-[12.0625rem] min-w-xs m-auto" />
      </div>
    </section>
  );
}
