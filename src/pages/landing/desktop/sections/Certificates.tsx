import { useTranslation } from "react-i18next";

export default function Certificates() {
  const { t } = useTranslation();

  return (
    <section>
      <div className="container">
        <h2 className="font-normal text-4xl text-center">
          {t("certificates.title")}
        </h2>
        <ul className="flex items-center justify-between mt-14">
          <li>
            <img
              className="w-[22.75rem] h-[32.3125rem]"
              src="./images/certificate-1.webp"
              alt={t("certificates.alt")}
            />
          </li>
          <li>
            <img
              className="w-[27.875rem] h-[39.5625rem]"
              src="./images/certificate-2.webp"
              alt={t("certificates.alt")}
            />
          </li>
          <li>
            <img
              className="w-[22.75rem] h-[32.3125rem]"
              src="./images/certificate-3.webp"
              alt={t("certificates.alt")}
            />
          </li>
        </ul>
      </div>
    </section>
  );
}
