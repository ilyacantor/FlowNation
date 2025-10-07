import React, { useEffect, useState } from "react";
import { builder, BuilderComponent } from "@builder.io/react";
import "../builder/registerComponents";

builder.init(import.meta.env.VITE_BUILDER_API_KEY);

export default function Landing() {
  const [content, setContent] = useState<any>(null);

  useEffect(() => {
    builder
      .get("page", { url: window.location.pathname })
      .promise()
      .then(setContent);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <BuilderComponent model="page" content={content} />
    </div>
  );
}
