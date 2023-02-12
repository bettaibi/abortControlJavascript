import React from "react";

export default function VideoDownload() {
  return (
    <div>
      {/* <video src="https://youtu.be/8pDqJVdNa44" /> */}

      <iframe
        width="853"
        height="480"
        src="https://youtu.be/8pDqJVdNa44"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />

      <button>Download</button>
    </div>
  );
}
