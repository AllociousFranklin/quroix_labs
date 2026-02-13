"use client";
import React, { Suspense, useEffect, useRef } from "react";
import { ReactLenis } from 'lenis/react'
import "./contact.css";
import { SectionFooter } from "../Main/SectionFooter";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import dynamic from "next/dynamic";

gsap.registerPlugin(SplitText, ScrollTrigger);

// Dynamically import the 3D Globe (no SSR for Three.js)
const ContactGlobe = dynamic(() => import("./Globe"), {
  ssr: false,
  loading: () => null,
});

export const ContactPageSection = () => {

  const titleRef = useRef()
  const lineRef = useRef()
  const contactItem1 = useRef()
  const contactItem2 = useRef()
  const contactItem3 = useRef()
  const contactItem4 = useRef()
  const globeWrapperRef = useRef()

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
                    <img src="/images/mockup4.webp" className="contact-content-top-item-image" alt="Quroix Labs team member profile" />
                  </div>
                  <div className="contact-content-top-item-text">
                    <p className="description white" >Ready to build something that drives real results? Reach out directly to discuss your project and get a clear path forward.</p>
                  </div>
                </div>

                {/* Videocall card */}
                <div className="contact-content-item opacity-blur" ref={contactItem2} >
                  <p className="contact-item-label" >Videocall</p>
                  <p className="description white" >Schedule a 30-Minute Strategy Call</p>
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
            <div className="contact-content-right opacity-blur" ref={globeWrapperRef} >
              <Suspense fallback={null}>
                <ContactGlobe />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
      <SectionFooter />
    </ReactLenis>
  );
};
