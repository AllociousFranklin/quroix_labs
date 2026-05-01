"use client";

import Image from "next/image";
import { ReactLenis, useLenis } from 'lenis/react'
import { SectionHero } from "./SectionHero";
import dynamic from 'next/dynamic';

const SectionFooter = dynamic(() => import("./SectionFooter").then((mod) => mod.SectionFooter));
const SectionTestimonials = dynamic(() => import("./SectionTestimonials").then((mod) => mod.SectionTestimonials));
const SectionTechstack = dynamic(() => import("./SectionTechstack").then((mod) => mod.SectionTechstack));
const SectionFlower = dynamic(() => import("./SectionFlower").then((mod) => mod.SectionFlower), { ssr: false });
const SectionServices = dynamic(() => import("./SectionServices").then((mod) => mod.SectionServices));
const SectionProjects = dynamic(() => import("./SectionProjects").then((mod) => mod.SectionProjects));
const SectionProjectsMobile = dynamic(() => import("./SectionProjectsMobile").then((mod) => mod.SectionProjectsMobile));
const SectionKPI = dynamic(() => import("./SectionKPI").then((mod) => mod.SectionKPI));

import "./main.css";
import { useEffect, useLayoutEffect, useState } from 'react';
import { useProgress } from "@react-three/drei";

const Main = () => {

  const { progress } = useProgress();
  const [fadeOut, setFadeOut] = useState(false);
  const lenis = useLenis();

  const dismissLoader = () => {
    const loader = document.getElementById('global-loader');
    if (loader && loader.style.display !== 'none') {
      loader.style.opacity = '0';
      setTimeout(() => { loader.style.display = 'none'; }, 500);
    }
    window.__loaderDismissed = true;
  };

  useLayoutEffect(() => {
    if (progress === 100) {
      dismissLoader();
      lenis?.start();
    }
  }, [progress, lenis]);

  useEffect(() => {
    // If inline script already dismissed it, just start lenis
    if (window.__loaderDismissed) {
      lenis?.start();
      return;
    }
    const timer = setTimeout(() => {
      dismissLoader();
      lenis?.start();
    }, 3500);
    return () => clearTimeout(timer);
  }, [lenis]);

  return (
    <ReactLenis root>
      <SectionHero />

      <div className="border-padding">
        <div className="section-border"></div>
      </div>
      <SectionServices />
      <div className="normal-padding" />
      <SectionProjects />
      <SectionProjectsMobile />
      <div className="normal-padding" />
      <SectionTechstack />
      <div className="normal-padding" />
      <SectionTestimonials />
      <div className="normal-padding" />
      <SectionKPI />
      <div className="normal-padding" />
      <SectionFlower />
      <div className="normal-padding" />
      <SectionFooter />
    </ReactLenis>
  );
};

export default Main;
