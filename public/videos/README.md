# Demo Video - YouTube Integration

## 🎬 Video Location
The demo video is now hosted on YouTube and embedded in the landing page.

## 📋 Current Setup
- **Video URL:** https://youtu.be/T-DebUbci2Q
- **Embed URL:** https://www.youtube.com/embed/T-DebUbci2Q
- **Location:** Embedded via iframe in the landing page
- **Benefits:** No file size limits, better loading performance, YouTube features

## ✅ Advantages of YouTube Integration
- **No file size restrictions** - No more GitHub 100MB limit issues
- **Better performance** - YouTube's CDN ensures fast loading worldwide
- **Mobile optimized** - YouTube automatically adapts to all devices
- **Analytics** - Track video engagement through YouTube Analytics
- **SEO benefits** - YouTube is the second largest search engine
- **Professional appearance** - Native YouTube player controls

## 🛠️ Current Implementation:
The landing page now includes:
- **YouTube iframe embed** with responsive aspect ratio
- **Custom overlay card** with video information
- **YouTube icon** in the info card
- **Smooth hover animations** and transitions
- **Mobile-optimized layout** that works on all devices
- **Bilingual support** for video descriptions

## 🔧 Technical Details:
```html
<iframe 
  src="https://www.youtube.com/embed/T-DebUbci2Q?rel=0&modestbranding=1&showinfo=0"
  title="Demo Oficial ZeroWasteAI"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  loading="lazy"
></iframe>
```

### URL Parameters Used:
- `rel=0` - Shows fewer related videos at the end
- `modestbranding=1` - Reduces YouTube branding
- `showinfo=0` - Cleaner appearance (legacy parameter)

## 🎯 Benefits for Users:
- **Instant loading** - No download required
- **Familiar interface** - Everyone knows YouTube controls
- **Quality selection** - Users can choose video quality
- **Fullscreen mode** - Native YouTube fullscreen experience
- **Accessibility** - YouTube's built-in accessibility features