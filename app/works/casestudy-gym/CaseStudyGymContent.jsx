"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ReactLenis } from 'lenis/react'
import { SectionFooter } from "../../Main/SectionFooter";
import gsap from "gsap";
import { TextPlugin } from 'gsap/TextPlugin';
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import { ArrowLeft } from "lucide-react";
import { usePathname, useRouter } from 'next/navigation';

gsap.registerPlugin(SplitText, ScrollTrigger, TextPlugin);

const CaseStudyGymContent = () => {
  const router = useRouter();
  const pathname = usePathname();
  let isAnimating = false;

  const handleNavigate = (path) => {
    if (pathname === path || isAnimating) return;
    router.prefetch(path);
    isAnimating = true;
    const event = new CustomEvent('startAnimation');
    window.dispatchEvent(event);
    setTimeout(() => {
      router.push(path);
      isAnimating = false;
    }, 750);
  };

  const titleRef = useRef();
  const descriptionRef = useRef();
  const navRef = useRef();
  
  const casestudyCenterRef1 = useRef();
  const casestudyCenterRef2 = useRef();
  const casestudyCenterRef3 = useRef();
  const casestudyCenterRef4 = useRef();
  
  const casestudyImageRef1 = useRef();
  const casestudyImageRef2 = useRef();
  const casestudyImageRef3 = useRef();

  const imageRef = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const titleSplit = new SplitText(titleRef.current, { type: "chars" });
    gsap.to(titleRef.current, { opacity: 1 })
    gsap.fromTo(titleSplit.chars, { filter: 'blur(8px)', yPercent: 75, opacity: 0, rotateX: -90 }, { delay: 0.2, rotateX: 0, opacity: 1, filter: 'blur(0px)', yPercent: 0, stagger: 0.02, ease: 'power2.out'});

    gsap.fromTo(navRef.current, { opacity: 0, x: -20 }, { delay: 0.1, opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' });

    gsap.fromTo(imageRef.current, { scale: 1.1, yPercent: -5 }, { scale: 1.1, yPercent: 15, ease: 'none', scrollTrigger: { trigger: ".casestudy-hero", start: "top bottom", end: "bottom top", scrub: true} })

    const split = new SplitText(descriptionRef.current, { type: "words" });
    gsap.fromTo(split.words, { opacity: 0, y: 20 }, { ease: 'power2.out', opacity: 1, y: 0, stagger: 0.01, scrollTrigger: { trigger: descriptionRef.current, start: 'top 85%' } });    

    const infoItems = [casestudyCenterRef1, casestudyCenterRef2, casestudyCenterRef3, casestudyCenterRef4];
    infoItems.forEach((item, i) => {
        gsap.fromTo(item.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, delay: i * 0.1, ease: 'power2.out', scrollTrigger: { trigger: item.current, start: "top 85%" } });
    });

    gsap.fromTo(casestudyImageRef1.current, { opacity: 0, scale: 0.95 }, { ease: 'power2.out', opacity: 1, scale: 1, duration: 1, scrollTrigger: { trigger: casestudyImageRef1.current, start: "top 85%" } });
    gsap.fromTo(casestudyImageRef2.current, { opacity: 0, scale: 0.95 }, { ease: 'power2.out', opacity: 1, scale: 1, duration: 1, scrollTrigger: { trigger: casestudyImageRef2.current, start: "top 85%" } });
    gsap.fromTo(casestudyImageRef3.current, { opacity: 0, scale: 0.95 }, { ease: 'power2.out', opacity: 1, scale: 1, duration: 1, scrollTrigger: { trigger: casestudyImageRef3.current, start: "top 85%" } });
  }, [])

  return (
    <ReactLenis root>
      <article className="casestudy">
        <div className="casestudy-header">
          <div className="casestudy-navigation" onClick={() => handleNavigate('/works')} ref={navRef}>
            <ArrowLeft className="casestudy-navigation-icon" />
            <p className="small-description white">Back to Works</p>
          </div>
          <h1 className="casestudy-title white" ref={titleRef}>Apex Gym</h1>
        </div>

        <div className="casestudy-hero">
          <div className="casestudy-hero-image-wrapper">
            <Image src="/mockups/heave.webp" ref={imageRef} className="casestudy-hero-image" alt="Apex Gym case study visualization"  width={1920} height={1080} />
          </div>
        </div>

        <div className="casestudy-info">
          <div className="casestudy-info-left">
            <h2 className="small-subheadline white" ref={descriptionRef}>We deployed an automated membership intelligence system for Apex Gym, utilizing persistent, always-on recurring agents to manage member engagement and retention. By orchestrating the AgentCore Framework with personalized productivity agents, we created a seamless, high-energy digital experience that proactively addresses member churn.</h2>
          </div>
          <div className="casestudy-info-right">
            <div className="casestudy-info-item" ref={casestudyCenterRef1}>
              <p className="casestudy-info-label">Industrial Context</p>
              <p className="casestudy-info-value">Automated membership intelligence and retention workflows for luxury fitness centers.</p>
            </div>
            <div className="casestudy-info-item" ref={casestudyCenterRef2}>
              <p className="casestudy-info-label">Technical Complexity</p>
              <p className="casestudy-info-value">Deploying persistent, always-on recurring agents that synchronize across mobile and web endpoints to provide real-time engagement triggers.</p>
            </div>
            <div className="casestudy-info-item" ref={casestudyCenterRef3}>
              <p className="casestudy-info-label">Architectural Blueprint</p>
              <p className="casestudy-info-value">Implementation of the AgentCore Framework integrated with Lindy AI and custom webhook orchestration for membership management.</p>
            </div>
            <div className="casestudy-info-item" ref={casestudyCenterRef4}>
              <p className="casestudy-info-label">Measurable ROI</p>
              <p className="casestudy-info-value">30% reduction in membership churn, 45% increase in member engagement scores, and 20% growth in direct digital sign-ups.</p>
            </div>
          </div>
        </div>

        <div className="casestudy-gallery">
          <div className="casestudy-gallery-full" ref={casestudyImageRef1}>
            <Image src="/mockups/heave.webp" className="casestudy-gallery-image" alt="Apex Gym full landing page"  width={1920} height={1080} />
          </div>
          <div className="casestudy-gallery-half" ref={casestudyImageRef2}>
            <Image src="/images/test17.webp" className="casestudy-gallery-image" alt="Apex Gym vibrant mobile design"  width={1920} height={1080} />
          </div>
          <div className="casestudy-gallery-half" ref={casestudyImageRef3}>
            <Image src="/images/test14.webp" className="casestudy-gallery-image" alt="Apex Gym membership operational flow"  width={1920} height={1080} />
          </div>
        </div>
      </article>
      <SectionFooter />
    </ReactLenis>
  );
};

export default CaseStudyGymContent;
