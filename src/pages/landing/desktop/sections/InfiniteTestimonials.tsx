import React from "react";
import { useTranslation } from "react-i18next";

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

const InfiniteMarquee: React.FC = () => {
  const { t } = useTranslation();

  const reviews = t("infiniteMarquee.reviews", {
  returnObjects: true,
}) as string[];

  return (
    <section className="overflow-hidden relative my-[7.25rem]">
      <div className="container">
        <div className=" bg-[#1a56ff] h-[57rem] py-16 rounded-[2.5rem]">
          <h2 className="text-5xl font-bold text-center text-white">
            {t("infiniteMarquee.title")}
          </h2>
          <div className="w-[41.8125rem] m-auto mt-10">
            <p className="text-[1rem] font-normal text-white text-center">
              {t("infiniteMarquee.description")}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12 space-y-6 w-screen absolute bottom-36">
        <MarqueeLine direction="right" items={reviews} />
        <MarqueeLine direction="left" items={reviews} />
      </div>
    </section>
  );
};

export default InfiniteMarquee;
