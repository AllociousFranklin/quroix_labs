"use client";

import Image from "next/image";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { ReactLenis } from 'lenis/react'
import "./contact.css";
import { SectionFooter } from "../Main/SectionFooter";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import dynamic from "next/dynamic";
import { Scheduler } from "./Scheduler";

gsap.registerPlugin(SplitText, ScrollTrigger);

// Dynamically import the 3D Globe (no SSR for Three.js)
const ContactGlobe = dynamic(() => import("./Globe"), {
  ssr: false,
  loading: () => null,
});

export const ContactPageSection = () => {
  const [showScheduler, setShowScheduler] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const titleRef = useRef()
  const lineRef = useRef()
  const contactItem1 = useRef()
  const contactItem2 = useRef()
  const contactItem3 = useRef()
  const contactItem4 = useRef()
  const globeWrapperRef = useRef()

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "What does an AI automation agency do?",
      a: "An AI automation agency like Quroix Labs designs, builds, and deploys intelligent systems that automate complex business processes. This includes autonomous AI agents, workflow automation, RAG pipeline architecture, and custom software development — all engineered to reduce operational overhead and accelerate growth."
    },
    {
      q: "How does the FlowPilot engine integrate with legacy systems?",
      a: "The FlowPilot engine utilizes a modular adapter architecture, allowing it to interface with legacy SOAP/REST APIs, SQL databases, and mainframe systems via secure, low-latency orchestration layers. This means businesses can modernize their workflows without replacing existing infrastructure."
    },
    {
      q: "What is the typical ROI for an AgentCore deployment?",
      a: "Clients typically report 30-40% reduction in operational overhead and a 3.5x faster ROI compared to traditional software development, with initial pilot programs achieving production readiness in 4-8 weeks."
    },
    {
      q: "How long does it take to implement AI automation?",
      a: "Quroix Labs typically delivers production-ready AI automation systems in 4-8 weeks using agile deployment methodology. This includes discovery, architecture design, agent development, integration testing, and production deployment with real-time monitoring."
    },
    {
      q: "What is an autonomous AI agent?",
      a: "An autonomous AI agent is a software system that can perceive its environment, make decisions, and take actions to achieve specific goals with minimal human intervention. Quroix Labs builds enterprise-grade autonomous agents using the AgentCore Framework, capable of handling tasks like lead scoring, document processing, data analysis, and workflow orchestration."
    }
  ];

  useEffect(() => {
    // headline text animation
    const titleSplit = new SplitText(titleRef.current, { type: "chars" });
    gsap.fromTo(titleSplit.chars, { 'will-change': 'opacity, transform', filter: 'blur(8px)', opacity: 0, yPercent: 50 }, { delay: 0.2, opacity: 1, filter: 'blur(0px)', yPercent: 0, stagger: 0.02, duration: 0.75, ease: "power1" });

    // line animation
    gsap.fromTo(lineRef.current, { opacity: 0, filter: 'blur(8px)' }, { opacity: 1, filter: 'blur(0px)', duration: 1, delay: 0.5 })

    // contact items animation
    gsap.to(contactItem1.current, { delay: 0.4, opacity: 1, filter: 'blur(0px)', duration: 1, ease: 'power1' });
    gsap.to(contactItem2.current, { delay: 0.5, opacity: 1, filter: 'blur(0px)', duration: 1, ease: 'power1' });
    gsap.to(contactItem3.current, { delay: 0.6, opacity: 1, filter: 'blur(0px)', duration: 1, ease: 'power1' });
    gsap.to(contactItem4.current, { delay: 0.7, opacity: 1, filter: 'blur(0px)', duration: 1, ease: 'power1' });

    // globe animation
    gsap.to(globeWrapperRef.current, { delay: 0.5, opacity: 1, filter: 'blur(0px)', duration: 1, ease: 'power1' });
  }, [])

  return (
    <ReactLenis root>
      <section className="contact">
        <div className="contact-content">
          <div className="contact-content-top">
            <div className="titlebox">
              <div className="titlebox-gradient" />
              <h1 className="headline white" ref={titleRef} >Get in Touch</h1>
            </div>
            <div className="contact-divider" ref={lineRef} />
          </div>
          <div className="contact-content-row">
            <div className="contact-content-left">
              <div className="contact-content-column">

                {/* Intro card with profile */}
                <div className="contact-content-top-item opacity-blur" ref={contactItem1} >
                  <div className="contact-content-top-item-profile">
                    <Image src="/images/mockup4.webp" className="contact-content-top-item-image" alt="QuroixLabs team member profile"  width={1920} height={1080} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw" />
                  </div>
                  <div className="contact-content-top-item-text">
                    <p className="description white" >Ready to build something that drives real results? Reach out directly to discuss your project and get a clear path forward.</p>
                  </div>
                </div>

                {/* Videocall card */}
                <div 
                  className={`contact-content-item scheduler-trigger opacity-blur ${showScheduler ? "active-item" : ""}`} 
                  ref={contactItem2} 
                  onClick={() => setShowScheduler(true)}
                  style={{ cursor: "pointer" }}
                >
                  <p className="contact-item-label" style={{ color: showScheduler ? "#3b82f6" : "#8b7355" }}>Videocall</p>
                  <p className="description white">Schedule a 30-Minute Strategy Call</p>
                </div>

                {/* Email card */}
                <div className="contact-content-item opacity-blur" ref={contactItem3} >
                  <p className="contact-item-label" >Email</p>
                  <p className="description white" >quroixlabs@gmail.com</p>
                </div>

                {/* Address card */}
                <div className="contact-content-item opacity-blur" ref={contactItem4} >
                  <p className="contact-item-label" >Address</p>
                  <p className="description white" >43,vivekanandhar Street, KK Nagar</p>
                  <p className="description white" >Chennai</p>
                  <p className="description white" >Tamil Nadu</p>
                </div>

              </div>
            </div>
            
            <div className="contact-content-right opacity-blur" ref={globeWrapperRef} style={{ display: "flex", flexDirection: "column", gap: "30px", height: "auto", minHeight: "66vh", justifyContent: "flex-start", alignItems: "stretch" }}>
              {/* Globe (Always visible) */}
              <div style={{ width: "100%", height: "55vh", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Suspense fallback={null}>
                  <ContactGlobe />
                </Suspense>
              </div>

              {/* Scheduler Brief (Renders below Globe on trigger) */}
              {showScheduler && (
                <div style={{ width: "100%", marginTop: "10px", animation: "scaleIn 0.4s ease-out" }}>
                  <Scheduler />
                </div>
              )}
            </div>
          </div>

          {/* FAQ Accordion Section */}
          <div className="faq-section">
            <div className="faq-container">
              <h2 className="subheadline white" style={{ textAlign: "center", fontSize: "2rem", marginBottom: "20px" }}>Frequently Asked Questions</h2>
              <div className="faq-list">
                {faqs.map((faq, index) => (
                  <div key={index} className={`faq-item ${openFaq === index ? "open" : ""}`}>
                    <button className="faq-trigger" onClick={() => toggleFaq(index)} type="button">
                      <span className="faq-question">{faq.q}</span>
                      <div className="faq-icon-wrapper">
                        <span className="faq-icon-line faq-icon-line-h"></span>
                        <span className="faq-icon-line faq-icon-line-v"></span>
                      </div>
                    </button>
                    <div className="faq-content-box" style={{ maxHeight: openFaq === index ? "300px" : "0", transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)" }}>
                      <p className="faq-answer">{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
      <SectionFooter />
    </ReactLenis>
  );
};
