import React from "react";

export default function BuilderEmbed() {
  return (
    <iframe
      src="https://builder.io/content/<YOUR-BUILDER-MODEL-ID>"
      style={{
        width: "100%",
        height: "100vh",
        border: "none",
      }}
      title="Builder Embed"
    />
  );
}
