import { useTranslation } from "react-i18next";

export default function Industries() {
  const { t } = useTranslation();

  const item = [
    {
      image: "xim.webp",
      spanText: t("industries.chemical"),
    },
    { image: "neft.webp", spanText: t("industries.oilgas") },
    {
      image: "stroitel.webp",
      spanText: t("industries.construction"),
    },
    {
      image: "stroitrl-2.webp",
      spanText: t("industries.construction"),
    },
    { image: "ugol.webp", spanText: t("industries.coal") },
    {
      image: "eat.webp",
      spanText: t("industries.food"),
    },
  ];

  return (
    <section>
      <div className="container overflow-hidden">
        <h2 className="font-bold text-xl text-[#1a1c23]">Отрасли, которые мы обслуживаем!</h2>
        <div className="flex w-max animate-marquee gap-x-6 mt-[2.875rem]">
          {[...item, ...item].map(({ image, spanText }, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-[18rem] h-[13.4375rem] flex items-end bg-no-repeat bg-cover bg-center rounded-2xl"
              style={{ backgroundImage: `url(./images/${image})` }}
            >
              <span className="font-normal text-xl text-white px-3 py-1 w-[12.25rem] ">
                {spanText}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
