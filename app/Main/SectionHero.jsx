"use client";
/* eslint-disable react/jsx-key */
import React, { Suspense, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";
import { ArrowUpRight } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, OrbitControls } from "@react-three/drei";
import Image from "next/image";
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { InteractiveGrid } from "./InteractiveGrid";

const Item3Dynamic = dynamic(() => import("./HeroModel/Coins").then((mod) => mod.Item3), { ssr: false });

gsap.registerPlugin(SplitText, ScrollTrigger);

export const SectionHero = () => {

  // REFS 
  const titleRef = useRef()
  const descriptionRef = useRef()
  const buttonRef1 = useRef()
  const buttonCircleRef1 = useRef()
  const buttonRef2 = useRef()
  const logosWrapperRef = useRef()
  const cursor = useRef()
  const [showCursor, setShowCursor] = useState(false)
  const mouseRef = useRef({ x: 0, y: 0 });

  // TRACK MOUSE GLOBALLY FOR BACKGROUND GRID
  useEffect(() => {
    const handleMouseMove = (event) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // GSAP ANIMATIONS
  useEffect(() => {

    gsap.fromTo(titleRef.current, { 'will-change': 'opacity, transform', filter: 'blur(8px)', opacity: 0, yPercent: 50 }, { delay: 0.4, opacity: 1, filter: 'blur(0px)', yPercent: 0, duration: 0.75, ease: "power1" });

    gsap.fromTo(descriptionRef.current, { opacity: 0, filter: 'blur(8px)' }, { opacity: 1, filter: 'blur(0px)', duration: 1, delay: 0.9 })

    // buttons animation
    gsap.fromTo(buttonRef1.current, { opacity: 0, filter: 'blur(8px)' }, { delay: 1.1, opacity: 1, filter: 'blur(0px)', duration: 0.5, ease: "power1" })
    gsap.fromTo(buttonRef2.current, { opacity: 0, filter: 'blur(8px)' }, { delay: 1.4, opacity: 1, filter: 'blur(0px)', duration: 0.5, ease: "power1" })

    // logos wrapper animation
    gsap.fromTo(logosWrapperRef.current, { opacity: 0, filter: 'blur(8px)' }, { opacity: 1, filter: 'blur(0px)', duration: 1, delay: 0.9 })

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

  // 3D loads immediately so useProgress can track it for the loading screen

  return (
    <section className="hero" style={{ overflow: "hidden" }}>
      <div className="hero-background-element-small" />
      <div className="hero-background-element-grid-small" />
      
      {/* Unified 3D WebGL Scene containing background grid & right-side float model */}
      <div className="hero-background-interactive-canvas-wrapper" style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'auto', opacity: 0.85, overflow: 'hidden' }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Canvas dpr={[1, 1.5]} gl={{ powerPreference: "high-performance", antialias: true }} style={{ width: '100%', height: '100%' }} camera={{ position: [0, 0, 10], fov: 35 }}>
          <Suspense fallback={null}>
            {/* Waving Background Grid */}
            <InteractiveGrid mouseRef={mouseRef} />

            {/* Floating Coins model positioned on the right */}
            <Float rotationIntensity={0.5} floatIntensity={2} speed={2}>
              <group position={[2.5, -0.25, 0]}>
                <Item3Dynamic />
              </group>
            </Float>

            <ambientLight intensity={1.2} />
            <directionalLight position={[10, 10, 5]} intensity={2} />
            <directionalLight position={[-10, -10, -5]} intensity={1} />
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} enableRotate={true} enablePan={false} />
          </Suspense>
        </Canvas>
      </div>

      <div className="hero-content" style={{ position: 'relative', zIndex: 2, pointerEvents: 'none' }}>
        <div className="hero-content-row">
          <div className="hero-content-left">
            <div className="hero-textbox">
              <div className="hero-titlebox">
                <div className="hero-titlebox-gradient" />
                <h1 className="headline hero-headline white" ref={titleRef}>Engineering Technology <br /> That Moves Business <br /> Forward</h1>
              </div>
              <p className="big-description grey" ref={descriptionRef} >Architecting autonomous AI agents, intelligent workflows, and custom software designed to reduce friction and increase operational clarity.</p>
            </div>
            <div className="hero-buttons-row" style={{ pointerEvents: 'auto' }}>
              <Link href="/contact" className="button button-transparent-border link" ref={buttonRef1} >
                <div className="button-content">
                  <span className="small-description">Get In Touch</span>
                  <span className="small-description">Get In Touch</span>
                </div>
                <div className="button-circle" ref={buttonCircleRef1} >
                  <ArrowUpRight className="button-icon" />
                </div>
              </Link>
              <Link href="/works" className="button button-transparent-border link" ref={buttonRef2} >
                <div className="button-content">
                  <span className="small-description">View Work</span>
                  <span className="small-description">View Work</span>
                </div>
                <div className="button-circle">
                  <ArrowUpRight className="button-icon" />
                </div>
              </Link>
            </div>
          </div>
          {/* Spacer column maintaining grid alignment */}
          <div className="hero-content-right" />
        </div>
        <div className="hero-content-bottom" ref={logosWrapperRef} style={{ pointerEvents: 'auto' }}>
          <Marquee className="hero-content-bottom-row" gradient={true} gradientColor="#010101" gradientWidth={250}>
            {[
              { src: "/logos/adobe.webp", alt: "Adobe" },
              { src: "/logos/webflow.svg", alt: "Webflow" },
              { src: "/logos/stripe.svg", alt: "Stripe" },
              { src: "/logos/adobe.webp", alt: "Adobe" },
              { src: "/logos/webflow.svg", alt: "Webflow" },
              { src: "/logos/stripe.svg", alt: "Stripe" },
              { src: "/logos/adobe.webp", alt: "Adobe" },
              { src: "/logos/webflow.svg", alt: "Webflow" },
              { src: "/logos/stripe.svg", alt: "Stripe" },
              { src: "/logos/adobe.webp", alt: "Adobe" },
              { src: "/logos/webflow.svg", alt: "Webflow" },
              { src: "/logos/stripe.svg", alt: "Stripe" },
              { src: "/logos/adobe.webp", alt: "Adobe" },
              { src: "/logos/webflow.svg", alt: "Webflow" },
              { src: "/logos/stripe.svg", alt: "Stripe" },
              { src: "/logos/adobe.webp", alt: "Adobe" },
              { src: "/logos/webflow.svg", alt: "Webflow" },
              { src: "/logos/stripe.svg", alt: "Stripe" },
            ].map((item, i) => (
              <div className="hero-content-bottom-item" key={i}>
                <Image width={100} height={100} src={item.src} alt={`${item.alt} logo - Quroix Labs technology partner`} className="hero-content-bottom-image" />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
      <div className="hover-cursor" ref={cursor}>
        <p className="small-description white" >Drag</p>
      </div>
    </section>
  );
};