import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Slide = {
  title: string;
  description: string;
  imageUrl: string;
  content?: React.ReactNode;
  button: boolean;
};

const slides: Slide[] = [
  {
    title: "Каркасы для рукавных фильтров: виды, материалы и подбор",
    description: "Каркасы фильтровальных рукавов состоят из нескольких частей",
    imageUrl: "./slider-3.webp",
    content: (
      <ul className="list-disc pl-5 mt-2 text-white/80 mb-14">
        <li>корпус;</li>
        <li>входной и выходной патрубок;</li>
        <li>монтажные элементы.</li>
      </ul>
    ),
    button: true,
  },
  {
    title:
      "Воздушный фильтр очищения воздуха,предотвращающее описанные ситуации.",
    description: "Главное о воздушных фильтрах",
    imageUrl: "./slider-1.webp",
    content: (
      <ul className="list-disc pl-5 mt-2 text-white/80 mb-14">
        <li>Производятся цилиндрические, панельные и бескаркасные варианты.</li>
        <li>
          Наиболее популярным материалом для их изготовления остается картон.
        </li>
        <li>В некоторых государствах разрешается.</li>
      </ul>
    ),
    button: true,
  },
  {
    title: "Откройте для себя наше стремление к превосходной фильтрации",
    description:
      "В UzFiltr фильтрация - это больше, чем просто процесс, это приверженность качеству и эффективности. Благодаря многолетнему опыту и стремлению предоставлять первоклассные решения, наша команда экспертов обеспечивает чистую и надежную фильтрацию для отраслей, которые двигают прогресс.",
    imageUrl: "./slider-2.webp",
    button: false,
  },
];

export const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const current = slides[currentIndex];

  return (
    <section className="mb-[8.25rem]">
      <div className="container">
        <div
          className="relative overflow-hidden rounded-xl shadow-lg bg-cover bg-center transition-all duration-500"
          style={{ backgroundImage: `url(${current.imageUrl})` }}
        >
          <div className="p-14 w-[36.3125rem]">
            <div className="text-white font-glight font-normal text-xl">
              <h2 className="text-4xl font-normal font-gbold">
                {current.title}
              </h2>
              <p className="mt-14">{current.description}</p>
              {current.content}
              {current.button ? (
                <button
                  className={`mt-4 px-11 py-3 rounded-[3.125rem] font-medium font-roboto text-xl transition-all duration-300 ${
                    current.imageUrl === "./slider-1.png"
                      ? "bg-black text-white"
                      : "bg-[#1a56ff] text-white"
                  }`}
                >
                  Каталог товаров
                </button>
              ) : (
                ""
              )}
            </div>
            <div className="hidden md:block"></div>
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow z-20"
          >
            <ChevronLeft size={12} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow z-20"
          >
            <ChevronRight size={12} />
          </button>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
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
