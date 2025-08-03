"use client";

export default function CRMPipelineView() {
  // Temporary local URL - will be replaced with Supabase URL
  const videoUrl = "/crm-pipeline-temp.mp4";
  
  return (
    <div className="w-full h-full">
      <video 
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}