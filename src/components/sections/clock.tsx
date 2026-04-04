"use client";

import Clock from "react-live-clock";

import SmoothReveal from "../animations/smooth-reveal";

const ClockSection = () => {
  return (
    <SmoothReveal
      delay={0.1}
      className="absolute flex items-center gap-1 top-4 right-4 text-emerald-500 text-sm"
    >
      <Clock
        format={"HH:mm"}
        interval={60 * 1000}
        timezone={"Asia/Kolkata"}
        ticking={true}
      />
    </SmoothReveal>
  );
};

export default ClockSection;
