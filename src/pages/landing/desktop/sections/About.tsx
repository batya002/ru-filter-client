import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <section>
      <div className="container">
        <div className="w-[54.3125rem] mb-[3.625rem]">
          <h1 className="font-normal text-[1.75rem] leading-10">
            {t("about.intro")}
          </h1>
        </div>
        <div className="flex justify-between items-center">
          <ul className="flex flex-col gap-y-4">
            <li className="w-[39rem] flex gap-x-7 py-8 px-6 bg-[#f4f5f6] rounded-4xl">
              <img src="./icons/rubl.svg" alt="rubl icon" width={88} height={88} />
              <div className="w-[28.125rem]">
                <h3 className="font-normal text-lg leading-6">{t("about.block1.title")}</h3>
                <p className="font-normal text-sm leading-6">{t("about.block1.text")}</p>
              </div>
            </li>
            <li className="w-[39rem] flex gap-x-7 py-8 px-6 bg-[#f4f5f6] rounded-4xl">
              <img src="./icons/rubl.svg" alt="about as" width={88} height={88} />
              <div className="w-[28.125rem]">
                <h3 className="font-normal text-lg leading-6">{t("about.block2.title")}</h3>
                <p className="font-normal text-sm leading-6">{t("about.block2.text")}</p>
              </div>
            </li>
            <li className="w-[39rem] flex gap-x-7 py-8 px-6 bg-[#f4f5f6] rounded-4xl">
              <img src="./icons/task.svg" alt="task icon" width={88} height={88} />
              <div className="w-[28.125rem]">
                <h3 className="font-normal text-lg leading-6">{t("about.block3.title")}</h3>
                <p className="font-normal text-sm leading-6">{t("about.block3.text")}</p>
              </div>
            </li>
            <li className="w-[39rem] flex gap-x-7 py-8 px-6 bg-[#f4f5f6] rounded-4xl">
              <img src="./icons/like.svg" alt="like icon" width={88} height={88} />
              <div className="w-[28.125rem]">
                <h3 className="font-normal text-lg leading-6">{t("about.block4.title")}</h3>
                <p className="font-normal text-sm leading-6">{t("about.block4.text")}</p>
              </div>
            </li>
          </ul>
          <img src="./images/rectangle.webp" alt="ru filter logo" />
        </div>
      </div>
    </section>
  );
}
