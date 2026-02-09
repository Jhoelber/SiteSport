import { useRef, useState } from "react";

const VIDEO_SRC =
  "https://res.cloudinary.com/drukanr6m/video/upload/v1770674184/WhatsApp_Video_2026-02-05_at_21.41.24_fa9ufd.mp4";

export function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(true);

  function toggleMute() {
    const v = videoRef.current;
    if (!v) return;

    const next = !muted;
    v.muted = next;          // true = mudo, false = com som
    setMuted(next);

    // alguns browsers exigem play() após desmutar
    v.play().catch(() => { });
  }



  return (
    <div className="relative w-full overflow-hidden rounded-xl">
      <video
        ref={videoRef}
        src={VIDEO_SRC}
        className="w-full h-full object-cover"
        autoPlay
        muted={muted}
        playsInline
        controls
        preload="metadata"
      />

     
    </div>
  );
}