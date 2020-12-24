import React from "react";
import { AnimatedSwitch, spring } from "react-router-transition";
// I hope this doesn't break the no styled components rule, but its just a nice easy layer on top of react-router.
// it can be easily removed and vanilla react-router used instead but then there are no nice page transitions.

// to the transform style property
const mapStyles = (styles) => {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
};

// wrap the `spring` helper to use a bouncy config
const bounce = (val) => {
  return spring(val, {
    stiffness: 400,
    damping: 50,
  });
};

// route matches will now have a nice transition...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2,
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};

const TransitionWrapper = ({ children, ...props }) => (
  <AnimatedSwitch
    atEnter={bounceTransition.atEnter}
    atLeave={{}}
    atActive={bounceTransition.atActive}
    className="switch-wrapper"
    mapStyles={mapStyles}
  >
    {children}
  </AnimatedSwitch>
);
export default TransitionWrapper;
