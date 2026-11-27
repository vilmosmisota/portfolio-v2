"use client";

import Image from "next/image";
import { useEffect, useEffectEvent, useRef, useState } from "react";
import avatarStill from "@/assets/avatar-96.jpg";

/*
 * The sprite holds one row per moment and FRAMES_PER_MOMENT columns, frame 0 being rest.
 * Each moment is a timed sequence over those frames, so holds and the return to rest are
 * tuned here instead of baked into the drawing. Frames are flattened onto TILE_COLOUR, so the
 * tile behind them must stay that colour in both themes.
 */
const TILE_COLOUR = "#e3ebf1";
// Served from public/ as-is: the sprite is already encoded and must not be re-processed.
const MOMENTS_SPRITE = `image-set(url("/avatar/moments.avif") type("image/avif"), url("/avatar/moments.jpg") type("image/jpeg"))`;
const FRAMES_PER_MOMENT = 6;
const INTRO_STORAGE_KEY = "avatar-intro-played";
const INTRO_DELAY_MS = 1200;
const REDUCED_MOTION_HOLD_MS = 1200;

type Beat = readonly [frame: number, durationMs: number];

type Moment = {
  caption: string;
  peakFrame: number;
  beats: readonly Beat[];
};

const rise = (peakHoldMs: number): Beat[] => [
  [1, 90],
  [2, 90],
  [3, 90],
  [4, 90],
  [5, peakHoldMs],
  [4, 70],
  [3, 70],
  [2, 70],
  [1, 70],
];

const moments: readonly Moment[] = [
  {
    caption: "Taking photos",
    peakFrame: 4,
    // The flash lives on frame 4 only, so it fires once on the way up and never on the way down.
    beats: [[1, 90], [2, 90], [3, 110], [4, 140], [5, 520], [3, 70], [2, 70], [1, 70]],
  },
  { caption: "Chasing waves", peakFrame: 5, beats: rise(640) },
  { caption: "Playing guitar", peakFrame: 5, beats: rise(640) },
  { caption: "On the wall", peakFrame: 5, beats: rise(640) },
];

export function Avatar() {
  const [frame, setFrame] = useState<number | null>(null);
  const [momentIndex, setMomentIndex] = useState(0);
  const isPlaying = useRef(false);
  const nextMoment = useRef(0);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    const pending = timers.current;
    return () => pending.forEach((timer) => window.clearTimeout(timer));
  }, []);

  function play() {
    if (isPlaying.current) return;
    isPlaying.current = true;

    const index = nextMoment.current;
    nextMoment.current = (index + 1) % moments.length;
    const moment = moments[index];
    setMomentIndex(index);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const beats: readonly Beat[] = reduceMotion
      ? [[moment.peakFrame, REDUCED_MOTION_HOLD_MS]]
      : moment.beats;

    let elapsed = 0;
    for (const [beatFrame, duration] of beats) {
      timers.current.push(window.setTimeout(() => setFrame(beatFrame), elapsed));
      elapsed += duration;
    }
    timers.current.push(
      window.setTimeout(() => {
        setFrame(null);
        isPlaying.current = false;
      }, elapsed),
    );
  }

  const playIntro = useEffectEvent(play);

  useEffect(() => {
    let alreadyPlayed = false;
    try {
      alreadyPlayed = localStorage.getItem(INTRO_STORAGE_KEY) === "1";
    } catch {
      // Storage can be blocked; the intro then simply plays on each visit.
    }
    if (alreadyPlayed) return;
    nextMoment.current = Math.floor(Math.random() * moments.length);
    const introTimer = window.setTimeout(() => {
      // Recorded only once it actually plays, so a cancelled mount never uses up the intro.
      try {
        localStorage.setItem(INTRO_STORAGE_KEY, "1");
      } catch {
        // See above: without storage the intro repeats per visit, which is harmless.
      }
      playIntro();
    }, INTRO_DELAY_MS);
    return () => window.clearTimeout(introTimer);
  }, []);

  const playing = frame !== null;

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={play}
        onPointerEnter={(event) => {
          if (event.pointerType === "mouse") play();
        }}
        aria-label="Play a moment from outside work"
        style={{ backgroundColor: TILE_COLOUR }}
        className="relative size-10 shrink-0 overflow-hidden rounded-xl outline outline-1 -outline-offset-1 outline-black/5 transition-transform duration-150 ease-out active:scale-[0.94] dark:outline-white/10"
      >
        <Image
          src={avatarStill}
          alt=""
          width={40}
          height={40}
          priority
          className={`absolute inset-0 size-full ${playing ? "invisible" : ""}`}
        />
        {/* Always mounted so the sprite is already decoded when the first moment plays. */}
        <span
          aria-hidden
          className={`absolute inset-0 bg-no-repeat ${playing ? "" : "invisible"}`}
          style={{
            backgroundImage: MOMENTS_SPRITE,
            backgroundSize: `${FRAMES_PER_MOMENT * 100}% ${moments.length * 100}%`,
            backgroundPosition: `${((frame ?? 0) / (FRAMES_PER_MOMENT - 1)) * 100}% ${
              (momentIndex / (moments.length - 1)) * 100
            }%`,
          }}
        />
      </button>
      <span
        aria-hidden
        className={`text-xs whitespace-nowrap text-muted transition-[opacity,filter,transform] duration-200 ease-out motion-reduce:transform-none ${
          playing ? "translate-x-0 opacity-100 blur-none" : "-translate-x-1 opacity-0 blur-[2px]"
        }`}
      >
        {moments[momentIndex].caption}
      </span>
    </div>
  );
}
