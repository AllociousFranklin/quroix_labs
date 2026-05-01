"use client";
import React, { useEffect, useRef } from "react";
import { ReactLenis } from 'lenis/react'
import "../../Main/main.css";
import "../../contact/contact.css";
import { SectionFooter } from "../../Main/SectionFooter";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { MapPin, Zap, Shield, Cpu } from "lucide-react";

gsap.registerPlugin(SplitText);

export default function ChennaiLocation() {
  const titleRef = useRef();
  const contentRef = useRef();

  useEffect(() => {
    const titleSplit = new SplitText(titleRef.current, { type: "chars" });
    gsap.fromTo(titleSplit.chars, { opacity: 0, y: 50, filter: "blur(10px)" }, { opacity: 1, y: 0, filter: "blur(0px)", stagger: 0.02, duration: 0.8, ease: "power2.out" });
    
    gsap.fromTo(contentRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power2.out" });
  }, []);

  return (
    <ReactLenis root>
      <section className="contact" style={{ paddingTop: "20vh" }}>
        <div className="contact-content">
          <div className="contact-content-top">
            <div className="titlebox">
              <div className="titlebox-gradient" />
              <h1 className="headline white" ref={titleRef}>AI Automation Agency <br /> in Chennai</h1>
            </div>
            <p className="description grey" style={{ marginTop: "2vh", maxWidth: "800px" }}>
              QuroixLabs is Chennai&apos;s premier engineering consultancy for autonomous AI agents and intelligent workflows. We bridge the gap between complex industrial challenges and agentic AI solutions.
            </p>
          </div>

          <div className="contact-content-row" ref={contentRef} style={{ marginTop: "10vh" }}>
            <div className="contact-content-left">
              <div className="contact-content-column">
                <div className="contact-content-item">
                  <MapPin className="contact-item-label" />
                  <p className="description white">Regional Headquarters</p>
                  <p className="small-description grey">43, Vivekanandhar Street, KK Nagar, Chennai, Tamil Nadu 600078</p>
                </div>

                <div className="contact-content-item">
                  <Zap className="contact-item-label" />
                  <p className="description white">Local Impact</p>
                  <p className="small-description grey">Optimizing Chennai&apos;s industrial engineering and manufacturing sectors with the FlowPilot engine.</p>
                </div>

                <div className="contact-content-item">
                  <Cpu className="contact-item-label" />
                  <p className="description white">Technical Infrastructure</p>
                  <p className="small-description grey">Deploying localized RAG pipelines and autonomous agents for secure, on-premise enterprise environments.</p>
                </div>

                <div className="contact-content-item">
                  <Shield className="contact-item-label" />
                  <p className="description white">Governance</p>
                  <p className="small-description grey">Chennai-based engineering support with global SOC2-aligned data privacy standards.</p>
                </div>
              </div>
            </div>

            <div className="contact-content-right">
              <div className="contact-content-item" style={{ border: "1px solid rgba(255,255,255,0.1)", padding: "40px", borderRadius: "20px", background: "rgba(255,255,255,0.02)" }}>
                <h2 className="subheadline white" style={{ fontSize: "2rem", marginBottom: "20px" }}>Why Chennai?</h2>
                <p className="description grey" style={{ lineHeight: "1.6" }}>
                  Chennai&apos;s robust engineering ecosystem and automotive heritage provide the perfect environment for stress-testing Agentic AI. We leverage local talent to build systems that scale globally.
                </p>
                <div style={{ marginTop: "40px" }}>
                  <button className="contact-button-white" onClick={() => window.location.href='/contact'}>
                    <span className="description black">Consult with our Chennai Team</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SectionFooter />
    </ReactLenis>
  );
}
