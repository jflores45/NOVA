import { useState, useEffect } from "react";

type CarouselBackgroundProps = {
  images: string[];
  interval?: number;
  children: React.ReactNode;
};

function CarouselBackground({
  images,
  interval = 4000,
  children,
}: CarouselBackgroundProps) {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMute, setIsMute] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [isPlaying, images.length, interval]);

  return (
    <div
      style={{
        position: "relative",
        backgroundImage: `url(${images[index]})`,
        backgroundPosition: "",
        backgroundSize: "cover",
        height: "100vh",
        animation: "",
      }}
    >
      {children}

      <div
        style={{
          position: "absolute",
          bottom: "0",
          right: "0",
          padding: "60px 25px",
          width: "10%",
          color: "white",
        }}
      >
        {isMute ? (
          <button
            onClick={() => setIsMute(false)}
            style={{ background: "none", border: "none", paddingRight: "30px" }}
          >
            <img
              src="/images/sound.png"
              alt="Pause"
              style={{ height: "25px" }}
            />
          </button>
        ) : (
          <button
            onClick={() => setIsMute(true)}
            style={{ background: "none", border: "none", paddingRight: "30px" }}
          >
            <img src="/images/mute.png" alt="Play" style={{ height: "25px" }} />
          </button>
        )}
        {isPlaying ? (
          <button
            onClick={() => setIsPlaying(false)}
            style={{ background: "none", border: "none", paddingRight: "28px" }}
          >
            <img
              src="/images/Pause.png"
              alt="Pause"
              style={{ height: "25px" }}
            />
          </button>
        ) : (
          <button
            onClick={() => setIsPlaying(true)}
            style={{ background: "none", border: "none", paddingRight: "28px" }}
          >
            <img src="/images/Play.png" alt="Play" style={{ height: "25px" }} />
          </button>
        )}
      </div>
    </div>
  );
}

export default CarouselBackground;
