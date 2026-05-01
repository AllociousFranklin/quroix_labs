/* eslint-disable react/jsx-key */
import React, { Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowUpRight, Hand, Plus, X, Zap } from "lucide-react";

gsap.registerPlugin(SplitText, ScrollTrigger, CustomEase);

const customEase = CustomEase.create("customEase", ".4,0,.1,1");

export const SectionServices = () => {
  // video loaded immediately

  const subheadlineBoxRef = useRef()
  const titleRef = useRef()
  const descriptionRef = useRef()
  const buttonRef = useRef()

  useEffect(() => {

    // subheadline box animation
    gsap.to(subheadlineBoxRef.current, { opacity: 1, filter: 'blur(0px)', duration: 0.5, ease: 'power1', scrollTrigger: { trigger: subheadlineBoxRef.current, start: "top 95%" } });

    // headline text animation
    const titleSplit = new SplitText(titleRef.current, { type: "words" });
    gsap.fromTo(titleSplit.words, { 'will-change': 'opacity, transform', filter: 'blur(8px)', opacity: 0, yPercent: 100 }, { opacity: 1, filter: 'blur(0px)', yPercent: 0, stagger: 0.085, duration: 1, ease: "power2", scrollTrigger: { trigger: titleRef.current, start: "top 95%" } });

    // description text animation
    const descriptionSplit = new SplitText(descriptionRef.current, { type: "words" });
    gsap.fromTo(descriptionSplit.words, { filter: 'blur(8px)', opacity: 0, skewX: 0 }, { opacity: 1, filter: 'blur(0px)', skewX: 0, stagger: 0.025, ease: 'sine', scrollTrigger: { trigger: descriptionRef.current, start: "top 95%" } });

    // button animation
    gsap.to(buttonRef.current, { opacity: 1, filter: 'blur(0px)', duration: 0.5, ease: 'power1', scrollTrigger: { trigger: buttonRef.current, start: "top 95%" } });
  }, [])



  const serviceVideoRef = useRef();


  return (
    <section className="services">
      <div className="services-content" >
        <div className="textbox">
          <div className="subheadline-box opacity-blur" ref={subheadlineBoxRef} >
            <Zap className="subheadline-box-icon" />
            <h2 className="small-description grey" >Core Capabilities</h2>
          </div>
          <div className="titlebox">
            <div className="titlebox-gradient" />
            <h2 className="subheadline white" ref={titleRef} >Agentic Infrastructure <br /> That Compounds Growth</h2>
          </div>
          <p className="description grey" ref={descriptionRef} >From initial concept to deployed agent — we build intelligent workflows, automation systems, and custom software <br /> designed to solve real problems and drive measurable growth.</p>
          <div className="contact-button-wrapper opacity-blur" ref={buttonRef} >
            <button className="contact-button-white" >
              <span>
                <span className="contact-button-container-white">
                  <span className="contact-button-primary-white"></span>
                  <span className="contact-button-complimentary-white"></span>
                </span>
              </span>
              <span className="description black" >Book a call</span>
            </button>
          </div>
        </div>
        <div className="services-content-container">
          <div className="services-content-container-left" />
          <div className="services-content-container-right" />
          <div className="services-content-container-bottom" />
          <div className="services-content-container-top" />
          <video src="/videos/serviceshighquality.mp4" className="services-content-video" autoPlay="autoplay" muted playsInline={true} data-wf-ignore="true" preload="none" loop aria-hidden="true" >
            <track kind="captions" srcLang="en" label="English" />
          </video>
        </div>
      </div>
    </section>
  );
};