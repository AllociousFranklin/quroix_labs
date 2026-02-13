"use client";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import { useRouter, usePathname } from 'next/navigation';

export const Navigation = () => {

    // ANIMATIONS

    const navigationBar = useRef()
    const navigationBarCenter = useRef()
    const navigationBarCenterRef1 = useRef()
    const navigationBarCenterRef2 = useRef()
    const navigationBarCenterRef3 = useRef()
    const navigationBarCenterRef4 = useRef()

    useLayoutEffect(() => {
        gsap.to(navigationBar.current, { opacity: 1, rotateY: "0deg", scale: "1", rotateX: "0deg", translateY: "0vh", duration: 0.75, ease: 'power1', delay: 0.75 })
        gsap.fromTo(navigationBar.current, { width: "25%" }, { width: "100%", duration: 0.75, ease: "power1", delay: 1.75 })
        gsap.fromTo(navigationBarCenter.current, { display: "none" }, { display: "flex", duration: 0.01, delay: 1.75 })
        gsap.to(navigationBarCenterRef1.current, { opacity: 1, duration: 1, delay: 1.75 })
        gsap.to(navigationBarCenterRef2.current, { opacity: 1, duration: 1, delay: 1.85 })
        gsap.to(navigationBarCenterRef3.current, { opacity: 1, duration: 1, delay: 1.95 })
        gsap.to(navigationBarCenterRef4.current, { opacity: 1, duration: 1, delay: 2.05 })
    }, [])

    // NAVIGATION

    const router = useRouter();
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const mobileMenuRef = useRef();
    const mobileMenuLinksRef = useRef([]);

    const closeMobileMenu = () => {
        if (isMobileMenuOpen) {
            gsap.to(mobileMenuRef.current, {
                height: "0vh",
                duration: 0.75,
                ease: "power3.inOut",
                onComplete: () => setIsMobileMenuOpen(false)
            });
        }
    };

    const toggleMobileMenu = () => {
        if (!isMobileMenuOpen) {
            setIsMobileMenuOpen(true);
            gsap.to(mobileMenuRef.current, {
                height: "100vh",
                duration: 0.75,
                ease: "power3.inOut"
            });
            gsap.fromTo(mobileMenuLinksRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, delay: 0.3, ease: "power2.out" }
            );
        } else {
            closeMobileMenu();
        }
    };

    const addToRefs = (el) => {
        if (el && !mobileMenuLinksRef.current.includes(el)) {
            mobileMenuLinksRef.current.push(el);
        }
    };

    return (
        <>
            <div className="mobile-menu" ref={mobileMenuRef} role="dialog" aria-label="Mobile navigation menu">
                <nav className="mobile-menu-content" aria-label="Mobile navigation">
                    <Link href="/" className="mobile-menu-link headline link" ref={addToRefs} onClick={closeMobileMenu}>Home</Link>
                    <Link href="/about" className="mobile-menu-link headline link" ref={addToRefs} onClick={closeMobileMenu}>About</Link>
                    <Link href="/works" className="mobile-menu-link headline link" ref={addToRefs} onClick={closeMobileMenu}>Works</Link>
                    <Link href="/contact" className="mobile-menu-link headline link" ref={addToRefs} onClick={closeMobileMenu}>Get In Touch</Link>
                </nav>
            </div>

            <header className="navigation-wrapper">
                <nav className="navigation-inside" ref={navigationBar} aria-label="Main navigation">
                    <div className="navigation-inside-left">
                        <Link href="/" aria-label="Quroix Labs - Home">
                            <img src="/images/quroix_logo.svg" className="navigation-inside-left-image" alt="Quroix Labs Logo" />
                        </Link>
                    </div>
                    <div className="navigation-inside-big" ref={navigationBarCenter} >
                        <Link href="/" className="small-description white hover-text-white opacity link" ref={navigationBarCenterRef1}>Home</Link>
                        <Link href="/about" className="small-description white hover-text-white opacity link" ref={navigationBarCenterRef2}>About</Link>
                        <Link href="/works" className="small-description white hover-text-white opacity link" ref={navigationBarCenterRef3}>Works</Link>
                    </div>
                    <div className="navigation-inside-right">
                        <Link href="/contact" className="button button-navigation button-transparent-border link">
                            <div className="button-content">
                                <span className="small-description">Get In Touch</span>
                                <span className="small-description">Get In Touch</span>
                            </div>
                            <div className="button-circle button-circle-white">
                                <ArrowUpRight className="button-icon" />
                            </div>
                        </Link>
                    </div>
                    <button className="navigation-inside-right-mobile" onClick={toggleMobileMenu} aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"} aria-expanded={isMobileMenuOpen}>
                        <div className={`navigation-inside-right-mobile-line ${isMobileMenuOpen ? 'mobile-line-1' : ''}`} />
                        <div className={`navigation-inside-right-mobile-line ${isMobileMenuOpen ? 'mobile-line-2' : ''}`} />
                        <div className={`navigation-inside-right-mobile-line ${isMobileMenuOpen ? 'mobile-line-3' : ''}`} />
                    </button>
                </nav>
            </header>
        </>
    );
};