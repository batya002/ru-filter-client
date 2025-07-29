import { useTranslation } from "react-i18next";

export default function Approach() {
  const { t } = useTranslation();

  const items = [
    {
      icon: "./images/group.webp",
      title: t("approach.step1.title"),
      text: t("approach.step1.text"),
    },
    {
      icon: "./images/group-1.webp",
      title: t("approach.step2.title"),
      text: t("approach.step2.text"),
    },
    {
      icon: "./images/group-2.webp",
      title: t("approach.step3.title"),
      text: t("approach.step3.text"),
    },
    {
      icon: "./images/group.webp",
      title: t("approach.step4.title"),
      text: t("approach.step4.text"),
    },
  ];

  return (
    <section
      className="pt-24 pb-32 bg-no-repeat bg-cover mb-[8.5625rem]"
      style={{ backgroundImage: 'url("./images/project-bg.webp")' }}
    >
      <div className="container">
        <h2 className="font-bold text-4xl leading-14 text-center text-white">
          {t("approach.title")}
        </h2>
        <ol className="flex items-center justify-around gap-x-5 mt-24">
          {items.map((item, index) => (
            <li key={index} className="w-[15.625rem] h-[16.25rem]">
              <img
                src={item.icon}
                alt="icon"
                className="w-[3.625rem] h-[3.625rem] mb-4"
              />
              <h3 className="font-bold text-lg text-white mb-3.5">
                {item.title}
              </h3>
              <p className="font-normal text-[0.9375rem] leading-[1.3125rem] text-white line-clamp-4">
                {item.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
