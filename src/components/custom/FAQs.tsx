import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/Accordion";
import faqs from "@/mocks/faqs.json";

const FAQs = () => {
  return (
    <div className="bg-gray-800 w-full pb-10">
      <div className="w-full px-20">
        <div className="text-4xl font-bold py-10">FAQs</div>
        <Accordion type="single" collapsible>
          {faqs.map((data) => {
            return (
              <AccordionItem key={data.id} value={`item-${data.id}`}>
                <AccordionTrigger className="text-xl">
                  {data.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg">
                  {data.answer}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQs;
