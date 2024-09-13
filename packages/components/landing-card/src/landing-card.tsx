import { forwardRef } from "@faiz-ui/system";
import { UseLandingCardProps, useLandingCard } from "./use-landing-card";

export interface LandingCardProps extends UseLandingCardProps {}

const LandingCard = forwardRef<"div", LandingCardProps>((props, ref) => {
  const {
    Component,
    domRef,
    children,
    classnames,
    className,
    styles,
    ...otherProps
  } = useLandingCard({ ...props, ref });
  return (
    <Component
      ref={domRef}
      className={[classnames.container, className].join(" ")}
      style={styles}
      {...otherProps}
    >
      <div className={classnames.wrapper}>{children}</div>
    </Component>
  );
});

LandingCard.displayName = "LandingCard";

export default LandingCard;
