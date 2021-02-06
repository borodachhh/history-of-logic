import React from "react";
import { ReactComponent as LogicSVG } from "../../assets/logo_text.svg";
import gsap from "gsap";

interface Props {
  animated_enter?: boolean;
  className?: string;
}

const LogicPicture: React.FC<Props> = (props) => {
  return (
    <>
      <LogicSVG
        className={props.className || ""}
        id="logic-svg"
        style={{ visibility: props.animated_enter ? "hidden" : "visible" }}
      />
    </>
  );
};
export default LogicPicture;

export const enterLogicPictureAnimation = () => {
  const logicEl = document.querySelector("#logic-svg");
  const verticals = logicEl?.querySelectorAll("#vertical");
  const top = logicEl?.querySelectorAll("#top");
  const center = logicEl?.querySelectorAll("#center");
  const bottom = logicEl?.querySelectorAll("#bottom");

  const tl = gsap
    .timeline({
      defaults: {
        duration: 0.5,
        stagger: 0.2,
        ease: "Power3.out",
      },
    })
    .set(logicEl, {
      visibility: "visible",
    })
    .from([top, center, bottom], {
      opacity: 0,
    })
    .from(
      verticals!,
      {
        opacity: 0,
      },
      "+=0.2"
    );
  return tl;
};
