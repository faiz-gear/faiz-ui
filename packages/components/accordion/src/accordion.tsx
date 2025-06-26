import * as React from "react";
import {forwardRef} from "@faiz-ui/system";
import {animated, useSpring} from "@react-spring/web";
import {
  UseAccordionProps,
  useAccordion,
  AccordionContext,
  UseAccordionItemProps,
  useAccordionItem,
  UseAccordionHeaderProps,
  useAccordionHeader,
  UseAccordionContentProps,
  useAccordionContent,
} from "./use-accordion";

export interface AccordionProps extends UseAccordionProps {}

const Accordion = forwardRef<"div", AccordionProps>((props, ref) => {
  const {Component, domRef, contextValue, styles, children, ...otherProps} = useAccordion({
    ...props,
    ref,
  });

  return (
    <AccordionContext.Provider value={contextValue}>
      <Component ref={domRef} className={styles.base()} {...otherProps}>
        {children}
      </Component>
    </AccordionContext.Provider>
  );
});

Accordion.displayName = "Accordion";

// Accordion Item Component
export interface AccordionItemProps extends UseAccordionItemProps {}

const AccordionItem = forwardRef<"div", AccordionItemProps>((props, ref) => {
  const {Component, domRef, styles, children, ...otherProps} = useAccordionItem({...props, ref});

  return (
    <Component ref={domRef} className={styles} {...otherProps}>
      {children}
    </Component>
  );
});

AccordionItem.displayName = "AccordionItem";

// Accordion Header Component
export interface AccordionHeaderProps extends UseAccordionHeaderProps {}

const AccordionHeader = forwardRef<"button", AccordionHeaderProps>((props, ref) => {
  const {
    Component,
    domRef,
    styles,
    triggerStyles,
    isExpanded,
    isDisabled,
    value,
    handleClick,
    handleKeyDown,
    children,
    ...otherProps
  } = useAccordionHeader({...props, ref});

  return (
    <Component
      ref={domRef}
      className={styles}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      disabled={isDisabled}
      aria-expanded={isExpanded}
      aria-controls={`accordion-content-${value}`}
      id={`accordion-header-${value}`}
      type="button"
      {...otherProps}
    >
      <span>{children}</span>
      <span className={triggerStyles} aria-hidden="true">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6L8 10L12 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </Component>
  );
});

AccordionHeader.displayName = "AccordionHeader";

// Custom hook for accordion content animation
const useAccordionAnimation = (isExpanded: boolean, children: React.ReactNode) => {
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = React.useState(0);
  const [hasInitialized, setHasInitialized] = React.useState(false);

  // Measure content height when expanded state or children change
  React.useLayoutEffect(() => {
    if (contentRef.current) {
      // Force a reflow to get accurate measurements
      contentRef.current.style.height = "auto";
      const height = contentRef.current.scrollHeight;
      setContentHeight(height);

      if (!hasInitialized) {
        setHasInitialized(true);
      }
    }
  }, [isExpanded, children, hasInitialized]);

  // Animation with proper height calculation and reset handling
  const animationStyles = useSpring({
    height: isExpanded ? contentHeight : 0,
    opacity: isExpanded ? 1 : 0,
    transform: isExpanded ? "translateY(0px) scale(1)" : "translateY(-4px) scale(0.98)",
    config: {
      tension: 250,
      friction: 25,
      clamp: !isExpanded, // Prevent overshoot when collapsing
    },
    // Reset animation when collapsing completes
    onRest: () => {
      if (!isExpanded && contentRef.current) {
        // Ensure all transforms are reset when collapsed
        contentRef.current.style.transform = "";
      }
    },
  });

  return {contentRef, animationStyles};
};

// Accordion Content Component
export interface AccordionContentProps extends UseAccordionContentProps {}

const AccordionContent = forwardRef<"div", AccordionContentProps>((props, ref) => {
  const {
    Component,
    domRef,
    styles,
    contentInnerStyles,
    isExpanded,
    value,
    children,
    ...otherProps
  } = useAccordionContent({...props, ref});

  const {contentRef, animationStyles} = useAccordionAnimation(isExpanded, children);

  return (
    <animated.div
      ref={domRef}
      className={styles}
      style={{
        ...animationStyles,
        overflow: "hidden",
        // Ensure proper stacking context
        position: "relative",
        zIndex: 1,
      }}
      aria-labelledby={`accordion-header-${value}`}
      id={`accordion-content-${value}`}
      role="region"
      aria-hidden={!isExpanded}
      {...otherProps}
    >
      <div
        ref={contentRef}
        className={contentInnerStyles}
        style={{
          // Ensure content doesn't interfere with height calculations
          minHeight: 0,
          // Force hardware acceleration for smoother animations
          transform: "translateZ(0)",
          // Prevent margin collapse
          overflow: "hidden",
        }}
      >
        {children}
      </div>
    </animated.div>
  );
});

AccordionContent.displayName = "AccordionContent";

export default Accordion;
export {AccordionItem, AccordionHeader, AccordionContent};
