import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const SectionFooter = () => {

  const topRef1 = useRef();
  const topRef2 = useRef();
  const topRef3 = useRef();
  const centerRef1 = useRef();
  const bottomRef1 = useRef();
  const bottomRef2 = useRef();

  useEffect(() => {
    gsap.fromTo(topRef1.current, { filter: 'blur(8px)', opacity: 0 }, { delay: 0, opacity: 1, filter: 'blur(0px)', duration: 0.5, ease: 'sine', scrollTrigger: { trigger: topRef1.current, start: "top 95%" } });
    gsap.fromTo(topRef2.current, { filter: 'blur(8px)', opacity: 0 }, { delay: 0.2, opacity: 1, filter: 'blur(0px)', duration: 0.5, ease: 'sine', scrollTrigger: { trigger: topRef1.current, start: "top 95%" } });
    gsap.fromTo(topRef3.current, { filter: 'blur(8px)', opacity: 0 }, { delay: 0.4, opacity: 1, filter: 'blur(0px)', duration: 0.5, ease: 'sine', scrollTrigger: { trigger: topRef1.current, start: "top 95%" } });
    gsap.fromTo(centerRef1.current, { filter: 'blur(8px)', opacity: 0 }, { delay: 0, opacity: 1, filter: 'blur(0px)', duration: 0.5, ease: 'sine', scrollTrigger: { trigger: centerRef1.current, start: "top 95%" } });
    gsap.fromTo(bottomRef1.current, { filter: 'blur(8px)', opacity: 0 }, { delay: 0, opacity: 1, filter: 'blur(0px)', duration: 0.5, ease: 'sine', scrollTrigger: { trigger: bottomRef1.current, start: "top 95%" } });
    gsap.fromTo(bottomRef2.current, { filter: 'blur(8px)', opacity: 0 }, { delay: 0.2, opacity: 1, filter: 'blur(0px)', duration: 0.5, ease: 'sine', scrollTrigger: { trigger: bottomRef2.current, start: "top 95%" } });
  }, [])

  return (
    <footer className="footer" role="contentinfo">
      <Marquee className="footer-marquee" gradient={true} gradientColor="#010101" gradientWidth={100} speed={40}>
        <div className="footer-marquee-item">Next.js Development</div>
        <div className="footer-marquee-item">React Applications</div>
        <div className="footer-marquee-item">Process Automation</div>
        <div className="footer-marquee-item">Custom Software</div>
        <div className="footer-marquee-item">Three.js Experiences</div>
        <div className="footer-marquee-item">API Integrations</div>
        <div className="footer-marquee-item">Business Intelligence</div>
        <div className="footer-marquee-item">Scalable Systems</div>
      </Marquee>
      <div className="footer-content">
        <div className="footer-content-left" ref={topRef1} >
          <Image src="/images/quroix_logo.svg" className="footer-logo" alt="Quroix Labs Logo" width={80} height={80} priority />
          <h2 className="subheadline white" >Quroixlabs</h2>
          <p className="description grey"  >Engineering intelligence for the real world. Websites, automations, and software built to scale with your business.</p>
        </div>
        <div className="footer-content-right" ref={topRef2} >
          <div className="footer-content-right-column">
            <h3 className="description white" >Company</h3>
            <nav className="footer-column-contents" aria-label="Footer navigation">
              <div className="footer-column-contents-item">
                <Link href="/" className="description grey hover-text-grey link">Home</Link>
              </div>
              <div className="footer-column-contents-item">
                <Link href="/about" className="description grey hover-text-grey link">About</Link>
              </div>
              <div className="footer-column-contents-item">
                <Link href="/works" className="description grey hover-text-grey link">Projects</Link>
              </div>
              <div className="footer-column-contents-item">
                <Link href="/contact" className="description grey hover-text-grey link">Get In Touch</Link>
              </div>
            </nav>
          </div>
          <div className="footer-content-right-column" ref={topRef3} >
            <h3 className="description white" >Legal</h3>
            <div className="footer-column-contents">
              <div className="footer-column-contents-item">
                <p className="description grey hover-text-grey" >Terms of Service</p>
              </div>
              <div className="footer-column-contents-item">
                <p className="description grey hover-text-grey" >Privacy Policy</p>
              </div>
              <div className="footer-column-contents-item">
                <p className="description grey hover-text-grey" >Cookie Policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-divider" ref={centerRef1} />
      <div className="footer-content-bottom">
        <p className="small-description grey" ref={bottomRef1} >© 2026 Quroixlabs All Rights Reserved</p>
        <div className="footer-socials" ref={bottomRef2} >
          <a href="https://instagram.com/quroixlabs" target="_blank" rel="noopener noreferrer" aria-label="Follow Quroix Labs on Instagram">
            <Instagram strokeWidth={1.25} className="footer-socials-icon" />
          </a>
          <a href="https://x.com/quroixlabs" target="_blank" rel="noopener noreferrer" aria-label="Follow Quroix Labs on X (Twitter)">
            <Twitter strokeWidth={1.25} className="footer-socials-icon" />
          </a>
          <a href="https://linkedin.com/company/quroixlabs" target="_blank" rel="noopener noreferrer" aria-label="Follow Quroix Labs on LinkedIn">
            <Linkedin strokeWidth={1.25} className="footer-socials-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};