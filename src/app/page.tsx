"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Home() {
  const gallery = useRef<HTMLDivElement>(null);
  const elementRefs = useRef([]);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX,
        mouseY = e.clientY;
      const xDecimal = mouseX / window.innerWidth,
        yDecimal = mouseY / window.innerHeight;

      const maxX = gallery.current!.offsetWidth - window.innerWidth,
        maxY = gallery.current!.offsetHeight - window.innerHeight;

      const panX = maxX * xDecimal * -1,
        panY = maxY * yDecimal * -1;

      gallery.current!.animate(
        { transform: `translate(${panX}px, ${panY}px)` },
        { duration: 2000, fill: "forwards", easing: "ease" }
      );
    });

    return () => {};
  }, []);

  return (
    <div ref={gallery} className="gallery relative">
      <div onMouseMove={() => {}} className="tile"></div>
      <div className="tile"></div>
      <div className="tile"></div>
      <div className="tile"></div>
      <div className="tile"></div>
      <div className="tile"></div>
      <div className="tile"></div>
      <div className="tile"></div>
      <div className="tile"></div>
      <div className="tile"></div>
    </div>
  );
}
