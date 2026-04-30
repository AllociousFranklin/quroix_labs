"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { ReactLenis } from 'lenis/react'
import "./works.css";
import { PrevButton, NextButton, usePrevNextButtons } from "../Main/Carousel/EmblaCarouselArrowButtons"
import useEmblaCarousel from "embla-carousel-react"
import { ArrowUpRight, Zap } from "lucide-react";
import { SectionFooter } from "../Main/SectionFooter";
import { usePathname, useRouter } from 'next/navigation';
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const WorksPageSection = () => {

  // ANIMATIONS
  const titleRef = useRef()
  const subtitleRef1 = useRef()
  const subtitleRef2 = useRef()
  const descriptionRef = useRef()
  const subdescriptionRef1 = useRef()
  const subdescriptionRef2 = useRef()
  const lineRef = useRef()
  const carouselWrapperRef = useRef()
  const worksItemRef1 = useRef()
  const worksItemRef2 = useRef()
  const worksItemRef3 = useRef()
  const industryImageRef1 = useRef()
  const industryImageRef2 = useRef()
  const industryImageRef3 = useRef()
  const industryImageRef4 = useRef()
  const subheadlineBoxRef1 = useRef()
  const subheadlineBoxRef2 = useRef()
  const cursor = useRef()
  const [showCursor, setShowCursor] = useState(false)

  useEffect(() => {

    // headline text animation
    const titleSplit = new SplitText(titleRef.current, { type: "chars" });
    gsap.fromTo(titleSplit.chars, { 'will-change': 'opacity, transform', filter: 'blur(8px)', opacity: 0, yPercent: 50 }, { delay: 0.2, opacity: 1, filter: 'blur(0px)', yPercent: 0, stagger: 0.02, duration: 0.75, ease: "power1" });

    // description text animation
    gsap.to(descriptionRef.current, { opacity: 1, filter: 'blur(0px)', duration: 1, delay: 0.6 })

    // line animation
    gsap.fromTo(lineRef.current, { opacity: 0, filter: 'blur(8px)' }, { opacity: 1, filter: 'blur(0px)', duration: 0.5, delay: 0.5 })

    // work carousel items animation
    gsap.to(worksItemRef1.current, { delay: 0.4, opacity: 0, duration: 1, ease: 'power1' });

    // industry images
    gsap.fromTo(industryImageRef1.current, { width: 0 }, { width: "100%", scrollTrigger: { trigger: industryImageRef1.current, start: "top bottom", end: "center center", scrub: true } });
    gsap.fromTo(industryImageRef2.current, { width: 0 }, { width: "100%", scrollTrigger: { trigger: industryImageRef2.current, start: "top bottom", end: "center center", scrub: true } });
    gsap.fromTo(industryImageRef3.current, { width: 0 }, { width: "100%", scrollTrigger: { trigger: industryImageRef3.current, start: "top bottom", end: "center center", scrub: true } });
    gsap.fromTo(industryImageRef4.current, { width: 0 }, { width: "100%", scrollTrigger: { trigger: industryImageRef4.current, start: "top bottom", end: "center center", scrub: true } });

    // case studies wrapper animation
    gsap.to(carouselWrapperRef.current, { opacity: 1, filter: 'blur(0px)', duration: 1, ease: 'power1', scrollTrigger: { trigger: carouselWrapperRef.current, start: "top 95%" } });

    // subheadline box animation
    gsap.to(subheadlineBoxRef1.current, { opacity: 1, filter: 'blur(0px)', duration: 0.5, ease: 'power1', scrollTrigger: { trigger: subheadlineBoxRef1.current, start: "top 95%" } });
    gsap.to(subheadlineBoxRef2.current, { opacity: 1, filter: 'blur(0px)', duration: 0.5, ease: 'power1', scrollTrigger: { trigger: subheadlineBoxRef2.current, start: "top 95%" } });

    // subtitle text animation
    const subtitleSplit1 = new SplitText(subtitleRef1.current, { type: "words" });
    const subtitleSplit2 = new SplitText(subtitleRef2.current, { type: "words" });
    gsap.fromTo(subtitleSplit1.words, { 'will-change': 'opacity, transform', filter: 'blur(8px)', opacity: 0, yPercent: 50 }, { opacity: 1, filter: 'blur(0px)', yPercent: 0, stagger: 0.05, duration: 0.75, ease: "power2", scrollTrigger: { trigger: subtitleRef1.current, start: "top 95%" } });
    gsap.fromTo(subtitleSplit2.words, { 'will-change': 'opacity, transform', filter: 'blur(8px)', opacity: 0, yPercent: 50 }, { opacity: 1, filter: 'blur(0px)', yPercent: 0, stagger: 0.05, duration: 0.75, ease: "power2", scrollTrigger: { trigger: subtitleRef2.current, start: "top 95%" } });

    // description text animation
    const subdescriptionSplit1 = new SplitText(subdescriptionRef1.current, { type: "words" });
    const subdescriptionSplit2 = new SplitText(subdescriptionRef2.current, { type: "words" });
    gsap.fromTo(subdescriptionSplit1.words, { filter: 'blur(8px)', opacity: 0 }, { opacity: 1, filter: 'blur(0px)', stagger: 0.025, ease: 'sine', scrollTrigger: { trigger: subdescriptionRef1.current, start: "top 95%" } });
    gsap.fromTo(subdescriptionSplit2.words, { filter: 'blur(8px)', opacity: 0 }, { opacity: 1, filter: 'blur(0px)', stagger: 0.025, ease: 'sine', scrollTrigger: { trigger: subdescriptionRef2.current, start: "top 95%" } });

  }, [])

  // FOLLOWING CURSOR
  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    const speed = 0.05;

    const handleMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const animate = () => {
      const distX = mouseX - cursorX;
      const distY = mouseY - cursorY;

      cursorX += distX * speed;
      cursorY += distY * speed;

      if (cursor.current) {
        cursor.current.style.left = `${cursorX}px`;
        cursor.current.style.top = `${cursorY}px`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (showCursor) {
      gsap.to(cursor.current, {
        autoAlpha: 1,
        scale: 1,
        duration: 0.3,
        ease: 'power3.out',
      });
    } else {
      gsap.to(cursor.current, {
        autoAlpha: 0,
        scale: 0,
        duration: 0.3,
        ease: 'power3.in',
      });
    }
  }, [showCursor]);

  const handleMouseEnter = () => {
    setShowCursor(true);
  };

  const handleMouseLeave = () => {
    setShowCursor(false);
  };

  // EMBLA CAROUSEL
  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true });
  const [emblaRef2, emblaApi2] = useEmblaCarousel({ dragFree: true });

  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollProgress2, setScrollProgress2] = useState(0);

  const {
    prevBtnDisabled: prevBtnDisabled1,
    nextBtnDisabled: nextBtnDisabled1,
    onPrevButtonClick: onPrevButtonClick1,
    onNextButtonClick: onNextButtonClick1,
  } = usePrevNextButtons(emblaApi);

  const {
    prevBtnDisabled: prevBtnDisabled2,
    nextBtnDisabled: nextBtnDisabled2,
    onPrevButtonClick: onPrevButtonClick2,
    onNextButtonClick: onNextButtonClick2,
  } = usePrevNextButtons(emblaApi2);

  const onScroll = useCallback((emblaApi, setProgress) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setProgress(progress * 100);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    const handleScroll = () => onScroll(emblaApi, setScrollProgress);
    handleScroll();
    emblaApi.on("reInit", handleScroll).on("scroll", handleScroll).on("slideFocus", handleScroll);

    return () => emblaApi.off("reInit", handleScroll).off("scroll", handleScroll).off("slideFocus", handleScroll);
  }, [emblaApi, onScroll]);

  useEffect(() => {
    if (!emblaApi2) return;

    const handleScroll = () => onScroll(emblaApi2, setScrollProgress2);
    handleScroll();
    emblaApi2.on("reInit", handleScroll).on("scroll", handleScroll).on("slideFocus", handleScroll);

    return () => emblaApi2.off("reInit", handleScroll).off("scroll", handleScroll).off("slideFocus", handleScroll);
  }, [emblaApi2, onScroll]);

  return (
    <ReactLenis root>
      <section className="works" >
        <div className="works-content" >
          <div className="works-content-top">
            <div className="works-content-top-text">
              <div className="works-content-textbox">
                <div className="titlebox">
                  <div className="subpage-titlebox-gradient" />
                  <h1 className="headline white" ref={titleRef} >Selected Client Projects</h1>
                </div>
                <p className="description grey opacity-blur" ref={descriptionRef} >Engineering intelligence through autonomous agents and intelligent workflows — delivering high-ROI automation for the global enterprise.</p>
              </div>
              <div className="works-content-top-divider" ref={lineRef} />
            </div>
            <div className="works-carousel-wrapper" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
              <div className="works-carousel-wrapper-overlay" ref={worksItemRef1} ></div>
              <div className="works-carousel" ref={emblaRef2} >
                <div className="works-carousel-row">
                  <div className="works-item-padding" />
                  <div className="works-item" >
                    <Link href="/works/casestudy-mep" className="works-item-content" style={{ textDecoration: 'none' }} title="MEP Design Consultants Case Study" aria-label="View MEP Design Consultants case study">
                      <div className="works-item-content-textbox">
                        <h2 className="subheadline white" >MEP DESIGN CONSULTANTS</h2>
                        <div className="works-item-content-textbox-row">
                          <div className="works-item-content-textbox-button">
                            <p className="small-description white" >Intelligent Workflows</p>
                          </div>
                          <div className="works-item-content-textbox-button">
                            <p className="small-description white" >AI Orchestration</p>
                          </div>
                        </div>
                      </div>
                      <Image src="/mockups/trielementdesign.webp" className="works-item-content-image" width={750} height={750} loading="lazy" alt="Deployment of autonomous AI agents and intelligent workflows for MEP Design Consultants utilizing the Quroix Labs FlowPilot engine." />
                    </Link>
                    <div className="works-item-border" />
                  </div>
                  <div className="works-item" >
                    <Link href="/works/casestudy-bim" className="works-item-content" style={{ textDecoration: 'none' }} title="BIM Engineering Studio Case Study" aria-label="View BIM Engineering Studio case study">
                      <div className="works-item-content-textbox">
                        <h2 className="subheadline white" >BIM ENGINEERING STUDIO</h2>
                        <div className="works-item-content-textbox-row">
                          <div className="works-item-content-textbox-button">
                            <p className="small-description white" >Enterprise AI Architecture</p>
                          </div>
                          <div className="works-item-content-textbox-button">
                            <p className="small-description white" >Agentic Deployment</p>
                          </div>
                        </div>
                      </div>
                      <Image src="/mockups/trielement.webp" className="works-item-content-image" width={750} height={750} loading="lazy" alt="BIM Engineering Studio custom AI automation and intelligent architecture by Quroix Labs FlowPilot engine." />
                    </Link>
                    <div className="works-item-border" />
                  </div>
                  <div className="works-item" >
                    <Link href="/works/casestudy-smma" className="works-item-content" style={{ textDecoration: 'none' }} title="SMMA Agency Case Study" aria-label="View SMMA Agency case study">
                      <div className="works-item-content-textbox">
                        <h2 className="subheadline white" >SMMA AGENCY</h2>
                        <div className="works-item-content-textbox-row">
                          <div className="works-item-content-textbox-button">
                            <p className="small-description white" >Conversion Automation</p>
                          </div>
                          <div className="works-item-content-textbox-button">
                            <p className="small-description white" >Growth Intelligence</p>
                          </div>
                        </div>
                      </div>
                      <Image src="/mockups/kinimatic.webp" className="works-item-content-image" width={750} height={750} loading="lazy" alt="SMMA Agency AI-driven growth engine and workflow automation by Quroix Labs AgentCore Framework." />
                    </Link>
                    <div className="works-item-border" />
                  </div>
                  <div className="works-item" >
                    <Link href="/works/casestudy-gym" className="works-item-content" style={{ textDecoration: 'none' }} title="Apex Gym Case Study" aria-label="View Apex Gym case study">
                      <div className="works-item-content-textbox">
                        <h2 className="subheadline white" >APEX GYM</h2>
                        <div className="works-item-content-textbox-row">
                          <div className="works-item-content-textbox-button">
                            <p className="small-description white" >Membership Intelligence</p>
                          </div>
                          <div className="works-item-content-textbox-button">
                            <p className="small-description white" >Retention Systems</p>
                          </div>
                        </div>
                      </div>
                      <Image src="/mockups/heave.webp" className="works-item-content-image" width={750} height={750} loading="lazy" alt="Apex Gym custom membership portal and automated retention workflows by Quroix Labs." />
                    </Link>
                    <div className="works-item-border" />
                  </div>
                  <div className="works-item" >
                    <Link href="https://tanishartist.in/" target="_blank" rel="noopener noreferrer" className="works-item-content" style={{ textDecoration: 'none' }}>
                      <div className="works-item-content-textbox">
                        <h2 className="subheadline white" >ARTIST PORTFOLIO</h2>
                        <div className="works-item-content-textbox-row">
                          <div className="works-item-content-textbox-button">
                            <p className="small-description white" >Intelligent Systems</p>
                          </div>
                          <div className="works-item-content-textbox-button">
                            <p className="small-description white" >Branding</p>
                          </div>
                        </div>
                      </div>
                      <Image src="/mockups/essentia.webp" className="works-item-content-image" width={750} height={750} loading="lazy" alt="Artist portfolio website by Quroix Labs" />
                    </Link>
                    <div className="works-item-border" />
                  </div>
                  <div className="works-item" >
                    <Link href="https://studio-vogue.vercel.app/" target="_blank" rel="noopener noreferrer" className="works-item-content" style={{ textDecoration: 'none' }}>
                      <div className="works-item-content-textbox">
                        <h2 className="subheadline white" >AURA the Luxury Salon</h2>
                        <div className="works-item-content-textbox-row">
                          <div className="works-item-content-textbox-button">
                            <p className="small-description white" >AI Orchestration</p>
                          </div>
                          <div className="works-item-content-textbox-button">
                            <p className="small-description white" >Branding</p>
                          </div>
                        </div>
                      </div>
                      <Image src="/mockups/vitalenta.webp" className="works-item-content-image" width={750} height={750} loading="lazy" alt="Aura luxury salon website by Quroix Labs" />
                    </Link>
                    <div className="works-item-border" />
                  </div>
                  <div className="works-item" >
                    <Link href="https://sribalajienterprises-xi.vercel.app/" target="_blank" rel="noopener noreferrer" className="works-item-content" style={{ textDecoration: 'none' }}>
                      <div className="works-item-content-textbox">
                        <h2 className="subheadline white" >WholeSale Product Catalogue</h2>
                        <div className="works-item-content-textbox-row">
                          <div className="works-item-content-textbox-button">
                            <p className="small-description white" >Automated Catalogue</p>
                          </div>
                          <div className="works-item-content-textbox-button">
                            <p className="small-description white" >Branding</p>
                          </div>
                        </div>
                      </div>
                      <Image src="/mockups/peak.webp" className="works-item-content-image" width={750} height={750} loading="lazy" alt="Wholesale product catalogue by Quroix Labs" />
                    </Link>
                    <div className="works-item-border" />
                  </div>
                  <div className="works-item" >
                    <Link href="https://brimclocks.com/" target="_blank" rel="noopener noreferrer" className="works-item-content" style={{ textDecoration: 'none' }}>
                      <div className="works-item-content-textbox">
                        <h2 className="subheadline white" >BRIM Clocks</h2>
                        <div className="works-item-content-textbox-row">
                          <div className="works-item-content-textbox-button">
                            <p className="small-description white" >E-Commerce Intelligence</p>
                          </div>
                          <div className="works-item-content-textbox-button">
                            <p className="small-description white" >Branding</p>
                          </div>
                        </div>
                      </div>
                      <Image src="/mockups/rev.webp" className="works-item-content-image" width={750} height={750} loading="lazy" alt="BRIM Clocks e-commerce website by Quroix Labs" />
                    </Link>
                    <div className="works-item-border" />
                  </div>
                  <div className="works-item" >
                    <div className="works-item-last-content" >
                      <p className="description white" >Ready to start your project?</p>
                      <h2 className="subheadline white" >Let&apos;s discuss what you need</h2>
                      <div className="contact-button-wrapper">
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
                    <div className="works-item-border" />
                  </div>
                  <div className="works-item-padding" />
                </div>
              </div>
              <div className="casestudies-carousel-bottom">
                <div className="casestudies-carousel-bottom-buttons">
                  <PrevButton onClick={onPrevButtonClick2} disabled={prevBtnDisabled2} />
                  <NextButton onClick={onNextButtonClick2} disabled={nextBtnDisabled2} />
                </div>
                <div className="embla__progress">
                  <div className="embla__progress__bar" style={{ transform: `translate3d(${scrollProgress2}%,0px,0px)` }} />
                </div>
              </div>
            </div>
          </div>
          <div className="works-industries">
            <div className="works-subtextbox">
              <div className="subheadline-box opacity-blur" ref={subheadlineBoxRef1} >
                <Zap className="subheadline-box-icon" />
                <h2 className="small-description grey" >Industries we serve</h2>
              </div>
              <div className="titlebox">
                <div className="titlebox-medium-gradient" />
                <h2 className="subheadline white" ref={subtitleRef1} >Expertise Across <br /> Multiple Industries</h2>
              </div>
              <p className="description grey" ref={subdescriptionRef1} >Engineering cognitive infrastructure — we deploy autonomous agents, RAG pipelines, and intelligent systems for high-growth enterprises.</p>
            </div>
            <div className="works-industries-container">
              <div className="works-industries-divider" />
              <div className="works-industries-item" >
                <div className="works-industries-item-left">
                  <h2 className="small-subheadline white" >E-Commerce Platforms</h2>
                </div>
                <div className="works-industries-item-right">
                  <div className="works-industries-item-right-imagebox" ref={industryImageRef1} >
                    <img src="/images/test14.webp" className="works-industries-item-right-image" alt="E-commerce platform development by Quroix Labs" />
                  </div>
                </div>
              </div>
              <div className="works-industries-divider" />
              <div className="works-industries-item">
                <div className="works-industries-item-left">
                  <h2 className="small-subheadline white" >Luxury Gyms and Clinics</h2>
                </div>
                <div className="works-industries-item-right">
                  <div className="works-industries-item-right-imagebox" ref={industryImageRef2} >
                    <img src="/images/test17.webp" className="works-industries-item-right-image" alt="Luxury gym and clinic website by Quroix Labs" />
                  </div>
                </div>
              </div>
              <div className="works-industries-divider" />
              <div className="works-industries-item">
                <div className="works-industries-item-left">
                  <h2 className="small-subheadline white" >Creative & Artistic Portfolios</h2>
                </div>
                <div className="works-industries-item-right">
                  <div className="works-industries-item-right-imagebox" ref={industryImageRef3} >
                    <img src="/images/test18.webp" className="works-industries-item-right-image" alt="Creative artist portfolio by Quroix Labs" />
                  </div>
                </div>
              </div>
              <div className="works-industries-divider" />
              <div className="works-industries-item">
                <div className="works-industries-item-left">
                  <h2 className="small-subheadline white" >Modern AI Agencies</h2>
                </div>
                <div className="works-industries-item-right">
                  <div className="works-industries-item-right-imagebox" ref={industryImageRef4} >
                    <img src="/images/test19.webp" className="works-industries-item-right-image" alt="Autonomous agent orchestration and multi-agent systems deployment by Quroix Labs." />
                  </div>
                </div>
              </div>
              <div className="works-industries-divider" />
            </div>
          </div>
          <div className="works-casestudies">
            <div className="works-subtextbox">
              <div className="subheadline-box opacity-blur" ref={subheadlineBoxRef2} >
                <Zap className="subheadline-box-icon" />
                <h2 className="small-description grey" >Case Studies</h2>
              </div>
              <div className="titlebox">
                <div className="titlebox-medium-gradient" />
                <h2 className="subheadline white" ref={subtitleRef2} >In-Depth Project <br /> Case Studies</h2>
              </div>
              <p className="description grey" ref={subdescriptionRef2} >Real challenges, practical solutions, and measurable outcomes from client projects we&apos;ve delivered.</p>
            </div>
            <div className="casestudies-carousel-wrapper opacity-blur" ref={carouselWrapperRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
              <div className="casestudies-carousel" ref={emblaRef} >
                <div className="casestudies-carousel-row">
                  <div className="casestudies-item-padding" />
                  <div className="casestudies-item" >
                    <Link href="/works/casestudy-mep" className="casestudies-item-content" style={{ textDecoration: 'none' }}>
                      <div className="casestudies-item-content-textbox">
                        <div className="subheadline-box" >
                          <Zap className="subheadline-box-icon" />
                          <h2 className="small-description grey" >AI Automation</h2>
                        </div>
                        <h3 className="small-subheadline white" >MEP Design Consultants</h3>
                        <p className="description grey" >Engineering Intelligence: Deploying autonomous agents for global MEP consultants using the FlowPilot engine.</p>
                      </div>
                      <div className="casestudies-item-content-imagebox" >
                        <div className="button casestudies-item-content-imagebox-button" >
                          <div className="button-content">
                            <span className="small-description white">Read More</span>
                            <span className="small-description white">Read More</span>
                          </div>
                          <ArrowUpRight className="casestudies-item-content-imagebox-button-icon" />
                        </div>
                        <img src="/mockups/trielementdesign.webp" className="casestudies-item-content-image" alt="MEP Design Consultants Case Study" />
                      </div>
                    </Link>
                  </div>
                  <div className="casestudies-item" >
                    <Link href="/works/casestudy-bim" className="casestudies-item-content" style={{ textDecoration: 'none' }}>
                      <div className="casestudies-item-content-textbox">
                        <div className="subheadline-box" >
                          <Zap className="subheadline-box-icon" />
                          <h2 className="small-description grey" >Intelligent Architecture</h2>
                        </div>
                        <h3 className="small-subheadline white" >BIM Engineering Studio</h3>
                        <p className="description grey" >Visualizing Complexity: Scaling technical precision with custom RAG pipelines and AgentCore Framework.</p>
                      </div>
                      <div className="casestudies-item-content-imagebox" >
                        <div className="button casestudies-item-content-imagebox-button">
                          <div className="button-content">
                            <span className="small-description white">Read More</span>
                            <span className="small-description white">Read More</span>
                          </div>
                          <ArrowUpRight className="casestudies-item-content-imagebox-button-icon" />
                        </div>
                        <img src="/mockups/trielement.webp" className="casestudies-item-content-image" alt="BIM Engineering Case Study" />
                      </div>
                    </Link>
                  </div>
                  <div className="casestudies-item" >
                    <Link href="/works/casestudy-smma" className="casestudies-item-content" style={{ textDecoration: 'none' }}>
                      <div className="casestudies-item-content-textbox">
                        <div className="subheadline-box" >
                          <Zap className="subheadline-box-icon" />
                          <h2 className="small-description grey" >Scale & Automate</h2>
                        </div>
                        <h3 className="small-subheadline white" >SMMA Agency</h3>
                        <p className="description grey" >Growth Engine: Optimizing onboarding and conversion for a high-volume creative agency.</p>
                      </div>
                      <div className="casestudies-item-content-imagebox" >
                        <div className="button casestudies-item-content-imagebox-button">
                          <div className="button-content">
                            <span className="small-description white">Read More</span>
                            <span className="small-description white">Read More</span>
                          </div>
                          <ArrowUpRight className="casestudies-item-content-imagebox-button-icon" />
                        </div>
                        <img src="/mockups/kinimatic.webp" className="casestudies-item-content-image" alt="SMMA Agency Case Study" />
                      </div>
                    </Link>
                  </div>
                  <div className="casestudies-item" >
                    <Link href="/works/casestudy-gym" className="casestudies-item-content" style={{ textDecoration: 'none' }}>
                      <div className="casestudies-item-content-textbox">
                        <div className="subheadline-box" >
                          <Zap className="subheadline-box-icon" />
                          <h2 className="small-description grey" >Full Brand Hub</h2>
                        </div>
                        <h3 className="small-subheadline white" >Apex Gym</h3>
                        <p className="description grey" >Vibrant Performance: A high-energy digital experience for a modern fitness community.</p>
                      </div>
                      <div className="casestudies-item-content-imagebox" >
                        <div className="button casestudies-item-content-imagebox-button">
                          <div className="button-content">
                            <span className="small-description white">Read More</span>
                            <span className="small-description white">Read More</span>
                          </div>
                          <ArrowUpRight className="casestudies-item-content-imagebox-button-icon" />
                        </div>
                        <img src="/mockups/heave.webp" className="casestudies-item-content-image" alt="Apex Gym Case Study" />
                      </div>
                    </Link>
                  </div>
                  <div className="casestudies-item-padding" />
                </div>
              </div>
              <div className="casestudies-carousel-bottom">
                <div className="casestudies-carousel-bottom-buttons">
                  <PrevButton onClick={onPrevButtonClick1} disabled={prevBtnDisabled1} />
                  <NextButton onClick={onNextButtonClick1} disabled={nextBtnDisabled1} />
                </div>
                <div className="embla__progress">
                  <div className="embla__progress__bar" style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hover-cursor" ref={cursor}>
          <p className="small-description white" >Drag</p>
        </div>

      </section>
      <SectionFooter />
    </ReactLenis>
  );
};