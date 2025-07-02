# 📅 Calendly Calendar Integration Setup

Your website now has a beautiful calendar booking section ready for Calendly integration!

## 🎯 Current Setup

The calendar section is located in the **"GET IN TOUCH"** section and includes:
- ✅ Beautiful calendar placeholder with matching site design
- ✅ Benefits section explaining why to book directly
- ✅ Professional styling with cyan/blue theme
- ✅ Responsive design for all devices

## 🚀 How to Add Your Calendly Calendar

### Step 1: Create Your Calendly Account
1. Go to [calendly.com](https://calendly.com)
2. Sign up or log in to your account
3. Create a new event type for "Studio Booking"

### Step 2: Configure Your Event Type
Set up your studio booking event with:
- **Duration**: 2 hours (minimum), 3 hours, 4 hours, etc.
- **Price**: $75/hour ($150 minimum, $225 for 3hrs, etc.)
- **Questions**: 
  - Number of guests (1-15)
  - Type of project (podcast, interview, etc.)
  - Special equipment needs
- **Available times**: Your studio hours
- **Location**: CIC Building, Providence Innovation District, RI

### Step 3: Get Your Embed Code
1. In Calendly, go to your event type
2. Click "Share" or "Embed"
3. Choose "Inline Embed"
4. Copy the embed code

### Step 4: Replace the Placeholder
In `app/page.tsx`, find this section around line ~380:

```jsx
{/* Calendar Placeholder */}
<div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
  <div className="h-80 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
    <div className="text-center text-gray-600">
      <div className="text-6xl mb-4">📅</div>
      <div className="text-xl font-bold mb-2">Calendar Integration Ready</div>
      <div className="text-sm max-w-xs mx-auto">
        Replace this section with your Calendly embed code
      </div>
    </div>
  </div>
</div>
```

Replace it with:

```jsx
{/* Calendly Embed */}
<div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
  <div className="calendly-inline-widget" 
       data-url="YOUR_CALENDLY_URL_HERE" 
       style={{minWidth: '320px', height: '400px'}}></div>
</div>
```

### Step 5: Add Calendly Script
In `app/layout.tsx`, add the Calendly script before the closing `</body>` tag:

```jsx
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
```

## 🎨 Design Notes

The calendar section uses:
- **Cyan/Blue theme** to complement your site's purple/pink branding
- **Responsive grid layout** (calendar + benefits side by side on desktop)
- **Same glassmorphism effects** as the rest of your site
- **Professional styling** that matches your studio's high-end aesthetic

## 💡 Pro Tips

1. **Test on mobile** - The calendar will stack vertically on mobile devices
2. **Set buffer times** in Calendly to allow setup/cleanup between sessions
3. **Add intake questions** to gather project details upfront
4. **Set your timezone** to EST/EDT for Providence location
5. **Enable email reminders** to reduce no-shows

## 🔄 Alternative Option

If you prefer, you can also add a "Book Now" button that opens Calendly in a popup instead of embedding it directly.

## 📞 Current Contact Flow

Your site now offers clients **two perfect options**:

1. **📅 Calendar Booking** (Top) - For clients ready to book specific times
2. **📝 Contact Form** (Bottom) - For questions, custom requests, or consultations

This gives you the best of both worlds! 🎯 