import { useEffect, useState } from "react";
import "./AnimatedEnterpriseLogo.css";

import saibabuLogo from "../assets/saibabu.png";
import rudhrasriLogo from "../assets/Rudhrasri.png";

const logos = [
  {
    name: "Saibabu Enterprises",
    image: saibabuLogo,
  },
  {
    name: "Rudhrasri Enterprises",
    image: rudhrasriLogo,
  },
];

const AnimatedEnterpriseLogo = ({ isLoader = false }) => {
  const [current, setCurrent] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    let initialTimeout;
    
    const performFlip = () => {
      setIsFlipping(true);

      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % logos.length);
      }, 350);

      setTimeout(() => {
        setIsFlipping(false);
      }, 700);
    };

    // If it's a loader, don't wait the full 3 seconds for the first flip
    if (isLoader) {
      initialTimeout = setTimeout(() => {
        performFlip();
      }, 300);
    }

    // Standard interval for subsequent flips
    const interval = setInterval(() => {
      performFlip();
    }, 3000);

    return () => {
      clearInterval(interval);
      if (initialTimeout) clearTimeout(initialTimeout);
    };
  }, [isLoader]);

  return (
    <div className="enterprise-logo-container">
      <div
        className={`enterprise-logo-card ${
          isFlipping ? "is-flipping" : ""
        }`}
      >
        <img
          src={logos[current].image}
          alt={logos[current].name}
          className="enterprise-logo"
        />
      </div>
    </div>
  );
};

export default AnimatedEnterpriseLogo;