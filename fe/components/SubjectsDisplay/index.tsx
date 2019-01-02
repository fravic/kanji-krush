import produce from "immer";
import { useState, useEffect, useRef } from "react";

import { Subject } from "fe/lib/subject";
import { useGameLoop } from "fe/lib/useGameLoop";

import {
  createParticleExplosionForSubject,
  drawFrame,
  ParticleExplosionsById
} from "./drawFrame";
import css from "./styles.scss";

type Props = {
  subjects: Set<Subject>;
};

export const SubjectsDisplay = ({ subjects }: Props) => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0, dpr: 1 });
  const canvasRef = useRef(null);
  const particlesRef = useRef<ParticleExplosionsById>({});
  useGameLoop(() => {
    if (canvasRef.current) {
      drawFrame(
        canvasRef.current,
        windowSize.dpr,
        subjects,
        particlesRef.current
      );
    }
  });
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        dpr: window.devicePixelRatio
      });
    }
    if (window) {
      handleWindowResize();
      window.addEventListener("resize", handleWindowResize);
      return () => {
        window.removeEventListener("resize", handleWindowResize);
      };
    }
  }, []);
  useEffect(() => {
    subjects.forEach(s => {
      if (s.completed && !particlesRef.current[s.subject.id]) {
        particlesRef.current = produce(particlesRef.current, draft => {
          draft[s.subject.id] = createParticleExplosionForSubject(s);
        });
      }
    });
  });
  return (
    <canvas
      className={css["canvas"]}
      ref={canvasRef}
      width={windowSize.width * windowSize.dpr}
      height={windowSize.height * windowSize.dpr}
    />
  );
};
