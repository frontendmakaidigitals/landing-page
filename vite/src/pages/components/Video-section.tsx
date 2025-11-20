"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";

/**
 * VideoSection
 *
 * - Two side-by-side video players (responsive: stacked on small screens)
 * - Each video has its own Play / Pause button, progress bar, and animated play overlay
 * - Uses local files you uploaded as the video/poster URLs (replace if you want real mp4s)
 *
 * NOTE: I used the local uploaded asset paths (these will be transformed to URLs by the platform).
 * If you have actual .mp4 files, replace `videoSrc` values with your .mp4 paths.
 */
export default function VideoSection() {
  // Replace these with actual video file paths if you have them. Right now they point to uploaded assets as posters.
  // The platform will transform local /mnt/data/... paths to usable URLs.
  const videos = [
    {
      id: "v1",
      // If this is only an image you can use it as poster; replace with mp4 path for real video
      src: "/mnt/data/30281eca-4952-4284-bb49-4d85f7d284b8.png",
      poster: "/mnt/data/30281eca-4952-4284-bb49-4d85f7d284b8.png",
      title: "Campaign Highlights",
    },
    {
      id: "v2",
      src: "/mnt/data/a875c663-1b3c-4901-89bc-57b3148418b3.png",
      poster: "/mnt/data/a875c663-1b3c-4901-89bc-57b3148418b3.png",
      title: "Creative Reel",
    },
  ];

  // Refs & state for each video
  const refs = useRef<Record<string, HTMLVideoElement | null>>({});
  const [playing, setPlaying] = useState<Record<string, boolean>>({});
  const [progress, setProgress] = useState<Record<string, number>>({});

  // Initialize state
  useEffect(() => {
    const initialPlaying: Record<string, boolean> = {};
    const initialProgress: Record<string, number> = {};
    videos.forEach((v) => {
      initialPlaying[v.id] = false;
      initialProgress[v.id] = 0;
    });
    setPlaying(initialPlaying);
    setProgress(initialProgress);
  }, []); // run once

  // attach timeupdate listeners
  useEffect(() => {
    const handlers: Array<() => void> = [];

    videos.forEach((v) => {
      const vid = refs.current[v.id];
      if (!vid) return;
      const onTime = () => {
        const pct = vid.duration ? (vid.currentTime / vid.duration) * 100 : 0;
        setProgress((p) => ({ ...p, [v.id]: Number(pct.toFixed(2)) }));
      };
      const onEnded = () => {
        setPlaying((p) => ({ ...p, [v.id]: false }));
        setProgress((p) => ({ ...p, [v.id]: 100 }));
      };

      vid.addEventListener("timeupdate", onTime);
      vid.addEventListener("ended", onEnded);

      handlers.push(() => {
        vid.removeEventListener("timeupdate", onTime);
        vid.removeEventListener("ended", onEnded);
      });
    });

    return () => handlers.forEach((fn) => fn());
  }, [videos]);

  // Play / Pause single video (and pause the other video if playing)
  const togglePlay = async (id: string) => {
    const vid = refs.current[id];
    if (!vid) return;

    // If about to play, pause others
    if (vid.paused) {
      // pause others
      Object.keys(refs.current).forEach((k) => {
        if (k !== id) {
          const other = refs.current[k];
          if (other && !other.paused) {
            other.pause();
            setPlaying((p) => ({ ...p, [k]: false }));
          }
        }
      });

      try {
        await vid.play();
        setPlaying((p) => ({ ...p, [id]: true }));
      } catch (e) {
        // autoplay might be blocked; fallback: show poster and set playing false
        setPlaying((p) => ({ ...p, [id]: false }));
      }
    } else {
      vid.pause();
      setPlaying((p) => ({ ...p, [id]: false }));
    }
  };

  // Seek by clicking progress bar
  const seek = (id: string, clientX: number, element: HTMLDivElement) => {
    const vid = refs.current[id];
    if (!vid) return;
    const rect = element.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    const pct = x / rect.width;
    vid.currentTime = pct * (vid.duration || 0);
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-2">
        <h2 className="text-3xl font-semibold text-center">
          A Quick Glance At Some Case Studies
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto">
          hese are just some of the many case studies we have build over the
          years
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {videos.map((v) => (
            <div key={v.id} className="relative group">
              {/* Video wrapper */}
              <div className="relative overflow-hidden rounded-xl shadow-lg bg-black">
                {/* Use <video> tag. If you're using images as placeholders, `src` will display an image as a video -- replace with .mp4 when available */}
                <video
                  ref={(el) => {
                    refs.current[v.id] = el;
                  }}
                  // If you have a real mp4 put it in src. For now we set poster and leave src empty to treat poster as placeholder.
                  // If you do have mp4, replace v.src with mp4 path here:
                  src={v.src.endsWith(".mp4") ? v.src : undefined}
                  poster={v.poster}
                  className="w-full h-56 md:h-64 lg:h-72 object-cover bg-neutral-900"
                  preload="metadata"
                  playsInline
                  // controls hidden because we use custom controls
                  controls={false}
                />

                {/* Animated play overlay (hidden when playing) */}
                {!playing[v.id] && (
                  <motion.button
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    onClick={() => togglePlay(v.id)}
                    className="absolute inset-0 m-auto w-full h-full flex items-center justify-center bg-black/40"
                    aria-label={`Play ${v.title}`}
                  >
                    <motion.div
                      initial={{ scale: 0.95 }}
                      animate={{ scale: [1, 1.06, 1] }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut",
                      }}
                      className="flex items-center gap-2"
                    >
                      <div className="rounded-full bg-red-600/90 p-3 shadow-lg">
                        <Play className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-white font-semibold text-lg drop-shadow">
                        Play
                      </div>
                    </motion.div>
                  </motion.button>
                )}

                {/* Top-left title badge */}
                <div className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full bg-white/10 text-white text-sm backdrop-blur">
                  {v.title}
                </div>

                {/* Controls bar */}
                <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center gap-3">
                  {/* Play / Pause */}
                  <button
                    onClick={() => togglePlay(v.id)}
                    className="relative z-20 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition"
                    aria-label={playing[v.id] ? "Pause" : "Play"}
                  >
                    {playing[v.id] ? (
                      <Pause className="w-5 h-5 text-white" />
                    ) : (
                      <Play className="w-5 h-5 text-white" />
                    )}
                  </button>

                  {/* Progress bar */}
                  <div
                    className="relative flex-1 h-2 rounded-full bg-white/20 cursor-pointer"
                    onClick={(e) => {
                      const el = e.currentTarget as HTMLDivElement;
                      seek(v.id, e.clientX, el);
                    }}
                  >
                    <div
                      className="absolute left-0 top-0 bottom-0 rounded-full bg-red-500"
                      style={{ width: `${progress[v.id] ?? 0}%` }}
                    />
                  </div>

                  {/* Time / percent */}
                  <div className="text-white/80 text-xs w-12 text-right">
                    {progress[v.id] ? `${Math.round(progress[v.id])}%` : "0%"}
                  </div>
                </div>
              </div>

              {/* Subtle animated border glow when playing */}
              <motion.div
                animate={{
                  boxShadow: playing[v.id]
                    ? "0 10px 40px rgba(239,68,68,0.18)"
                    : "0 6px 18px rgba(0,0,0,0.08)",
                }}
                transition={{ duration: 0.4 }}
                className="mt-3 rounded-xl"
              ></motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
