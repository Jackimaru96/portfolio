"use client";

import { useEffect } from "react";
import { wrenchFrames } from "./wrench-frames";

const FRAME_INTERVAL_MS = 280;

export function FaviconSpinner() {
  useEffect(() => {
    const link =
      document.querySelector<HTMLLinkElement>('link[rel="icon"]') ??
      (() => {
        const created = document.createElement("link");
        created.rel = "icon";
        document.head.appendChild(created);
        return created;
      })();

    let frame = 0;
    let intervalId: ReturnType<typeof setInterval> | undefined;

    function tick() {
      frame = (frame + 1) % wrenchFrames.length;
      link.href = wrenchFrames[frame];
    }

    function start() {
      if (intervalId) return;
      intervalId = setInterval(tick, FRAME_INTERVAL_MS);
    }

    function stop() {
      if (!intervalId) return;
      clearInterval(intervalId);
      intervalId = undefined;
    }

    function handleVisibilityChange() {
      if (document.hidden) {
        stop();
      } else {
        start();
      }
    }

    if (!document.hidden) start();
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      stop();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return null;
}
