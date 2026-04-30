"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqData = [
  {
    question: "How does the FlowPilot engine integrate with legacy systems?",
    answer: "The FlowPilot engine utilizes a modular adapter architecture, allowing it to interface with legacy SOAP/REST APIs, SQL databases, and mainframe systems via secure, low-latency orchestration layers."
  },
  {
    question: "What is the typical ROI for an AgentCore deployment?",
    answer: "Clients typically report 30-40% reduction in operational overhead and a 3.5x faster ROI compared to traditional software development, with initial pilot programs achieving production readiness in 4-8 weeks."
  },
  {
    question: "Does QuroixLabs provide custom AI automation for global clients?",
    answer: "Yes, QuroixLabs is a global AI automation agency based in Chennai, delivering bespoke agentic infrastructure and intelligent workflows to enterprise clients across North America, Europe, and Asia."
  },
  {
    question: "What industries does QuroixLabs serve?",
    answer: "We specialize in high-complexity sectors including Engineering (BIM/MEP), Healthcare, Financial Services, and Digital Commerce, where accuracy and autonomous decision-making are critical."
  }
];

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef();

  useEffect(() => {
    if (isOpen) {
      gsap.to(contentRef.current, { height: "auto", opacity: 1, duration: 0.5, ease: "power2.out" });
    } else {
      gsap.to(contentRef.current, { height: 0, opacity: 0, duration: 0.5, ease: "power2.in" });
    }
  }, [isOpen]);

  return (
    <div className="faq-item" style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", padding: "24px 0" }}>
      <div 
        className="faq-question" 
        onClick={() => setIsOpen(!isOpen)} 
        style={{ display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }}
      >
        <h3 className="small-subheadline white" style={{ margin: 0, fontSize: "1.25rem" }}>{question}</h3>
        {isOpen ? <Minus className="white" /> : <Plus className="white" />}
      </div>
      <div 
        className="faq-answer" 
        ref={contentRef} 
        style={{ height: 0, overflow: "hidden", opacity: 0 }}
      >
        <p className="description grey" style={{ marginTop: "16px", lineHeight: "1.6" }}>{answer}</p>
      </div>
    </div>
  );
};

export const SectionFAQ = () => {
  const titleRef = useRef();

  return (
    <section className="faq" style={{ padding: "10vh 0" }}>
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <div className="textbox" style={{ marginBottom: "8vh" }}>
          <div className="subheadline-box">
             <HelpCircle className="subheadline-box-icon" />
             <h2 className="small-description grey">FAQ</h2>
          </div>
          <h2 className="subheadline white" ref={titleRef}>Common Inquiries</h2>
        </div>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <FAQItem key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
