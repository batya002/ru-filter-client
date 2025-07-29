import { useTranslation } from "react-i18next";

export default function Trust() {
  const { t } = useTranslation();

  return (
    <section className="mt-[9.3125rem] mb-[11.125rem]">
      <div className="container">
        <h2 className="font-bold text-3xl text-[#1a1c23]">
          {t("trust.title")}
        </h2>
        <ul className="flex justify-between items-center mt-[3.125rem]">
          <li><img src="./images/utg.webp" alt="company logo" /></li>
          <li><img src="./images/turon.webp" alt="company logo" /></li>
          <li><img src="./images/ngmk.webp" alt="company logo" /></li>
          <li><img src="./images/gas.webp" alt="company logo" /></li>
          <li><img src="./images/sement.webp" alt="company logo" /></li>
          <li><img src="./images/gromxim.webp" alt="company logo" /></li>
          <li><img src="./images/p2o5.webp" alt="company logo" /></li>
        </ul>
      </div>
    </section>
  );
}
