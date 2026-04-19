"use client";
import dynamic from "next/dynamic";

// Deferred chunk: splits GrainientBackground (canvas + worker bootstrap)
// out of the initial JS payload. The ivory CSS background (#FFFBED on html/body)
// covers the page while this chunk loads, so there's no visible flash.
const GrainientBackground = dynamic(
  () => import("./GrainientBackground"),
  { ssr: false }
);

export default function GrainientBackgroundLazy() {
  return <GrainientBackground />;
}
