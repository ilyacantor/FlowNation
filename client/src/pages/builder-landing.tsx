import React, { useEffect, useState } from "react";
import { builder, BuilderComponent, BuilderContent } from "@builder.io/react";
import "../builder/registerComponents";

builder.init(import.meta.env.VITE_BUILDER_API_KEY);

export default function BuilderLanding() {
  const [content, setContent] = useState<BuilderContent | undefined>(undefined);

  useEffect(() => {
    builder
      .get("page", { url: window.location.pathname })
      .promise()
      .then((data) => setContent(data as BuilderContent));
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <BuilderComponent model="page" content={content} />
    </div>
  );
}
