import React, { useState } from "react";
import { motion } from "motion/react";
import { useTimeout } from "usehooks-ts";

type FadeInWordProps = {
  children?: React.ReactNode;
};

export default function FadeInWord(props: FadeInWordProps) {
  const { children } = props;

  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  const duration = 0.3;

  useTimeout(() => {
    setIsAnimationComplete(true);
  }, duration * 1000); // Convert to milliseconds

  if (isAnimationComplete) {
    return children;
  }

  return (
    <motion.span
      style={{
        display: "inline",
        willChange: "opacity, filter",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.span>
  );
}
