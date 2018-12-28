import { useEffect } from "react";

export function useGameLoop(callback: Function, interval?: number) {
  let loopId;

  function loopFunction(_?: number) {
    callback();

    if (typeof interval === "undefined" || interval === 0) {
      loopId = requestAnimationFrame(loopFunction);
      return function() {
        cancelAnimationFrame(loopId);
      };
    }

    loopId = setTimeout(loopFunction, interval);
    return function() {
      clearTimeout(loopId);
    };
  }

  useEffect(() => {
    return loopFunction();
  });
}
