# 🚀 GitHub Pages Setup Guide

## 📝 Quick Setup Instructions

Your MONITOR v3.8.0 platform is now configured to deploy directly to GitHub Pages!

### Step 1: Enable GitHub Pages

1. Go to your repository: https://github.com/bob56565/MONITOR2.0
2. Click on **Settings** (top menu)
3. Click on **Pages** (left sidebar)
4. Under **Build and deployment**:
   - Source: Select **GitHub Actions**
5. Click **Save**

### Step 2: Trigger Deployment

The deployment automatically starts when you push to `main` or manually trigger it from the Actions tab.

### Step 3: Access Your Site

Once deployed (takes ~2-3 minutes), your site will be available at:

```
https://bob56565.github.io/MONITOR2.0/
```

## 🔍 Monitor Deployment Status

1. Go to the **Actions** tab in your repository
2. You'll see the "Deploy to GitHub Pages" workflow
3. Click on a run to see the build and deployment progress

## ✅ What's Configured

- ✅ Static export enabled in `next.config.mjs`
- ✅ GitHub Actions workflow created (`.github/workflows/nextjs.yml`)
- ✅ Image optimization disabled for static export
- ✅ Base path injected during the Pages build

## 🎯 Routes Available

Once deployed, you can access:

- **Landing Page**: https://bob56565.github.io/MONITOR2.0/
- **Biomarker Analysis**: https://bob56565.github.io/MONITOR2.0/analyze/
- **Clinical Dashboard**: https://bob56565.github.io/MONITOR2.0/dashboard/

## 🔧 Local Development

To test the static build locally:

```bash
npm install
npm run build
```

The static files will be in the `out/` directory.

## 📱 Sharing Your Site

Simply share this link with users:
```
https://bob56565.github.io/MONITOR2.0/
```

No deployment accounts needed - it runs directly from GitHub! 🎉

## 🆘 Troubleshooting

**If the site doesn't load:**
1. Check the Actions tab for build errors
2. Ensure GitHub Pages is enabled in Settings > Pages
3. Wait 2-3 minutes after the workflow completes
4. Clear your browser cache

**If you get 404 errors:**
- Make sure you're using the trailing slash: `/MONITOR2.0/`
- The site may take a few minutes to propagate

## 🔌 Using your own worker

- The Analyze page includes built-in demo results so the Pages build works without a backend.
- To call your Cloudflare Worker instead, set `NEXT_PUBLIC_MONITOR_WORKER_URL` as an Actions/Pages secret or in `.env.local` before building locally.
- To mirror the Pages build locally, run `NEXT_PUBLIC_BASE_PATH=/MONITOR2.0 npm run build`.

## 🔄 Updates

Any time you push to the configured branches, GitHub Actions will automatically:
1. Build your Next.js app
2. Export it as static files
3. Deploy to GitHub Pages

Your site stays up-to-date automatically! 🚀
