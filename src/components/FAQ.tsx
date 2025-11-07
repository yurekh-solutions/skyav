import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Helmet } from "react-helmet-async";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What areas do you serve in Mumbai?",
      answer: "We provide AV equipment rental services across Mumbai, Navi Mumbai, Thane, Pune, Lonavala, Surat, and Goa. We offer free delivery and setup within Mumbai city limits and competitive rates for outstation events.",
    },
    {
      question: "How far in advance should I book equipment?",
      answer: "We recommend booking at least 7-10 days in advance for peak season (October-March) and 3-5 days for regular bookings. However, we also accommodate last-minute bookings subject to availability. Call us at +91 86559 73366 for urgent requirements.",
    },
    {
      question: "Do you provide technical support during events?",
      answer: "Yes! We provide complete technical support including equipment setup, on-site technician assistance during the event, and breakdown services. Our team ensures smooth operation throughout your event.",
    },
    {
      question: "What is your cancellation policy?",
      answer: "Cancellations made 48 hours before the event receive a full refund. Cancellations within 24-48 hours are subject to 50% charges, and same-day cancellations forfeit the booking amount. We offer flexible rescheduling options.",
    },
    {
      question: "Can I test the equipment before my event?",
      answer: "Absolutely! We encourage clients to test equipment before major events. Visit our Dahisar office for equipment demonstrations or schedule a pre-event site visit where we'll demonstrate all equipment functionality.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major payment methods including cash, bank transfer, UPI, credit/debit cards, and digital wallets. We require 50% advance payment for booking confirmation and the balance can be paid before or immediately after the event.",
    },
    {
      question: "Do you offer package deals for complete event setups?",
      answer: "Yes! We offer customized package deals combining projectors, sound systems, LED walls, and other equipment at discounted rates. Contact us with your event details for a personalized quote that fits your budget.",
    },
    {
      question: "What happens if equipment malfunctions during my event?",
      answer: "We provide backup equipment for all major rentals and have a rapid response team on standby. In the rare case of malfunction, we replace equipment within 1-2 hours and offer compensation for any inconvenience caused.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>FAQ - AV Equipment Rental Questions | Sky Vision Multimedia</title>
        <meta name="description" content="Frequently asked questions about AV equipment rental in Mumbai. Learn about booking, pricing, delivery, technical support, and cancellation policies." />
        <meta name="keywords" content="AV rental FAQ, equipment rental questions, projector rental Mumbai FAQ, LED wall rental questions, event equipment help" />
        <link rel="canonical" href="https://skyav.in/#faq" />
        <script type="application/ld+json">
          {JSON.stringify(faqStructuredData)}
        </script>
      </Helmet>
      
      <section id="faq" className="py-12 md:py-20 lg:py-24 bg-gradient-to-br from-white via-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
           <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20">
             FAQ
            </span>
          </div>
          {/* <p className="text-base font-medium text-primary mb-2">FAQ</p> */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers! Find quick solutions to common queries about our AV rental services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <article
              key={index}
              className="bg-white/70 backdrop-blur-md rounded-2xl overflow-hidden transition-all duration-300 border border-white/40 hover:border-primary/30 shadow-lg hover:shadow-xl"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full p-6 text-left hover:bg-secondary/50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-semibold pr-8">{faq.question}</h3>
                <ChevronDown
                  className={`h-5 w-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg mb-6">Still have questions? We're here to help!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918655973366"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              Call +91 86559 73366
            </a>
            <a
              href="https://wa.me/918655973366"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 glass-card rounded-full font-semibold hover:bg-secondary transition-colors"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default FAQ;
