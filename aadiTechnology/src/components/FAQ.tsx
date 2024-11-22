import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}
const FAQList: FAQProps[] = [
  {
    question: "What services does Aadi Technology provide?",
    answer: "Aadi Technology specializes in Web Development, Mobile App Development, Cloud Solutions, and Artificial Intelligence services using cutting-edge technologies.",
    value: "item-1",
  },
  {
    question: "What technologies do you work with?",
    answer: "We work with the latest technologies in web development (React, Next.js, Angular), mobile development (React Native, Flutter), cloud services (AWS, Azure), and AI/ML solutions.",
    value: "item-2",
  },
  {
    question: "How experienced is your team?",
    answer: "Our team consists of highly skilled professionals with extensive experience in delivering innovative solutions across web, mobile, cloud, and AI domains.",
    value: "item-3",
  },
  {
    question: "Do you provide custom software solutions?",
    answer: "Yes, we specialize in creating custom software solutions tailored to meet your specific business needs and requirements.",
    value: "item-4",
  },
  {
    question: "How can we start working with Aadi Technology?",
    answer: "You can reach out to us through our contact form or email. We'll schedule a consultation to understand your requirements and provide the best solution for your project.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
