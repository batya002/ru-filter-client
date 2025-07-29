import { useTranslation } from "react-i18next";

export default function Industries() {
  const { t } = useTranslation();

  const item = [
    {
      image: "xim.webp",
      spanText: t("industries.chemical"),
      col: "col-span-2",
      big: true,
    },
    { image: "neft.webp", spanText: t("industries.oilgas"), col: "col-span-1" },
    {
      image: "stroitel.webp",
      spanText: t("industries.construction"),
      col: "col-span-1",
    },
    {
      image: "stroitrl-2.webp",
      spanText: t("industries.construction"),
      col: "col-span-1",
    },
    { image: "ugol.webp", spanText: t("industries.coal"), col: "col-span-1" },
    {
      image: "eat.webp",
      spanText: t("industries.food"),
      col: "col-span-2",
      big: true,
    },
  ];

  return (
    <section>
      <div className="container">
        <h2 className="font-bold text-3xl text-[#1a1c23]">
          {t("industries.title")}
        </h2>
        <ul className="grid grid-cols-4 gap-[1.625rem] mt-[4.375rem]">
          {item.map(({ image, spanText, col, big }, i) => (
            <li
              key={i}
              className={`group ${col} bg-no-repeat bg-cover relative overflow-hidden ${
                big ? "w-[39.0625rem] h-[15.5625rem]" : "w-[18.5rem] h-[15.4375rem]"
              }`}
              style={{ backgroundImage: `url(./images/${image})` }}
            >
              <div className="absolute rounded-[1.875rem] inset-0 bg-gradient-to-b from-transparent via-[#00205b80] to-[#00205bcc] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute left-5 bottom-5 font-normal text-2xl text-[#f5f5f6] transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                {spanText}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
