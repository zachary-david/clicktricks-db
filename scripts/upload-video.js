// Script to upload video to Vercel Blob Storage
// Run this script with: node scripts/upload-video.js

const { put } = require('@vercel/blob');
const fs = require('fs');
const path = require('path');

async function uploadVideo() {
  // You need to set BLOB_READ_WRITE_TOKEN in your environment
  // Get it from: https://vercel.com/dashboard/stores
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    console.error('❌ Missing BLOB_READ_WRITE_TOKEN environment variable');
    console.log('\nTo fix this:');
    console.log('1. Go to https://vercel.com/dashboard/stores');
    console.log('2. Create a new Blob Store or select existing one');
    console.log('3. Copy the token from Settings > API');
    console.log('4. Create a .env.local file with:');
    console.log('   BLOB_READ_WRITE_TOKEN=your_token_here');
    console.log('5. Run this script again\n');
    process.exit(1);
  }

  const videoPath = path.join(__dirname, '../public/kanban-demo.mp4');
  
  if (!fs.existsSync(videoPath)) {
    console.error('❌ Video file not found at:', videoPath);
    process.exit(1);
  }

  try {
    console.log('📤 Uploading video to Vercel Blob Storage...');
    
    const videoBuffer = fs.readFileSync(videoPath);
    const blob = await put('kanban-demo.mp4', videoBuffer, {
      access: 'public',
      contentType: 'video/mp4',
    });

    console.log('✅ Video uploaded successfully!');
    console.log('🔗 Blob URL:', blob.url);
    console.log('\n📝 Next steps:');
    console.log('1. Copy the URL above');
    console.log('2. Update src/components/Hero.tsx with the new URL');
    console.log('3. You can now safely delete the local video file\n');
    
    // Save the URL to a file for reference
    fs.writeFileSync(
      path.join(__dirname, '../.env.local'),
      `\nNEXT_PUBLIC_KANBAN_VIDEO_URL=${blob.url}\n`,
      { flag: 'a' }
    );
    console.log('💾 URL saved to .env.local as NEXT_PUBLIC_KANBAN_VIDEO_URL');
    
  } catch (error) {
    console.error('❌ Upload failed:', error.message);
    process.exit(1);
  }
}

// Load environment variables from .env.local
require('dotenv').config({ path: '.env.local' });

uploadVideo();