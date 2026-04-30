"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { ReactLenis } from 'lenis/react'
import { SectionFooter } from "../../Main/SectionFooter";
import gsap from "gsap";
import { TextPlugin } from 'gsap/TextPlugin';
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import { ArrowLeft } from "lucide-react";
import { usePathname, useRouter } from 'next/navigation';

gsap.registerPlugin(SplitText, ScrollTrigger, TextPlugin);

const CaseStudySMMAContent = () => {
  const router = useRouter();
  const pathname = usePathname();
  let isAnimating = false;
  const handleNavigate = (path) => { if (pathname === path || isAnimating) return; router.prefetch(path); isAnimating = true; const event = new CustomEvent('startAnimation'); window.dispatchEvent(event); setTimeout(() => { router.push(path); isAnimating = false; }, 750); };

  const titleRef = useRef(); const descriptionRef = useRef(); const casestudyBackButtonRef = useRef();
  const casestudyCenterRef1 = useRef(); const casestudyCenterRef2 = useRef(); const casestudyCenterRef3 = useRef();
  const casestudyCenterRef4 = useRef(); const casestudyCenterRef5 = useRef(); const casestudyCenterRef6 = useRef();
  const casestudyImageRef1 = useRef(); const casestudyImageRef2 = useRef(); const casestudyImageRef3 = useRef();
  const imageRef = useRef();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  useEffect(() => {
    const titleSplit = new SplitText(titleRef.current, { type: "chars" });
    gsap.to(titleRef.current, { opacity: 1 })
    gsap.fromTo(titleSplit.chars, { filter: 'blur(8px)', yPercent: 75, opacity: 0, rotateX: -90 }, { delay: 0.4, rotateX: 0, opacity: 1, filter: 'blur(0px)', yPercent: 0, stagger: 0.025, ease: 'sine'});
    const split = new SplitText(descriptionRef.current, { type: "words" });
    gsap.fromTo(split.words, { opacity: 0, skewX: -20, willChange: 'filter, transform', filter: 'blur(8px)' }, { ease: 'sine', opacity: 1, skewX: 0, filter: 'blur(0px)', stagger: 0.01, scrollTrigger: { trigger: descriptionRef.current, start: 'top 95%' } });
    gsap.fromTo(casestudyBackButtonRef.current, { opacity: 0, willChange: 'filter, transform', filter: 'blur(8px)' }, { delay: 0.6, ease: 'sine', opacity: 1, filter: 'blur(0px)', duration: 0.5 });
    gsap.fromTo(imageRef.current, { yPercent: -12.5 }, { yPercent: 12.5, scrollTrigger: { trigger: ".casestudy-top", start: "top bottom", end: "bottom top", scrub: true} })
    gsap.fromTo(casestudyCenterRef1.current, { opacity: 0, willChange: 'filter, transform', filter: 'blur(8px)' }, { ease: 'sine', opacity: 1, filter: 'blur(0px)', duration: 0.5, scrollTrigger: { trigger: casestudyCenterRef1.current, start: "top 95%" } });
    gsap.fromTo(casestudyCenterRef2.current, { opacity: 0, willChange: 'filter, transform', filter: 'blur(8px)' }, { ease: 'sine', opacity: 1, filter: 'blur(0px)', duration: 0.5, scrollTrigger: { trigger: casestudyCenterRef2.current, start: "top 95%" }});
    gsap.fromTo(casestudyCenterRef3.current, { opacity: 0, willChange: 'filter, transform', filter: 'blur(8px)' }, { ease: 'sine', opacity: 1, filter: 'blur(0px)', duration: 0.5, scrollTrigger: { trigger: casestudyCenterRef3.current, start: "top 95%" } });
    gsap.fromTo(casestudyCenterRef4.current, { opacity: 0, willChange: 'filter, transform', filter: 'blur(8px)' }, { ease: 'sine', opacity: 1, filter: 'blur(0px)', duration: 0.5, scrollTrigger: { trigger: casestudyCenterRef4.current, start: "top 95%" } });
    gsap.fromTo(casestudyCenterRef5.current, { opacity: 0, willChange: 'filter, transform', filter: 'blur(8px)' }, { ease: 'sine', opacity: 1, filter: 'blur(0px)', duration: 0.5, scrollTrigger: { trigger: casestudyCenterRef5.current, start: "top 95%" } });
    gsap.fromTo(casestudyCenterRef6.current, { opacity: 0, willChange: 'filter, transform', filter: 'blur(8px)' }, { ease: 'sine', opacity: 1, filter: 'blur(0px)', duration: 0.5, scrollTrigger: { trigger: casestudyCenterRef6.current, start: "top 95%" } });
    gsap.fromTo(casestudyImageRef1.current, { opacity: 0, willChange: 'filter, transform', filter: 'blur(8px)' }, { delay: 0, ease: 'power1', opacity: 1, filter: 'blur(0px)', duration: 1, scrollTrigger: { trigger: casestudyImageRef1.current, start: "top 95%" } });
    gsap.fromTo(casestudyImageRef2.current, { opacity: 0, willChange: 'filter, transform', filter: 'blur(8px)' }, { delay: 0.25, ease: 'power1', opacity: 1, filter: 'blur(0px)', duration: 1, scrollTrigger: { trigger: casestudyImageRef2.current, start: "top 95%" } });
    gsap.fromTo(casestudyImageRef3.current, { opacity: 0, willChange: 'filter, transform', filter: 'blur(8px)' }, { delay: 0, ease: 'power1', opacity: 1, filter: 'blur(0px)', duration: 1, scrollTrigger: { trigger: casestudyImageRef3.current, start: "top 95%" } });
  }, [])

  return (
    <ReactLenis root>
      <article className="casestudy">
        <div className="casestudy-content">
          <div className="casestudy-top">
            <div className="casestudy-top-section">
              <div className="casestudy-navigation" ref={casestudyBackButtonRef}><div className="casestudy-navigation-button" onClick={() => handleNavigate('/works')}><ArrowLeft className="casestudy-navigation-button-icon" /><p className="small-description white">Back to Works</p></div></div>
              <h1 className="subheadline white" ref={titleRef}>SMMA Agency</h1>
            </div>
            <div className="casestudy-top-section"><img src="/mockups/kinimatic.webp" className="casestudy-video" alt="SMMA Agency website with AI-driven growth engine and lead management dashboard" /></div>
            <div className="casestudy-top-gradient" />
            <img src="/mockups/kinimatic.webp" ref={imageRef} className="casestudy-top-image" alt="SMMA Agency parallax background" />
          </div>
          <div className="casestudy-center">
            <h2 className="small-subheadline white" ref={descriptionRef}>We engineered an autonomous growth engine for a high-volume SMMA, deploying AI-driven lead scoring and automated onboarding pipelines. By integrating real-time sentiment analysis and multi-channel orchestration, we transformed their client acquisition process from a manual bottleneck into a scalable, intelligent system.</h2>
            <div className="casestudy-center-content">
              <div className="casestudy-center-item"><p className="small-description white" ref={casestudyCenterRef1}>Industrial Context</p><p className="small-description grey" ref={casestudyCenterRef2}>AI-driven lead scoring and automated multi-channel onboarding for creative agencies.</p></div>
              <div className="casestudy-center-item"><p className="small-description white" ref={casestudyCenterRef3}>Technical Complexity</p><p className="small-description grey" ref={casestudyCenterRef4}>Implementing real-time sentiment analysis on incoming lead data and orchestrating asynchronous workflows across 7,000+ app integrations.</p></div>
              <div className="casestudy-center-item"><p className="small-description white" ref={casestudyCenterRef5}>Architectural Blueprint</p><p className="small-description grey" ref={casestudyCenterRef6}>Custom orchestration layer utilizing the FlowPilot engine integrated with Zapier Agents and proprietary Python microservices.</p></div>
              <div className="casestudy-center-item"><p className="small-description white">Implementation Timeline</p><p className="small-description grey">4-week agile deployment from workflow mapping to live automated execution.</p></div>
              <div className="casestudy-center-item"><p className="small-description white">Measurable ROI</p><div className="casestudy-center-item-column"><div className="casestudy-center-item-profile"><p className="small-description white">25% Boost in Sales Conversions via AI Lead Scoring</p></div><div className="casestudy-center-item-profile"><p className="small-description white">65% Faster Client Onboarding Lifecycle</p></div><div className="casestudy-center-item-profile"><p className="small-description white">40% Reduction in Operational Engineering Costs</p></div></div></div>
            </div>
          </div>
          <div className="casestudy-bottom">
            <div className="casestudy-bottom-full-imagebox" ref={casestudyImageRef1}><img src="/mockups/kinimatic.webp" className="casestudy-bottom-image" alt="SMMA Agency full landing page with conversion-optimized design" /></div>
            <div className="casestudy-bottom-half-imagebox" ref={casestudyImageRef2}><img src="/images/test14.webp" className="casestudy-bottom-image" alt="SMMA Agency conversion funnel and lead flow visualization" /></div>
            <div className="casestudy-bottom-half-imagebox" ref={casestudyImageRef3}><img src="/images/abs.webp" className="casestudy-bottom-image" alt="SMMA Agency brand identity and visual design system" /></div>
          </div>
        </div>
      </article>
      <SectionFooter />
    </ReactLenis>
  );
};

export default CaseStudySMMAContent;
