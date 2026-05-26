import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";

interface HlsBackgroundProps {
  opacity?: number;
  overlayClass?: string;
}

export default function HlsBackground({
  opacity = 0.7,
  overlayClass = "bg-black/55",
}: HlsBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const videoUrl = "https://stream.mux.com/jPyJ2YM6Nlly7U6EyfxM01tz4D4uPE3gyJ4PYuvY62Wg.m3u8";
  const posterUrl = "https://image.mux.com/jPyJ2YM6Nlly7U6EyfxM01tz4D4uPE3gyJ4PYuvY62Wg/thumbnail.jpg?width=800&time=3";

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Use a lightweight intersection observer to monitor visibility
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        rootMargin: "250px", // Preload slightly before scroll to ensure seamless transitions
        threshold: 0.01,
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isVisible) {
      if (video) {
        video.pause();
      }
      return;
    }

    let hls: Hls | null = null;

    if (Hls.isSupported()) {
      hls = new Hls({
        maxMaxBufferLength: 4, // Keep buffer small for low bandwidth footprint
        maxBufferSize: 5 * 1024 * 1024, // 5MB limit
        enableWorker: true,
        lowLatencyMode: true,
      });
      hls.loadSource(videoUrl);
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // Native Safari iOS support
      video.src = videoUrl;
    }

    const handleAutoplay = () => {
      if (isVisible) {
        video.play().catch(() => {
          // Non-blocking fallback for autoplay blocks or power saving modes
        });
      }
    };

    video.addEventListener("canplay", handleAutoplay);

    return () => {
      if (video) {
        video.removeEventListener("canplay", handleAutoplay);
        video.pause();
      }
      if (hls) {
        hls.destroy();
      }
    };
  }, [isVisible, videoUrl]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full z-0 overflow-hidden select-none pointer-events-none bg-radial from-neutral-900 to-black"
    >
      {/* Ambient fallback gradient block to ensure zero flicker/black outline */}
      <div className="absolute inset-0 bg-neutral-950/40 z-[1]" />
      
      {isVisible && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster={posterUrl}
          preload="none"
          className="w-full h-full object-cover object-center scale-102 transition-opacity duration-300"
          style={{ opacity }}
        />
      )}
      <div className={`absolute inset-0 mix-blend-multiply z-[2] ${overlayClass}`} />
    </div>
  );
}

