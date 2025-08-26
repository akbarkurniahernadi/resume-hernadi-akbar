# 🚀 Deployment Guide - Akbar Portfolio Website

## Quick Deploy to Vercel (Recommended)

### Option 1: Deploy via Vercel Website (Easiest)

1. **Prepare your files**
   - Ensure all files are in the project folder
   - Check that `vercel.json` is present

2. **Go to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub, GitLab, or Bitbucket

3. **Deploy**
   - Click "New Project"
   - Drag and drop your entire project folder
   - Or upload as ZIP file
   - Click Deploy

4. **Done!**
   - Your website will be live in seconds
   - Get a custom domain like `akbar-portfolio.vercel.app`

### Option 2: Deploy via GitHub (Recommended for updates)

1. **Create GitHub Repository**
   ```bash
   # In your project folder
   git init
   git add .
   git commit -m "Initial portfolio website"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import from GitHub
   - Select your repository
   - Deploy

3. **Automatic Updates**
   - Every push to main branch automatically deploys
   - Perfect for ongoing updates

### Option 3: Vercel CLI (For Developers)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login and Deploy**
   ```bash
   # In your project folder
   vercel login
   vercel
   ```

3. **Production Deploy**
   ```bash
   vercel --prod
   ```

## 🧪 Local Testing

### Using Python (Built-in)
```bash
# In project folder
python -m http.server 3000
# Visit http://localhost:3000
```

### Using Node.js
```bash
# Install dependencies
npm install

# Start development server
npm start
# Automatically opens http://localhost:3000
```

### Using Live Server (VS Code Extension)
- Install "Live Server" extension
- Right-click `index.html`
- Select "Open with Live Server"

## 📋 Pre-Deployment Checklist

- [ ] All HTML files load without errors
- [ ] CSS animations work properly
- [ ] JavaScript functionality is working
- [ ] Contact form validates correctly
- [ ] All links work (navigation, social media)
- [ ] Images display correctly (if any added)
- [ ] Mobile responsive design works
- [ ] Cross-browser compatibility checked

## 🔧 Customization Before Deploy

### Update Contact Information
Edit these files with your actual contact details:
- `index.html` - Hero section email
- `about.html` - Personal details
- `contact.html` - Contact form and information

### Add Your Photo
Replace the avatar placeholders with your actual photo:
- Update `.avatar-placeholder` and `.avatar-large` in CSS
- Add your photo to project and update src attributes

### Custom Domain (Optional)
1. Buy a domain from any registrar
2. In Vercel dashboard, go to your project
3. Settings → Domains
4. Add your custom domain
5. Follow DNS configuration instructions

## 🌟 Features Included

✅ **Fully Responsive Design**
✅ **3D Animations & Effects**
✅ **Glassmorphism UI**
✅ **Interactive Contact Form**
✅ **Professional Timeline**
✅ **Skills Visualization**
✅ **SEO Optimized**
✅ **Fast Loading**
✅ **Modern Browser Support**

## 📱 Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔄 Future Updates

To update your live website:

1. **If deployed via GitHub:**
   - Make changes locally
   - Commit and push to GitHub
   - Vercel automatically redeploys

2. **If deployed via drag & drop:**
   - Make changes locally
   - Re-upload to Vercel dashboard

## 🆘 Troubleshooting

**Website not loading?**
- Check `vercel.json` configuration
- Ensure all file paths are correct
- Check browser console for errors

**Animations not working?**
- Verify CSS files are loading
- Check browser compatibility
- Test in incognito mode

**Contact form not submitting?**
- This is a static demo form
- For working form, integrate with backend service
- Consider using Netlify Forms or Formspree

## 📞 Need Help?

If you encounter any issues:
1. Check the browser console for errors
2. Verify all files are uploaded correctly
3. Test in different browsers
4. Contact: akbar.kurnia.hernadi@example.com

---

🎉 **Ready to go live? Your modern portfolio awaits!**