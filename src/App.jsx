import { useEffect } from "react";
import Circle from "./components/common/shape/Circle";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { triggers } from "./animation/triggers";
import { targets } from "./animation/targets";
import { motion } from "./animation/motion";
import MainSlideTexts from "./components/presentation/MainSlideTexts";
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: triggers.main,
      })
      .to("." + targets.textName, motion.slideToRightX)
      .to("." + targets.textFrontend, motion.slideToLeftX, "<");
  }, []);

  return (
    <div
      className="main"
      style={{
        backgroundColor: "#222831",
        height: "100vh",
        paddingTop: "300px",
      }}
    >
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Circle />
        <MainSlideTexts />
      </section>
    </div>
  );
}

export default App;
