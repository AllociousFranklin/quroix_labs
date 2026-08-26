/* eslint-disable react/jsx-key */
"use client";
import React, { Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import dynamic from 'next/dynamic'
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";
import { Hand, Star } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton, useDotButton } from './Carousel/EmblaCarouselDotButton'
import Fade from 'embla-carousel-fade'
import Image from "next/image";
import Link from 'next/link';

const PROJECTS = [
  { src: "/mockups/trielementdesign.webp", alt: "MEP Design Consultants custom website development by Quroix Labs", href: "https://trielementdesign.com/", external: true },
  { src: "/mockups/trielement.webp", alt: "BIM Engineering Studio custom website design by Quroix Labs", href: "https://www.studiotrielement.com/", external: true },
  { src: "/mockups/kinimatic.webp", alt: "Kinimatic - SMMA Agency Website by Quroix Labs", href: "https://wework4u.services/", external: true },
  { src: "/mockups/heave.webp", alt: "Heave - Apex Gym Website by Quroix Labs", href: "https://flamegym.vercel.app/", external: true },
  { src: "/mockups/essentia.webp", alt: "Essentia - Artist Portfolio Website by Quroix Labs", href: "https://tanishartist.in/", external: true },
  { src: "/mockups/vitalenta.webp", alt: "Vitalenta - Aura Luxury Salon Website by Quroix Labs", href: "https://studio-vogue.vercel.app/", external: true },
  { src: "/mockups/peak.webp", alt: "Peak - Wholesale Product Catalogue by Quroix Labs", href: "https://sribalajienterprises-xi.vercel.app/", external: true },
  { src: "/mockups/rev.webp", alt: "Rev - Brim Clocks E-commerce by Quroix Labs", href: "https://brimclocks.com/", external: true }
];

gsap.registerPlugin(SplitText, ScrollTrigger);

export const SectionProjects = () => {

  const subheadlineBoxRef = useRef()
  const titleRef = useRef()
  const descriptionRef = useRef()
  const contentRef = useRef();
  const imageContainerRef = useRef();
  const cursor = useRef()
  const [showCursor, setShowCursor] = useState(false)

  // GSAP ANIMATIONS

  useEffect(() => {
    // subheadline box animation
    if (subheadlineBoxRef.current) {
      gsap.to(subheadlineBoxRef.current, { opacity: 1, filter: 'blur(0px)', duration: 0.5, ease: 'power1', scrollTrigger: { trigger: subheadlineBoxRef.current, start: "top 95%" } });
    }

    // headline text animation
    if (titleRef.current) {
      const titleSplit = new SplitText(titleRef.current, { type: "words, chars" });
      gsap.fromTo(titleSplit.words, { 'will-change': 'opacity, transform', filter: 'blur(8px)', opacity: 0, yPercent: 50 }, { opacity: 1, filter: 'blur(0px)', yPercent: 0, stagger: 0.05, duration: 0.75, ease: "power2", scrollTrigger: { trigger: titleRef.current, start: "top 95%" } });
    }

    // description text animation
    if (descriptionRef.current) {
      const descriptionSplit = new SplitText(descriptionRef.current, { type: "words, chars" });
      gsap.fromTo(descriptionSplit.words, { filter: 'blur(8px)', opacity: 0 }, { opacity: 1, filter: 'blur(0px)', stagger: 0.025, ease: 'sine', scrollTrigger: { trigger: descriptionRef.current, start: "top 95%" } });
    }

    // image parallax effect
    if (imageContainerRef.current) {
      gsap.fromTo(imageContainerRef.current, { yPercent: 7.5 }, { yPercent: -7.5, scrollTrigger: { trigger: ".projects", start: "top bottom", end: "bottom top", scrub: true } });
    }
  }, [])

  // EMBLA CAROUSEL

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Fade()])

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)


  const handleLinkClick = (e) => {
    if (emblaApi && !emblaApi.clickAllowed()) {
      e.preventDefault();
    }
  };

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

      window.projectsAnimFrame = requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (window.projectsAnimFrame) cancelAnimationFrame(window.projectsAnimFrame);
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


  return (
    <section className="projects projects-desktop">
      <div className="textbox">
        <div className="subheadline-box opacity-blur" ref={subheadlineBoxRef} >
          <Star className="subheadline-box-icon" />
          <h2 className="small-description grey" >Featured Works</h2>
        </div>
        <div className="titlebox">
          <div className="titlebox-big-gradient" />
          <h2 className="subheadline white" ref={titleRef} >Real Projects, <br className="hide-on-mobile" /> Real Business Impact</h2>
        </div>
        <p className="description grey" ref={descriptionRef} >Solutions built for startups and enterprises <br className="hide-on-desktop" /> across multiple industries</p>
      </div>
      <div className="projects-content" ref={contentRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="projects-gradient-top" />
        <div className="projects-gradient-bottom" />
        <div className="project-content-wrapper" ref={imageContainerRef} >
          <div className="projects-carousel" ref={emblaRef} >
            <div className="projects-carousel-row">
              {PROJECTS.map((project, i) => (
                <Link
                  key={i}
                  href={project.href}
                  onClick={handleLinkClick}
                  {...(project.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="projects-carousel-item"
                  style={{ textDecoration: 'none' }}
                >
                  <Image src={project.src} width={1920} height={1080} className="projects-carousel-item-image" alt={project.alt} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw" />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              aria-label={`Go to project slide ${index + 1}`}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
      <div className="hover-cursor" ref={cursor} aria-hidden="true">
        <p className="small-description white" >View</p>
      </div>
    </section>
  );
};