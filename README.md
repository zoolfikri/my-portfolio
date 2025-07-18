# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Modern Design**: Clean, professional layout with smooth animations
- 📱 **Fully Responsive**: Optimized for all devices and screen sizes
- 🌙 **Dark Mode**: Automatic dark/light theme support
- ⚡ **Fast Performance**: Built with Next.js 15 and optimized for speed
- 🎭 **Interactive Elements**: Typewriter animation and smooth scrolling
- 📝 **Easy to Customize**: Well-structured code for easy personalization

## Sections

1. **Hero/About** - Introduction and personal branding
2. **Skills** - Technical skills and expertise
3. **Projects** - Portfolio showcase with project cards
4. **Experience** - Professional background timeline
5. **Contact** - Contact information and social links

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to see the result.

## Customization Guide

### Personal Information

Edit the following in `src/app/page.tsx`:

- **Name**: Replace "Your Name" in the hero section
- **Initials**: Replace "YN" in the avatar circle
- **Bio**: Update the description text
- **Email**: Update the contact email link

### Skills

Update the skills section with your technologies:
- Frontend skills
- Backend skills  
- Tools and platforms

### Projects

Replace the example projects with your own:
- Project titles and descriptions
- Technology tags
- Live demo and GitHub links
- Project images (add to `/public` folder)

### Experience

Update the experience timeline:
- Job titles and companies
- Date ranges
- Job descriptions
- Company colors (border-left colors)

### Contact & Social Links

Update contact information and social media links:
- Email address
- LinkedIn, GitHub, Portfolio links
- Replace emoji icons with actual social media icons if desired

### Styling

The design uses Tailwind CSS. Key customization points:

- **Colors**: Modify the color scheme by updating Tailwind classes
- **Fonts**: Update font families in `tailwind.config.js`
- **Spacing**: Adjust section padding and margins
- **Animations**: Customize the typewriter effect in `TypewriterText.tsx`

### Adding New Sections

To add new sections:

1. Create the section in `page.tsx`
2. Add navigation link to both desktop and mobile nav
3. Update the anchor links
4. Style with Tailwind CSS

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main portfolio page
└── components/
    ├── MobileNav.tsx        # Mobile navigation
    └── TypewriterText.tsx   # Animated text component
```

## Technologies Used

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI**: React 19
- **Build Tool**: Turbopack

## Performance

- Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)
- Core Web Vitals: Optimized
- Image Optimization: Next.js built-in image optimization
- Code Splitting: Automatic with Next.js

## Browser Support

- Chrome (latest)
- Firefox (latest)  
- Safari (latest)
- Edge (latest)

## Contributing

Feel free to fork this project and make it your own! If you have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Next Steps

1. **Add Real Content**: Replace placeholder content with your actual information
2. **Add Images**: Include project screenshots and a professional headshot
3. **SEO Optimization**: Add meta tags, Open Graph images, and structured data
4. **Analytics**: Set up Google Analytics or similar tracking
5. **Contact Form**: Add a working contact form with backend integration
6. **Blog Section**: Consider adding a blog section for articles and thoughts
7. **Resume Download**: Add a downloadable PDF resume
8. **Testimonials**: Include client or colleague testimonials

Happy coding! 🚀
