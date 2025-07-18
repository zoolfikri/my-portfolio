# Portfolio Content Management Guide

This portfolio is now fully dynamic! All content is managed through a single JSON file, making it incredibly easy to update your portfolio without touching any code.

## 📁 Content File Location

All your portfolio content is stored in:
```
src/data/portfolio.json
```

## 🚀 How to Update Your Portfolio

### 1. Personal Information
Update your basic information in the `personal` section:

```json
{
  "personal": {
    "name": "Your Name",           // Your full name
    "initials": "YN",              // Your initials for the avatar
    "title": "Full Stack Developer", // Your main title
    "subtitle": "Creative Problem Solver", // Alternative title
    "bio": "Your bio here...",     // About section description
    "email": "your.email@example.com", // Your email
    "avatar": "/avatar.jpg",       // Path to your avatar image
    "typewriterTexts": [           // Rotating text in hero section
      "Full Stack Developer",
      "Creative Problem Solver",
      "UI/UX Enthusiast",
      "Tech Innovator"
    ]
  }
}
```

### 2. Navigation
Customize your navigation menu:

```json
{
  "navigation": {
    "brand": "Portfolio",          // Brand name in navbar
    "links": [                     // Navigation links
      { "href": "#about", "label": "About" },
      { "href": "#skills", "label": "Skills" },
      // Add more links as needed
    ]
  }
}
```

### 3. Skills Section
Update your skills and technologies:

```json
{
  "skills": {
    "title": "Skills & Technologies",
    "categories": [
      {
        "name": "Frontend",        // Category name
        "icon": "🎨",             // Emoji icon
        "color": "blue",          // Color theme (blue, green, purple, etc.)
        "skills": [               // List of skills
          "React / Next.js",
          "TypeScript / JavaScript"
        ]
      }
    ]
  }
}
```

**Available Colors:** `blue`, `green`, `purple`, `yellow`, `red`, `orange`

### 4. Projects
Showcase your projects:

```json
{
  "projects": {
    "title": "Featured Projects",
    "items": [
      {
        "id": 1,                  // Unique ID
        "title": "Project Name",  // Project title
        "description": "Project description...", // Brief description
        "image": "/projects/project1.jpg", // Project image path
        "gradient": "from-blue-400 to-purple-500", // Background gradient
        "technologies": [         // Tech stack
          { "name": "React", "color": "blue" },
          { "name": "Node.js", "color": "green" }
        ],
        "links": {
          "demo": "https://example.com",        // Live demo URL
          "github": "https://github.com/user/repo" // GitHub URL
        }
      }
    ]
  }
}
```

**Available Gradients:**
- `from-blue-400 to-purple-500`
- `from-green-400 to-blue-500`
- `from-purple-400 to-pink-500`
- `from-yellow-400 to-orange-500`
- `from-red-400 to-pink-500`

### 5. Experience
Add your work experience:

```json
{
  "experience": {
    "title": "Experience",
    "items": [
      {
        "id": 1,
        "position": "Senior Developer",    // Job title
        "company": "Company Name",         // Company name
        "period": "2022 - Present",       // Date range
        "description": "Job description...", // What you did
        "color": "blue"                    // Border color
      }
    ]
  }
}
```

### 6. Contact Information
Update your contact details:

```json
{
  "contact": {
    "title": "Let's Work Together",
    "description": "I'm always interested in new opportunities...",
    "email": {
      "address": "your.email@example.com",
      "subject": "Let's work together!"    // Default email subject
    },
    "social": [
      {
        "name": "LinkedIn",                // Social platform name
        "url": "https://linkedin.com/in/yourprofile", // Your profile URL
        "icon": "💼"                       // Emoji icon
      }
    ]
  }
}
```

### 7. Footer
Customize the footer:

```json
{
  "footer": {
    "copyright": "© 2025 Your Name. Built with Next.js and Tailwind CSS."
  }
}
```

## 🖼️ Adding Images

### Project Images
1. Add project screenshots to the `public/projects/` directory
2. Update the `image` field in your project object:
   ```json
   "image": "/projects/your-project-screenshot.jpg"
   ```

### Avatar Image
1. Add your profile photo to the `public/` directory
2. Update the `avatar` field in personal info:
   ```json
   "avatar": "/your-avatar.jpg"
   ```

## 🎨 Customization Tips

### Colors
Use consistent color themes throughout your portfolio:
- **Blue**: Professional, trustworthy
- **Green**: Growth, success
- **Purple**: Creative, innovative
- **Orange**: Energetic, friendly
- **Red**: Bold, attention-grabbing
- **Yellow**: Optimistic, warm

### Content Writing Tips
- **Bio**: Keep it concise but engaging (2-3 sentences)
- **Project Descriptions**: Focus on the problem solved and technologies used
- **Experience**: Highlight achievements and impact
- **Typewriter Texts**: Use 3-5 short, punchy phrases

## 🔄 Making Updates

1. **Edit** the `src/data/portfolio.json` file
2. **Save** the file
3. **Refresh** your browser to see changes instantly (in development mode)

## 📱 Testing Your Changes

Always test your portfolio on different devices:
- Desktop (large screens)
- Tablet (medium screens)  
- Mobile (small screens)

## 🚀 Deployment

After updating your content:
1. **Commit** your changes to Git
2. **Push** to your repository
3. Your hosting platform (Vercel, Netlify, etc.) will automatically deploy the updates

## 💡 Pro Tips

1. **Backup**: Keep a backup of your `portfolio.json` file
2. **Version Control**: Use Git to track changes to your content
3. **Validation**: Use a JSON validator to check for syntax errors
4. **Consistency**: Maintain consistent formatting and styling
5. **SEO**: Use descriptive text for better search engine optimization

## 🐛 Troubleshooting

**Common Issues:**

1. **JSON Syntax Error**: Check for missing commas, quotes, or brackets
2. **Images Not Loading**: Ensure image paths start with `/` and files exist in `public/`
3. **Colors Not Working**: Use only the supported color names listed above
4. **Content Not Updating**: Hard refresh your browser (Ctrl+F5 or Cmd+Shift+R)

---

That's it! Your portfolio is now completely data-driven. Update the JSON file anytime you want to refresh your content, add new projects, or update your experience. No coding required! 🎉
