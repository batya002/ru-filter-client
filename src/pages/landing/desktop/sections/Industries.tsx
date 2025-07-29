import { useTranslation } from "react-i18next";

export default function Industries() {
  const { t } = useTranslation();

  return (
    <section>
      <div className="container">
        <h2 className="font-bold text-3xl text-[#1a1c23]">
          {t("industries.title")}
        </h2>
        <ul className="grid grid-cols-4 gap-[1.625rem] mt-[4.375rem]">
          <li
            className="col-span-2 bg-no-repeat bg-cover relative w-[39.0625rem] h-[15.5625rem]"
            style={{ backgroundImage: "url(./images/xim.webp)" }}
          >
            <span className="w-[15.625rem] inline-block absolute left-5 bottom-5 font-normal text-[2rem] text-[#f5f5f6]">
              {t("industries.chemical")}
            </span>
          </li>
          <li
            className="col-span-1 bg-no-repeat bg-cover relative"
            style={{ backgroundImage: "url(./images/neft.webp)" }}
          >
            <span className="w-[15.625rem] inline-block absolute left-5 bottom-5 font-normal text-2xl text-[#f5f5f6]">
              {t("industries.oilgas")}
            </span>
          </li>
          <li
            className="col-span-1 bg-no-repeat bg-cover relative"
            style={{ backgroundImage: "url(./images/stroitel.webp)" }}
          >
            <span className="w-[15.625rem] inline-block absolute left-5 bottom-5 font-normal text-2xl text-[#f5f5f6]">
              {t("industries.construction")}
            </span>
          </li>
          <li
            className="col-span-1 bg-no-repeat bg-cover relative"
            style={{ backgroundImage: "url(/images/stroitrl-2.webp)" }}
          >
            <span className="w-[15.625rem] inline-block absolute left-5 bottom-5 font-normal text-2xl text-[#f5f5f6]">
              {t("industries.construction")}
            </span>
          </li>
          <li
            className="col-span-1 bg-no-repeat bg-cover relative"
            style={{ backgroundImage: "url(./images/ugol.webp)" }}
          >
            <span className="w-[15.625rem] inline-block absolute left-5 bottom-5 font-normal text-2xl text-[#f5f5f6]">
              {t("industries.coal")}
            </span>
          </li>
          <li
            className="col-span-2 bg-no-repeat bg-cover relative w-[39.0625rem] h-[15.5625rem]"
            style={{ backgroundImage: "url(./images/eat.webp)" }}
          >
            <span className="w-[15.625rem] inline-block absolute left-5 bottom-5 font-normal text-[2rem] text-[#f5f5f6]">
              {t("industries.food")}
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
