import React from "react";
function Photo({ src, width = 300, height = 200 }) {
  return (
    <div
      className="Photo"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        background: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "8px",
      }}
    />
  );
}
export default Photo;
