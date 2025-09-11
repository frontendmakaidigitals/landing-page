import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionWrapper,
  AccordionContainer,
} from "../components/Accordion";

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
      <div className="container">
        <h1 className="text-5xl text-center font-[500] text-slate-50">
          Frequently Asked Questions
        </h1>
        <div className="mt-8 w-full">
          <AccordionContainer className="max-w-3xl mx-auto">
            <Accordion>
              <AccordionWrapper>
                {faqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={idx.toString()}>
                    <AccordionHeader>{faq.question}</AccordionHeader>
                    <AccordionPanel>{faq.answer}</AccordionPanel>
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
