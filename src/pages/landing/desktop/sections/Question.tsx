import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui";
import { useTranslation } from "react-i18next";

export default function Question() {
  const { t } = useTranslation();

  return (
    <section className="mb-[6.75rem]">
      <div className="container">
        <h2 className="font-bold text-4xl">{t("faq.title")}</h2>
        <div className="mt-24">
          <Accordion type="single" collapsible defaultValue="item-1">
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-normal text-[2rem] text-[#1a1c23]">
                {t("faq.questions.official")}
              </AccordionTrigger>
              <AccordionContent></AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="font-normal text-[2rem] text-[#1a1c23]">
                {t("faq.questions.power")}
              </AccordionTrigger>
              <AccordionContent></AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="font-normal text-[2rem] text-[#1a1c23]">
                {t("faq.questions.guarantee")}
              </AccordionTrigger>
              <AccordionContent></AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="font-normal text-[2rem] text-[#1a1c23]">
                {t("faq.questions.contract")}
              </AccordionTrigger>
              <AccordionContent></AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
