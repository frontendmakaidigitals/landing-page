import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionWrapper,
  AccordionContainer,
} from "../../components/Accordion";
import icon from "../../assets/qa.png";

const FAQ = () => {
  const faqs = [
    {
      question: "How are you guaranteeing the revenue?",
      answer:
        "We only ever onboard clients when it is a no brainer we can help. If we don't truly believe we can help you after going through a deep diagnosis of your business then we will simply part ways and not waste anymore of each other's time. And that’s why the guarantee!",
    },
    {
      question: "How long until I see the results?",
      answer:
        "You can start seeing results from 1-2 weeks from your first campaign.",
    },
    {
      question: "Who is eligible for your service?",
      answer: "Businesses which has a minimum MRR of more than $15,000+.",
    },
    {
      question: "How do you make sure that we are being taken care of?",
      answer:
        "We only onboard a handful of clients which means, each of our team member gets to know your brand better and service you better & not like some generalised agencies where each account manager has 20+ clients.",
    },
  ];

  return (
    <section className="my-16">
      <div className="container p-4">
        <h1 className="text-4xl lg:text-5xl text-center mx-auto max-w-xl font-[700] bg-gradient-to-r from-red-600 via-red-400 to-red-600  bg-clip-text">
          <span className="w-full flex justify-center">
            <img src={icon} alt="faq logo" className="h-16 opacity-80 w-16" />
          </span>
          Frequently Asked Questions
        </h1>

        <div className="mt-8 w-full">
          <AccordionContainer className="max-w-3xl mx-auto">
            <Accordion>
              <AccordionWrapper>
                {faqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={idx.toString()}>
                    <AccordionHeader
                      className="
                    text-lg font-semibold 
                    py-4 px-5 
                    bg-red-50 
                    hover:bg-red-100 
                  
                    text-red-900 hover:text-red-950
                  "
                    >
                      {idx + 1}. {faq.question}
                    </AccordionHeader>

                    <AccordionPanel
                      className="
                    text-gray-700 
                    bg-white/70 rounded-b-xl 
                    leading-relaxed
                    border-t border-red-100
                  "
                    >
                      {faq.answer}
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </AccordionWrapper>
            </Accordion>
          </AccordionContainer>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
