# Demo Video - Important Note

## 🎬 Video Location
The demo video (`demo.mp4`) should be placed in `public/videos/` directory.

## 📋 Requirements
- **File name:** `demo.mp4`
- **Location:** `public/videos/demo.mp4`
- **Recommended size:** Under 50MB (for better loading)
- **Format:** MP4 (H.264 codec recommended)

## ⚠️ Important
The video file is excluded from Git due to its large size (150MB+). 

### For Development:
- Ensure you have the `demo.mp4` file in the correct location
- The video section will work perfectly with any MP4 file named `demo.mp4`

### For Production:
- Upload the video file separately to your hosting provider
- Or use a video hosting service (YouTube, Vimeo, etc.) and embed the link

## 🔄 Alternative Solutions:
1. **Compress the video** to under 50MB
2. **Use video hosting** (YouTube, Vimeo) and update the video src
3. **Use CDN** for video delivery

## 🛠️ Current Implementation:
The landing page expects the video at `/videos/demo.mp4` and includes:
- Responsive video player
- Custom controls styling
- Poster image fallback
- Mobile-optimized layout