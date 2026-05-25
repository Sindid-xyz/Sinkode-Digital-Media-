import { useEffect, useRef } from "react";
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
  const videoUrl = "https://stream.mux.com/jPyJ2YM6Nlly7U6EyfxM01tz4D4uPE3gyJ4PYuvY62Wg.m3u8";
  const posterUrl = "https://image.mux.com/jPyJ2YM6Nlly7U6EyfxM01tz4D4uPE3gyJ4PYuvY62Wg/thumbnail.jpg?width=800&time=3";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;

    // Standard high-performance HLS loading
    if (Hls.isSupported()) {
      hls = new Hls({
        maxMaxBufferLength: 8,
        enableWorker: true,
        lowLatencyMode: true,
      });
      hls.loadSource(videoUrl);
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // Native Safari iOS support
      video.src = videoUrl;
    }

    // Try playing automatically - mobile browsers sometimes require extra reassurance
    const handleAutoplay = () => {
      video.play().catch(() => {
        // Safe catch for autoplay blocks or low power saving mode
      });
    };

    video.addEventListener("canplay", handleAutoplay);

    return () => {
      if (video) {
        video.removeEventListener("canplay", handleAutoplay);
      }
      if (hls) {
        hls.destroy();
      }
    };
  }, [videoUrl]);

  return (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden select-none pointer-events-none bg-radial from-neutral-900 to-black">
      {/* Ambient fallback gradient block to ensure zero flicker/black outline */}
      <div className="absolute inset-0 bg-neutral-950/40 z-[1]" />
      
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        poster={posterUrl}
        preload="auto"
        className="w-full h-full object-cover object-center scale-102 transition-opacity duration-700"
        style={{ opacity }}
      />
      <div className={`absolute inset-0 mix-blend-multiply z-[2] ${overlayClass}`} />
    </div>
  );
}

