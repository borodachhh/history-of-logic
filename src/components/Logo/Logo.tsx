import React from "react";
import { ReactComponent as LogoSVG } from "../../assets/logo.svg";
import gsap from "gsap";

interface Props {
  animated_enter?: boolean;
  className?: string;
}

const Logo: React.FC<Props> = (props) => {
  return (
    <>
      <LogoSVG
        id="logo-svg"
        className={props.className || ""}
        style={{ visibility: props.animated_enter ? "hidden" : "visible" }}
      />
    </>
  );
};

export default Logo;

export const enterLogoAnimation = () => {
  const logoEl = document.querySelector("#logo-svg");
  const one = logoEl?.querySelectorAll("#one");
  const zero = logoEl?.querySelectorAll("#zero");

  const tl = gsap
    .timeline({
      defaults: {
        duration: 0.5,
        stagger: 0.2,
        ease: "Power3.out",
        transformOrigin: "center center",
      },
    })
    .set(logoEl, { visibility: "visible" })
    .from(one!, {
      opacity: 0,
      scale: 0.8,
    })
    .from(
      zero!,
      {
        opacity: 0,
        scale: 0.8,
      },
      "+=0.2"
    );

  return tl;
};
