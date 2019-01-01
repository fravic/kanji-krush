import { useState, useEffect, useRef } from "react";

import { Subject } from "fe/lib/subject";
import { useGameLoop } from "fe/lib/useGameLoop";

import css from "./styles.scss";

const BOTTOM_SPACE = 300;

type Props = {
  subjects: Set<Subject>;
};

export const SubjectsDisplay = ({ subjects }: Props) => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0, dpr: 1 });
  const canvasRef = useRef(null);
  useGameLoop(() => {
    if (canvasRef.current) {
      drawFrame(canvasRef.current, windowSize.dpr, subjects);
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
  return (
    <canvas
      className={css["canvas"]}
      ref={canvasRef}
      width={windowSize.width * windowSize.dpr}
      height={windowSize.height * windowSize.dpr}
    />
  );
};

function drawFrame(
  canvas: HTMLCanvasElement,
  dpr: number,
  subjects: Set<Subject>
) {
  var ctx = canvas.getContext("2d");

  ctx.resetTransform();
  ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  ctx.font = "48px adelle-sans";
  ctx.fillStyle = "white";
  subjects.forEach(s => drawSubject(ctx, s, subjects.size));
}

function drawSubject(
  ctx: CanvasRenderingContext2D,
  s: Subject,
  subjectCount: number
) {
  if (s.completed) {
    return;
  }
  const t = new Date().getTime();
  const x = lerp(
    0,
    ctx.canvas.clientWidth,
    invLerp(s.startTime, s.expiryTime, t)
  );
  const y =
    ((ctx.canvas.clientHeight - BOTTOM_SPACE) / subjectCount) *
    (s.lanePosition + 1);
  ctx.fillText(s.subject.characters, x, y);
}

function lerp(x1: number, x2: number, t: number) {
  return (x2 - x1) * t + x1;
}

function invLerp(x1: number, x2: number, t: number) {
  return (t - x1) / (x2 - x1);
}
