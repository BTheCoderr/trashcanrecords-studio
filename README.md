# 🎙️ Trashcan Records Studio

<!-- repo-intro:start -->
**Project snapshot:** Trashcan Records Studio is a polished media-studio website for showcasing recording services, studio visuals, booking paths, and a strong dark/neon brand experience.

**What it demonstrates:** Next.js · TypeScript · Tailwind CSS · media/booking UX · responsive brand design.
<!-- repo-intro:end -->

[![Next.js](https://img.shields.io/badge/Next.js-15.3.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/)

**Professional podcast & media studio website for Trashcan Records Studio in Providence, RI**

A modern, responsive website built with Next.js 15 and Tailwind CSS, featuring a sleek dark theme with neon accents that reflects the cutting-edge nature of our podcast recording studio.

---

## ✨ Features

- 🎨 **Ultra-Modern Design** - Dark theme with neon gradient accents
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes  
- ⚡ **Performance Optimized** - Built with Next.js 15 and Turbopack
- 🎙️ **Professional Studio Showcase** - High-quality images and detailed features
- 💫 **Smooth Animations** - Glassmorphism effects and hover interactions
- 📞 **Direct Booking Integration** - Seamless Peerspace integration
- 🚀 **SEO Optimized** - Meta tags and structured data

## 🏢 About Trashcan Records Studio

Located in Providence's Innovation District within the CIC building, Trashcan Records Studio provides a professional podcast recording space perfect for:

- 🎧 Podcast recordings
- 🎥 Video content creation  
- 💼 Professional meetings
- 🎉 Intimate events

**Pricing:** $75/hour with 2-hour minimum | **Capacity:** Up to 15 guests

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| [Next.js](https://nextjs.org/) | React Framework | 15.3.4 |
| [TypeScript](https://www.typescriptlang.org/) | Type Safety | 5.0+ |
| [Tailwind CSS](https://tailwindcss.com/) | Styling | 3.4.0 |
| [React](https://reactjs.org/) | UI Library | 19.0+ |
| [Turbopack](https://turbo.build/pack) | Build Tool | Latest |

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/BTheCoderr/trashcanrecords-studio.git

# Navigate to project directory
cd trashcanrecords-studio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📦 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
npm run type-check # Run TypeScript check
```

## 🎨 Design System

### Color Palette
- **Primary**: Purple gradients (`from-purple-600 to-pink-600`)
- **Secondary**: Cyan accents (`from-cyan-400 to-blue-400`)
- **Background**: Black to dark gray gradients
- **Text**: White with gray variations

### Typography
- **Headers**: Bold, uppercase with gradient text effects
- **Body**: Clean, readable with proper spacing
- **Accents**: Neon colors for highlights and CTAs

## 📁 Project Structure

```
trashcanrecords-studio/
├── app/                    # Next.js 15 App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   └── Footer.tsx         # Site footer
├── public/               # Static assets
│   └── images/           # Studio photos and media
├── tailwind.config.ts    # Tailwind configuration
└── next.config.ts        # Next.js configuration
```

## 📸 Studio Gallery

The website features professional photos of our studio setup:
- 🎙️ Professional podcast recording equipment
- 🎧 Acoustic treatment and soundproofing
- 💺 Comfortable seating for up to 15 guests
- 🖥️ Modern workspace with high-speed internet
- 🎬 Video recording capabilities

## 📞 Contact & Booking

- **Phone**: [(401) 217-9799](tel:4012179799)
- **Email**: [trashcanrecords514@gmail.com](mailto:trashcanrecords514@gmail.com)
- **Location**: CIC Building, Providence Innovation District, RI
- **Book Online**: [Peerspace Listing](https://www.peerspace.com/pages/listings/686424eddba671f73a7afbc9)

## 📧 Netlify Forms Setup

This project includes a fully configured contact form that works with Netlify Forms:

### Features
- ✅ **Spam Protection** - Honeypot field to prevent bot submissions
- ✅ **Form Validation** - Required fields with proper validation
- ✅ **Thank You Page** - Custom redirect after submission
- ✅ **Mobile Optimized** - Responsive form design

### Email Notifications Setup

After deploying to Netlify:

1. **Go to your Netlify dashboard** → Site Settings → Forms
2. **Enable form notifications** for the "contact" form
3. **Add email notifications**:
   - Go to Forms → Form notifications
   - Click "Add notification" → "Email notification"
   - Enter your email address
   - Choose "New form submission" trigger

### Form Fields Included
- **Name** (required)
- **Email** (required) 
- **Phone** (optional)
- **Preferred Date** (for booking)
- **Message** (required)

### Testing the Form
After deployment, test the form by:
1. Filling out the contact form on your live site
2. Checking that you receive the email notification
3. Verifying the thank you page displays correctly

## 🚀 Deployment

This project is optimized for deployment on **Netlify** (recommended for forms) or Vercel:

### Netlify Deployment (Recommended)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/BTheCoderr/trashcanrecords-studio)

### Vercel Deployment  
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/BTheCoderr/trashcanrecords-studio)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/)
- Studio photography by Trashcan Records Studio
- Hosted on [Vercel](https://vercel.com/)

---

<div align="center">

**Made with ❤️ for the Providence creative community**

[🎙️ Book a Session](https://www.peerspace.com/pages/listings/686424eddba671f73a7afbc9) • [📞 Call Us](tel:4012179799) • [📧 Email Us](mailto:trashcanrecords514@gmail.com)

</div>
