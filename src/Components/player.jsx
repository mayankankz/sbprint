import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

function LottiePlayer({ src }) {
  return (
    <Player
      src={src}
      className="player"
      speed={1}
      style={{ width: "auto", height: "auto" }}
      loop
      background="transparent"
      autoplay
    />
  );
}

export default LottiePlayer;
