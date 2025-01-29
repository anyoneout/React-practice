import React from "react";

export default function Vimeo() {
  const src = "https://player.vimeo.com/video/187512360?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479";
  const label = "Vimeo";
  const height = 500;
  const width = 500;
  const captions = "Vimeo Video";
  return (
    <>
      <h3>{label}</h3>
      <p>{captions}</p>
      <iframe src={src} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style={{
        position: "relative",
        top: 0,
        left: 0,
        width: { width },
        height: { height }
      }} title="Procedural Romanesco Broccoli"></iframe><script src="https://player.vimeo.com/api/player.js"></script>
    </>
  )
}
