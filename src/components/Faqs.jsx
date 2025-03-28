import { useState } from "react";
import "./Faqs.css"

function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faqs">
      <h2>FAQs</h2>
      <div className="faq-container">
        {[
          {
            question: "What is Elevate Mindset?",
            answer:
              "Elevate Mindser is a mental health platform that provides therapy, resources, and a supportive community.",
          },
          {
            question: "How can i book a therapy session?",
            answer:
              "You can book a session by signing up and selecting a therapist from our platform.",
          },
          {
            question: "Is the platform free?",
            answer:
              "We offer free resources, but therapy sessions may have fees depending on the therapist.",
          },
        ].map((faq, index) => (
            <div className="faq-item" key={index}>
                <button className="faq-question" onClick={() => toggleFAQ(index)}>
                    {faq.question} <span>{openIndex === index ? "-" : "+"}</span>
                </button>
                {openIndex === index && <div className="faq-answer"><p>{faq.answer}</p></div>}
            </div>
        ))}
      </div>
    </section>
  );
}
 export default Faqs;