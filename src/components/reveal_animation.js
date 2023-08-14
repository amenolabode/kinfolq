import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const RevealAnimation = ({child, delay}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const mainControl = useAnimation();

  useEffect(() => {
    if (inView) {
      mainControl.start("visible");
    }
  }, [inView]);
  return (
    <motion.div
    ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControl}
      transition={{ duration: 0.5, delay: delay }}
      className="w-full"
    >
      {child}
    </motion.div>
  );
};

export default RevealAnimation;
