# JourneyWell Website Deployment Guide

## Pre-Deployment Checklist

### 1. Local Testing
- [ ] Run `npm run validate` to check build requirements
- [ ] Run `npm run build` to test build process
- [ ] Run `npm run start` to test production build locally
- [ ] Test all routes: `/`, `/debug`, `/health`
- [ ] Check console for any errors

### 2. Code Quality
- [ ] Run `npm run lint` and fix any issues
- [ ] Run `npm run type-check` for TypeScript errors
- [ ] Commit all changes to git
- [ ] Push to main branch

### 3. Vercel Configuration
- [ ] Ensure `vercel.json` is properly configured
- [ ] Check `next.config.js` settings
- [ ] Verify environment variables in Vercel dashboard

## Deployment Process

### Automatic Deployment (Recommended)
1. Push code to main branch: `git push origin main`
2. Vercel automatically builds and deploys
3. Check deployment status in Vercel dashboard
4. Test the live site

### Manual Deployment
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `npm run deploy`
3. Follow prompts to configure project
4. Test the deployment

## Troubleshooting Common Issues

### 404 Error on Vercel
**Symptoms:** Site builds successfully but shows 404 NOT_FOUND error

**Solutions:**
1. **Check the correct URL:**
   - Go to Vercel dashboard
   - Find your project
   - Click "Visit" on the latest deployment
   - URL format: `project-name-git-branch-username.vercel.app`

2. **Clear browser cache:**
   - Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
   - Try incognito/private browsing mode

3. **Check domain configuration:**
   - Verify domain is properly linked in Vercel
   - Check DNS settings if using custom domain

4. **Redeploy:**
   - Go to Vercel dashboard
   - Click "Redeploy" on latest deployment

### Build Failures
**Check these common issues:**
- TypeScript errors
- Missing dependencies
- Incorrect file paths
- Environment variable issues

### Routing Issues
**If pages don't load:**
- Verify app directory structure
- Check file naming conventions
- Ensure proper export statements
- Test locally first

## Verification Steps

After deployment, verify these work:
- [ ] Homepage loads: `https://your-site.vercel.app/`
- [ ] Debug page: `https://your-site.vercel.app/debug`
- [ ] Health check: `https://your-site.vercel.app/health`
- [ ] 404 page: `https://your-site.vercel.app/nonexistent`

## Performance Checks

- [ ] Lighthouse score > 90
- [ ] Core Web Vitals in green
- [ ] Images load properly
- [ ] No console errors

## Monitoring

### Regular Checks
- Monitor Vercel dashboard for build failures
- Check site uptime and performance
- Review error logs in Vercel

### Analytics Setup (Future)
- Google Analytics
- Vercel Analytics
- Error tracking (Sentry)

## Emergency Procedures

### If site goes down:
1. Check Vercel status page
2. Review recent deployments
3. Rollback to previous working version
4. Contact support if needed

### Rollback Process:
1. Go to Vercel dashboard
2. Find previous working deployment
3. Click "Promote to Production"

## Contact Information

- **Vercel Support:** https://vercel.com/support
- **Project Repository:** https://github.com/tim01345/jw-webpage
- **Team Contact:** team@journeywell.io

---

## Quick Commands Reference

```bash
# Validate build
npm run validate

# Build locally
npm run build

# Test production build
npm run start

# Deploy to Vercel
npm run deploy

# Check logs
vercel logs [deployment-url]
``` 