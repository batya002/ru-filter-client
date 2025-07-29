import React from "react";

const reviews = [
  "Интеграция с Intercom — быстро и удобно.",
  "Tolstoy + Shopify = 🚀.",
  "Собирайте лидов через Klaviyo и Tolstoy.",
  "Аналитика взаимодействий с Gorgias.",
  "Автоматизация через Zapier.",
  "Подключите к HubSpot одним кликом.",
];

const MarqueeLine = ({
  direction = "left",
  items,
  duration = 10,
  gap = 24,
}: {
  direction?: "left" | "right";
  items: string[];
  duration?: number;
  gap?: number;
}) => {
  const loopedItems = Array(100)
    .fill(null)
    .flatMap(() => items);

  return (
    <div className="relative overflow-hidden w-full h-[120px]">
      <div
        className={`absolute top-0 flex ${
          direction === "right" ? "flex-row-reverse" : "flex-row"
        }`}
        style={{ gap: `${gap}px` }}
      >
        {loopedItems.map((item, idx) => (
          <div
            key={`${direction}-${idx}`}
            className={`bg-black text-white text-sm p-6 rounded-xl min-w-[280px] max-w-xs ${
              direction === "right"
                ? "animate-marquee-right"
                : "animate-marquee-left"
            }`}
            style={{
              animationDelay: `${idx * (duration / items.length)}`,
              animationDuration: `${duration}s`,
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

const InfiniteMarquee: React.FC = () => {
  return (
    <div className="bg-[#1D4ED8] text-white py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Глубоко интегрирован с остальной частью вашей технологической
          инфраструктуры
        </h2>
        <p className="text-sm md:text-base text-blue-100 max-w-3xl mx-auto">
          Более 100 интеграций с Shopify, Klaviyo, Yotpo и другими компонентами
          вашей e-commerce системы...
        </p>
      </div>

      <div className="mt-12 space-y-6">
        <MarqueeLine direction="right" items={reviews} />
        <MarqueeLine direction="left" items={reviews} />
      </div>
    </div>
  );
};

export default InfiniteMarquee;
