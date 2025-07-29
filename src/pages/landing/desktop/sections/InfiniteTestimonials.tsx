import React from "react";

interface MarqueeLineProps {
  direction?: "left" | "right";
  items: string[];
  gap?: number;
  speed?: number;
}

const MarqueeLine: React.FC<MarqueeLineProps> = ({
  direction = "left",
  items,
  gap = 24,
  speed = 20,
}) => {
  const animationClass =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div className="overflow-hidden w-full">
      <div
        className={`flex w-fit ${animationClass}`}
        style={{
          animationDuration: `${speed}s`,
          gap: `${gap}px`,
        }}
      >
        {[...items, ...items].map((item, idx) => (
          <div
            key={`${item}-${idx}`}
            style={{ boxShadow: "1px 1px 20px 0px #00000014" }}
            className="bg-[#212032f2] py-14 px-6 rounded-3xl w-[19.875rem] flex items-start"
          >
            <p className="font-normal text-[1rem] text-white break-words w-full h-auto">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const reviews = [
  "Instantly send videos inside Intercom messenger to resolve tickets faster and provide frictionless customer service",
  "Easily add your interactive Tolstoy to your site to draw viewers in and provide face to face interactions, even when you’re offline.",
  "Add your Tolstoy to your Shopify store to address and solve the unique needs and challenges of your business.",
  "Easily embed Tolstoy on your site or add as a pop up to draw viewers in and provide face to face interactions, anytime and anywhere.",
  "Create new leads and attach text, video, and contact form responses in HubSpot directly from a Tolstoy.",
  "Automatically send Tolstoy viewer interaction data directly to Gorgias.",
  "Easily embed Tolstoy on your site or add as a pop up to draw viewers in and provide face to face interactions, anytime and anywhere.",
  "Add new Klaviyo subscribers directly from Tolstoy responses to automate your lead capture and engagement.",
  "Zapier is on a mission to make automation incredibly easy and accessible to everyone at work. With Zapier you can integrate apps like Salesforce, Intuit, Google, and Dropbox.",
];

const InfiniteMarquee: React.FC = () => {
  return (
    <section className="overflow-hidden relative">
      <div className="container">
        <div className=" bg-[#1a56ff] h-[57rem] py-16 rounded-[2.5rem]">
          <h2 className="text-5xl font-bold text-center text-white">
            Глубоко интегрирован с остальной частью вашей технологической
            инфраструктуры
          </h2>
          <div className="w-[41.8125rem] m-auto mt-10">
            <p className="text-[1rem] font-normal text-white text-center">
            Более 100 интеграций с Shopify, Klaviyo, Yotpo и другими
            компонентами вашей e-commerce системы, что позволяет легко
            синхронизировать данные о вовлечённости покупателей в видео с
            остальными вашими рабочими процессами, автоматизациями и профилями
            клиентов.
          </p>
          </div>
        </div>
      </div>
      <div className="mt-12 space-y-6 w-screen absolute bottom-16">
        <MarqueeLine direction="right" items={reviews} />
        <MarqueeLine direction="left" items={reviews} />
      </div>
    </section>
  );
};

export default InfiniteMarquee;
