/* eslint-disable react/jsx-key */
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Play } from "lucide-react";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const SectionShowreel = () => {

  const videoRef = useRef();
  const playButtonRef = useRef();


  useEffect(() => {

    gsap.to(videoRef.current, { rotateY: "0deg", scale: "1", rotateX: "0deg", translateY: "0vh", scrollTrigger: { trigger: ".showreel", start: "top bottom", end: "top top", scrub: true, markers: false } })



    let mouseX = 0;
    let mouseY = 0;
    let buttonX = 0;
    let buttonY = 0;
    const speed = 0.05;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 100 - 50;
      mouseY = (event.clientY / window.innerHeight) * 100 - 50;
    };

    const animate = () => {
      const distX = mouseX - buttonX;
      const distY = mouseY - buttonY;

      buttonX += distX * speed;
      buttonY += distY * speed;

      if (playButtonRef.current) {
        playButtonRef.current.style.transform = `translate(${buttonX}px, ${buttonY}px)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="showreel">
      <div className="showreel-content">
        <div className="showreel-content-container" >
          <div className="showreel-video-playbutton" ref={playButtonRef} >
            <Play fill="#010101" className="showreel-video-playbutton-icon" />
          </div>
          <div ref={videoRef} className="showreel-content-videobox" >
            <div className="background">
              <div className="trail"></div>
            </div>
            <video src="/videos/ese.mp4" className="showreel-content-video" autoPlay="autoplay" muted playsInline={true} data-wf-ignore="true" preload="auto" loop />
          </div>
        </div>

      </div>
    </section>
  );
};