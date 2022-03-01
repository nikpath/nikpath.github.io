import "./css/Arrow.css";
import { useState, useEffect } from "react";

function isDesktop() {
  const resolution = window.innerWidth;
  const isMobile = resolution >= 320 && resolution <= 480;
  const isTablet = resolution >= 768 && resolution <= 1024;
  return !isMobile && !isTablet;
}

/* only appears on desktop version of the site */
function Arrow() {
  const [isVisible, setIsVisible] = useState(false);

  const onScroll = () => {
    let documentHeight = document.body.scrollHeight;
    let currentScroll = window.scrollY + window.innerHeight;
    let modifier = 100;
    if (currentScroll + modifier > documentHeight) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    if (isDesktop()) {
      setIsVisible(true);
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }
  }, []);

  return (
    isVisible && (
      <div id="wrapper">
        <div id="wrapper-inner">
          <div id="scroll-down">
            <span class="arrow-down"></span>
            <span id="scroll-title">Scroll Down</span>
          </div>
        </div>
      </div>
    )
  );
}

export default Arrow;
