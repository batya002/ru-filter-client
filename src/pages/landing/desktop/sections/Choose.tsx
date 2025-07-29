import { useTranslation } from 'react-i18next';

export default function Choose() {
  const { t } = useTranslation();

  return (
    <section className="my-[8.375rem]">
      <div className="container">
        <div
          className="bg-contain bg-no-repeat"
          style={{ backgroundImage: 'url(./images/choose-bg.webp)' }}
        >
          <h2 className="text-center font-bold text-4xl pt-[2.0625rem] text-white">
            {t('choose.title')}
          </h2>
          <ul className="flex gap-x-[3.9375rem] gap-y-7 justify-center items-center flex-wrap pt-9 pb-6">
            <li className="bg-[#292639d9] w-[33.3125rem] h-[14.25rem] flex gap-x-5 px-[1.875rem] pt-10 pb-[1.875rem] rounded-3xl">
              <img src="./icons/like-2.svg" alt="icon" className="h-12 w-12" />
              <div className="w-[20rem]">
                <h3 className="font-normal text-white text-2xl mb-3">
                  {t('choose.items.0.title')}
                </h3>
                <p className="font-light text-xl leading-8 text-white">
                  {t('choose.items.0.text')}
                </p>
              </div>
            </li>
            <li className="bg-[#292639d9] w-[33.3125rem] h-[14.25rem] flex gap-x-5 pl-[2.0625rem] pt-10 pb-[1.625rem] rounded-3xl">
              <img src="./icons/target.svg" alt="icon" className="h-[2.6875rem] w-[2.6875rem]" />
              <div className="w-[22.3125rem]">
                <h3 className="font-normal text-white text-2xl mb-3">
                  {t('choose.items.1.title')}
                </h3>
                <p className="font-light text-xl leading-8 text-white">
                  {t('choose.items.1.text')}
                </p>
              </div>
            </li>
            <li className="bg-[#292639d9] w-[33.3125rem] h-[14.25rem] flex gap-x-5 pl-[1.625rem] pt-10 rounded-3xl">
              <img src="./icons/settings.svg" alt="icon" className="h-14 w-14" />
              <div className="w-[21.5rem]">
                <h3 className="font-normal text-white text-2xl mb-3">
                  {t('choose.items.2.title')}
                </h3>
                <p className="font-light text-xl leading-8 text-white">
                  {t('choose.items.2.text')}
                </p>
              </div>
            </li>
            <li className="bg-[#292639d9] w-[33.3125rem] h-[14.25rem] flex gap-x-5 pl-[2.3125rem] py-10 rounded-3xl">
              <img src="./icons/increasing.svg" alt="icon" className="h-[1.625rem] w-[2.4375rem]" />
              <div className="w-[23.125rem]">
                <h3 className="font-normal text-white text-2xl mb-3">
                  {t('choose.items.3.title')}
                </h3>
                <p className="font-light text-xl leading-8 text-white">
                  {t('choose.items.3.text')}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}