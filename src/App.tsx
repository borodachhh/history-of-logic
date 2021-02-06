import gsap from "gsap";
import React, { useEffect } from "react";
import styles from "./App.module.scss";
import LogicPicture, {
  enterLogicPictureAnimation
} from "./components/LogicPicture/LogicPicture";
import Logo, { enterLogoAnimation } from "./components/Logo/Logo";
import Helmet from "react-helmet";

const App: React.FC = () => {

  useEffect(() => {
    gsap
      .timeline()
      .delay(1)
      .add(enterBGDecorationAnimation())
      .add(enterLogoAnimation(), 0)
      .add(enterLogicPictureAnimation());
  }, []);

  return (
    <>
    <Helmet>
      <title>Logic</title>
    </Helmet>
      <div className={styles["app"]}>
        <div className={styles["bg-decoration-wrap"]}>
          <div className={styles["bg-decoration"]}>
            <div className={`${styles["bg-decoration__item"]} ${styles["bg-decoration__item--1"]}`}></div>
            <div className={`${styles["bg-decoration__item"]} ${styles["bg-decoration__item--2"]}`}></div>
          </div>
        </div>
        <header className={styles["header"]}>
          <Logo className={styles["logo"]} animated_enter />
          <LogicPicture className={styles["logic-picture"]} animated_enter />
        </header>
      </div>
    </>
  );
};

const enterBGDecorationAnimation = () => {
  const bgDecorationItems = document.querySelectorAll("." + styles["bg-decoration__item"]);
  
  const tl = gsap.from(bgDecorationItems, {
    opacity: 0,
    rotate: () => -20 + Math.random() * 40,
    stagger: 0.3,
    ease: "Power3.out",
    duration: 0.5
  });

  return tl;
}

export default App;

