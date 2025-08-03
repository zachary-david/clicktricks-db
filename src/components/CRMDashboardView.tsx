"use client";

import Image from 'next/image';

export default function CRMDashboardView() {
  // Temporary local URL - will be replaced with Supabase URL
  const imageUrl = "/crm-dashboard-temp.png";
  
  return (
    <div className="w-full h-full">
      <Image 
        src={imageUrl}
        alt="CRM Dashboard View"
        width={1200}
        height={800}
        className="w-full h-full object-cover"
        priority
      />
    </div>
  );
}