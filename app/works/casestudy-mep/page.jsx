"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { ReactLenis } from 'lenis/react'
import "../works.css";
import { SectionFooter } from "../../Main/SectionFooter";
import gsap from "gsap";
import { TextPlugin } from 'gsap/TextPlugin';
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import { ArrowLeft } from "lucide-react";
import { usePathname, useRouter } from 'next/navigation';

gsap.registerPlugin(SplitText, ScrollTrigger, TextPlugin);

const CaseStudyMEP = () => {
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
  const casestudyBackButtonRef = useRef();
  const casestudyCenterRef1 = useRef();
  const casestudyCenterRef2 = useRef();
  const casestudyCenterRef3 = useRef();
  const casestudyCenterRef4 = useRef();
  const casestudyCenterRef5 = useRef();
  const casestudyCenterRef6 = useRef();
  const casestudyImageRef1 = useRef();
  const casestudyImageRef2 = useRef();
  const casestudyImageRef3 = useRef();
  const casestudyImageRef4 = useRef();
  const casestudyImageRef5 = useRef();
  const casestudyImageRef6 = useRef();

  const imageRef = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    gsap.fromTo(casestudyImageRef4.current, { opacity: 0, willChange: 'filter, transform', filter: 'blur(8px)' }, { delay: 0, ease: 'power1', opacity: 1, filter: 'blur(0px)', duration: 1, scrollTrigger: { trigger: casestudyImageRef4.current, start: "top 95%" } });
    gsap.fromTo(casestudyImageRef5.current, { opacity: 0, willChange: 'filter, transform', filter: 'blur(8px)' }, { delay: 0.25, ease: 'power1', opacity: 1, filter: 'blur(0px)', duration: 1, scrollTrigger: { trigger: casestudyImageRef5.current, start: "top 95%" } });
    gsap.fromTo(casestudyImageRef6.current, { opacity: 0, willChange: 'filter, transform', filter: 'blur(8px)' }, { delay: 0, ease: 'power1', opacity: 1, filter: 'blur(0px)', duration: 1, scrollTrigger: { trigger: casestudyImageRef6.current, start: "top 95%" } });
  }, [])

  return (
    <ReactLenis root>
      <section className="casestudy">
        <div className="casestudy-content">
          <div className="casestudy-top">
            <div className="casestudy-top-section">
              <div className="casestudy-navigation" ref={casestudyBackButtonRef} >
                <div className="casestudy-navigation-button" onClick={() => handleNavigate('/works')} >
                  <ArrowLeft className="casestudy-navigation-button-icon" />
                  <p className="small-description white" >Back to Works</p>
                </div>
              </div>
              <h1 className="subheadline white" ref={titleRef} >MEP Design Consultants</h1>
            </div>
            <div className="casestudy-top-section">
              <img src="/mockups/trielementdesign.webp" className="casestudy-video" alt="MEP Design Consultants Hero" />
            </div>
            <div className="casestudy-top-gradient" />
            <img src="/mockups/trielementdesign.webp" ref={imageRef} className="casestudy-top-image" alt="" />
          </div>
          <div className="casestudy-center">
            <h2 className="small-subheadline white" ref={descriptionRef} >We engineered a high-performance digital presence for MEP Design Consultants, a leader in mechanical, electrical, and plumbing engineering. The objective was to create a platform that reflects their technical precision while providing an intuitive user experience for global developers and architects.</h2>
            <div className="casestudy-center-content">
              <div className="casestudy-center-item">
                <p className="small-description white" ref={casestudyCenterRef1} >Scope</p>
                <p className="small-description grey" ref={casestudyCenterRef2} >Technical Web Development, UI/UX Design, Performance Optimization, Lead Generation Strategy, Brand Refinement.</p>
              </div>
              <div className="casestudy-center-item">
                <p className="small-description white" ref={casestudyCenterRef3} >Impact</p>
                <div className="casestudy-center-item-column">
                  <div className="casestudy-center-item-profile" ref={casestudyCenterRef4} >
                    <p className="small-description white" >40% Increase in Global Lead Inquiries</p>
                  </div>
                  <div className="casestudy-center-item-profile" ref={casestudyCenterRef5} >
                    <p className="small-description white" >Sub-second Page Load Speeds</p>
                  </div>
                  <div className="casestudy-center-item-profile" ref={casestudyCenterRef6} >
                    <p className="small-description white" >Seamless Project Portfolio Navigation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="casestudy-bottom">
            <div className="casestudy-bottom-full-imagebox" ref={casestudyImageRef1} >
              <img src="/mockups/trielementdesign.webp" className="casestudy-bottom-image" alt="MEP Design Desktop View" />
            </div>
            <div className="casestudy-bottom-half-imagebox" ref={casestudyImageRef2} >
              <img src="/images/test14.webp" className="casestudy-bottom-image" alt="Technical Layout" />
            </div>
            <div className="casestudy-bottom-half-imagebox" ref={casestudyImageRef3} >
              <img src="/images/test17.webp" className="casestudy-bottom-image" alt="Mobile Experience" />
            </div>
          </div>
        </div>
      </section>
      <SectionFooter />
    </ReactLenis>
  );
};

export default CaseStudyMEP;
