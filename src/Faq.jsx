import React, { useState } from "react";

const faqData = [
  {
    question: "How do I start the process of buying a property with Aruna?",
    answer:
      "At Aruna, we make it simple for you to find your dream home. Start by browsing our property listings, and once you've found a property that interests you, contact our team to schedule a viewing and get expert advice on the next steps.",
  },
  {
    question: "What types of properties does Aruna offer?",
    answer:
      "Aruna offers a wide range of properties including apartments, villas, townhouses, and commercial spaces.",
  },
  {
    question: "Can Aruna assist with property financing or mortgages?",
    answer:
      "Yes, Aruna partners with trusted lenders to help you find financing and mortgage solutions tailored to your needs.",
  },
  {
    question: "Does Aruna provide property management services?",
    answer:
      "Yes, Aruna offers professional property management services including maintenance, tenant screening, and rent collection.",
  },
  {
    question: "Are there any fees involved in working with Aruna?",
    answer:
      "Yes, there may be service or commission fees depending on the type of property and services used. Please contact our team for detailed information.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      {faqData.map((item, index) => (
        <div key={index} className="border-b border-gray-300 py-4">
          <button
            className="w-full text-left flex justify-between items-center focus:outline-none"
            onClick={() => toggle(index)}
          >
            <h3 className="text-lg font-semibold text-gray-900">
              {item.question}
            </h3>
            <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
          </button>
          {openIndex === index && (
            <p className="mt-2 text-gray-700 text-base">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;