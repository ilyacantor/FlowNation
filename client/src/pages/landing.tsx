import React, { useEffect, useState } from "react";
import { builder, BuilderComponent } from "@builder.io/react";
import "../builder/registerComponents";

const apiKey = import.meta.env.VITE_BUILDER_API_KEY;
builder.init(apiKey);

export default function Landing() {
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("Builder API Key:", apiKey ? "Present" : "Missing");
    console.log("Current URL:", window.location.pathname);
    
    builder
      .get("page", { url: window.location.pathname })
      .promise()
      .then((data) => {
        console.log("Builder content:", data);
        setContent(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Builder error:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-4"></div>
          <p>Loading FlowNation content...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center max-w-md p-8">
          <h1 className="text-2xl font-bold text-red-400 mb-4">Builder.io Error</h1>
          <p className="text-gray-300">{error}</p>
          <p className="text-sm text-gray-500 mt-4">Check console for details</p>
        </div>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center max-w-md p-8">
          <h1 className="text-2xl font-bold text-orange-400 mb-4">No Content Found</h1>
          <p className="text-gray-300">No Builder.io page found for: <span className="text-cyan-400">{window.location.pathname}</span></p>
          <p className="text-sm text-gray-500 mt-4">Create a page in Builder.io with this URL path</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <BuilderComponent model="page" content={content} />
    </div>
  );
}
