import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

type Slide = {
  title: string;
  description: string;
  imageUrl: string;
  content?: React.ReactNode;
  button: boolean;
};

export const Slider: React.FC = () => {
  const { t } = useTranslation();
  const slides: Slide[] = [
    {
      title: t("slider.slide1.title"),
      description: t("slider.slide1.description"),
      imageUrl: "./images/slider-3.webp",
      content: (
        <ul className="list-disc pl-5 mt-2 text-white/80 mb-6">
          <li>{t("slider.slide1.list.0")}</li>
          <li>{t("slider.slide1.list.1")}</li>
          <li>{t("slider.slide1.list.2")}</li>
        </ul>
      ),
      button: true,
    },
    {
      title: t("slider.slide2.title"),
      description: t("slider.slide2.description"),
      imageUrl: "./images/slider-1.webp",
      content: (
        <ul className="list-disc pl-5 mt-2 text-white/80 mb-6">
          <li>{t("slider.slide2.list.0")}</li>
          <li>{t("slider.slide2.list.1")}</li>
          <li>{t("slider.slide2.list.2")}</li>
        </ul>
      ),
      button: true,
    },
    {
      title: t("slider.slide3.title"),
      description: t("slider.slide3.description"),
      imageUrl: "./images/slider-2.webp",
      button: false,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = slides[currentIndex];

  return (
    <section className="mb-[8.25rem]">
      <div className="container">
        <div
          className="relative overflow-hidden rounded-xl shadow-lg bg-cover bg-center transition-all duration-500"
          style={{ backgroundImage: `url(${current.imageUrl})` }}
        >
          <div className="p-14 w-[36.3125rem] h-[32.5rem] flex flex-col justify-start">
            <div className="text-white font-glight text-xl">
              <h2 className="text-4xl font-gbold">{current.title}</h2>
              <p className="mt-10">{current.description}</p>
              {current.content}
              {current.button && (
                <button
                  className={`px-11 py-3 rounded-[3.125rem] font-medium font-roboto text-xl transition-all duration-300 ${
                    currentIndex === 1
                      ? "bg-black text-white"
                      : "bg-[#1a56ff] text-white"
                  }`}
                >
                  {t("slider.button")}
                </button>
              )}
            </div>
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-black p-2 rounded-full shadow z-20"
          >
            <ChevronLeft size={12} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-black p-2 rounded-full shadow z-20"
          >
            <ChevronRight size={12} />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
            {slides.map((_, idx) => (
              <span
                key={idx}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
