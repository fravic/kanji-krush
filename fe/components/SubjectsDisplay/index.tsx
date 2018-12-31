import { useState, useEffect } from "react";

import { Subject } from "fe/lib/subject";
import { useGameLoop } from "fe/lib/useGameLoop";

import css from "./styles.scss";

type Props = {
  subjects: Set<Subject>;
};

export const SubjectsDisplay = ({ subjects }: Props) => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0, dpr: 1 });
  let canvasRef = null;
  useGameLoop(() => {
    if (canvasRef) {
      drawFrame(canvasRef, windowSize.dpr, subjects);
    }
  });
  useEffect(() => {
    if (window) {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        dpr: window.devicePixelRatio
      });
    }
  });
  return (
    <canvas
      className={css["canvas"]}
      ref={ref => {
        if (ref) {
          canvasRef = ref;
        }
      }}
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
  subjects.forEach(s => drawSubject(ctx, s));
}

function drawSubject(ctx: CanvasRenderingContext2D, s: Subject) {
  if (s.completed) {
    return;
  }
  const t = new Date().getTime();
  const x = lerp(
    0,
    ctx.canvas.clientWidth,
    invLerp(s.startTime, s.expiryTime, t)
  );
  ctx.fillText(s.subject.characters, x, 100 * (s.lanePosition + 1));
}

function lerp(x1: number, x2: number, t: number) {
  return (x2 - x1) * t + x1;
}

function invLerp(x1: number, x2: number, t: number) {
  return (t - x1) / (x2 - x1);
}
