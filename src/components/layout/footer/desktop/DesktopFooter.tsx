import { useTranslation } from "react-i18next";

export default function DesktopFooter() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#212032] pt-12">
      <div className="container">
        <div className="flex items-center justify-between pb-6 border-b border-b-[#46464d]">
          <div className="w-[26rem]">
            <p className="font-bold text-3xl text-white">
              {t("footer.getConsultation")}
            </p>
            <span className="font-normal text-2xl text-[#8d8d92]">
              {t("footer.byPhoneOrMessengers")}
            </span>
          </div>
          <div>
            <a
              href="tel:+998901899426"
              className="font-normal text-sm text-white block mb-2.5"
            >
              +998 (90) 189-94-26
            </a>
            <a
              href="mailto:info@gmail.com"
              className="font-normal text-sm text-white block"
            >
              info@gmail.com
            </a>
          </div>
          <ul className="flex items-center gap-x-2">
            <li>
              <img
                src="./icons/facebook.svg"
                alt="facebook logo"
                width={30}
                height={30}
              />
            </li>
            <li>
              <img
                src="./icons/instagram.svg"
                alt="instagram logo"
                width={30}
                height={30}
              />
            </li>
            <li>
              <img
                src="./icons/telegram.svg"
                alt="telegram logo"
                width={30}
                height={30}
              />
            </li>
          </ul>
        </div>
        <div className="pt-8 pb-9 border-b border-b-[#46464d] flex items-center gap-x-[5.625rem]">
          <div>
            <h3 className="font-bold text-[1rem] leading-6 text-white mb-4">
              {t("footer.store")}
            </h3>
            <a href="#" className="block font-normal text-[1rem] leading-6 text-white mb-3">
              {t("footer.delivery")}
            </a>
            <a href="#" className="block font-normal text-[1rem] leading-6 text-white mb-3">
              {t("footer.payment")}
            </a>
            <a href="#" className="block font-normal text-[1rem] leading-6 text-white">
              {t("footer.exchangeAndReturn")}
            </a>
          </div>
          <div>
            <div className="mb-4">
              <h3 className="font-bold text-[1rem] leading-6 text-white">
                {t("footer.officeMoscow")}
              </h3>
              <div className="flex items-center gap-x-2">
                <img src="./icons/map-pin.svg" alt="map pin icon" className="w-[0.8125rem] h-[0.8125rem]" />
                <p className="font-normal text-[1rem] leading-6 text-white">
                  {t("footer.officeAddress")}
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-[1rem] leading-6 text-white">
                {t("footer.officeTashkent")}
              </h3>
              <div className="flex items-center gap-x-2">
                <img src="./icons/map-pin.svg" alt="map pin icon" className="w-[0.8125rem] h-[0.8125rem]" />
                <p className="font-normal text-[1rem] leading-6 text-white">
                  {t("footer.officeAddress")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-9 pb-6 flex items-center justify-between">
          <p className="font-normal text-[1rem] text-white">
            © 2024 {t("footer.copyright")}
          </p>
          <p className="font-normal text-[1rem] leading-6 text-white">
            PRESTIGERFILTR
          </p>
        </div>
      </div>
    </footer>
  );
}