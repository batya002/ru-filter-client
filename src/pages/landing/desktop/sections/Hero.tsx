import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="mt-[4.625rem] mb-[8.8125rem]">
      <div className="container">
        <div className="flex items-center justify-between">
          <div
            className="w-[54.3125rem] px-9 pt-9 pb-12 bg-no-repeat h-[30rem]"
            style={{ backgroundImage: "url(./images/hero-3.webp)" }}
          >
            <div className="w-[30.125rem]">
              <h1 className="font-normal text-4xl leading-9 text-white font-gbold">
                {t("hero.main_title")}
              </h1>
              <ul className="list-disc pl-5 mt-[1.875rem] mb-[4.3125rem]">
                <li className="font-bold text-sm leading-9 text-white font-gbold">
                  {t("hero.feature_1")}
                </li>
                <li className="font-bold text-sm leading-9 text-white font-gbold">
                  {t("hero.feature_2")}
                </li>
                <li className="font-bold text-sm leading-9 text-white font-gbold">
                  {t("hero.feature_3")}
                </li>
                <li className="font-bold text-sm leading-9 text-white font-gbold">
                  {t("hero.feature_4")}
                </li>
              </ul>
              <button className="text-[#1a1c23] py-4 px-7 rounded-[5rem] bg-[#fedC5a] font-normal text-lg leading-5 font-suisse">
                {t("hero.to_catalog")}
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-y-5">
            <div
              className="w-[23.625rem] bg-no-repeat px-7 pt-[1.125rem] pb-[1.3125rem] h-[14.25rem]"
              style={{ backgroundImage: "url(./images/hero-1.webp)" }}
            >
              <div className="w-[11.875rem]">
                <h2 className="font-normal font-gbold text-[1.1875rem] leading-6 text-white mb-[0.5625rem]">
                  {t("hero.box1_title")}
                </h2>
                <p className="font-normal font-glight text-[0.75rem] leading-[1.0625rem] text-white mb-[1.9375rem]">
                  {t("hero.box1_desc")}
                </p>
                <button className="text-white px-5 py-3 border border-white rounded-[5rem]">
                  {t("hero.to_catalog")}
                </button>
              </div>
            </div>
            <div
              className="w-[23.625rem] bg-no-repeat px-7 pt-[1.4375rem] pb-5 h-[14.25rem]"
              style={{ backgroundImage: "url(./images/hero-2.webp)" }}
            >
              <div className="w-[11.25rem]">
                <h2 className="font-normal font-gbold text-[1.1875rem] leading-6 text-white mb-2">
                  {t("hero.box2_title")}
                </h2>
                <p className="font-normal font-glight text-[0.75rem] leading-[1.0625rem] text-white mb-6">
                  {t("hero.box2_desc")}
                </p>
                <button className="text-white px-5 py-3 border border-white rounded-[5rem] mb-1">
                  {t("hero.to_catalog")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
