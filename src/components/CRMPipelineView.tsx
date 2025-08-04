"use client";

export default function CRMPipelineView() {
  // Supabase URL for the pipeline video
  const videoUrl = "https://tnwxuxctzoygblwokcmb.supabase.co/storage/v1/object/public/clicktricksweb//CRMPipelineview.mp4";
  
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