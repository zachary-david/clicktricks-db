"use client";

import Image from 'next/image';

export default function CRMLeadsView() {
  // Temporary local URL - will be replaced with Supabase URL
  const imageUrl = "/crm-leads-temp2.png";
  
  return (
    <div className="w-full h-full">
      <Image 
        src={imageUrl}
        alt="CRM Leads View"
        width={1200}
        height={800}
        className="w-full h-full object-cover"
        priority
      />
    </div>
  );
}