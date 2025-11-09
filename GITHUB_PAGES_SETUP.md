# GitHub Pages Deployment Guide

## Quick Start

Your FreeAssociationLink site is now ready for GitHub Pages! 🎉

### Step 1: Enable GitHub Pages

1. Go to your GitHub repository
2. Navigate to **Settings** → **Pages**
3. Under "Build and deployment", select **Source: GitHub Actions**

### Step 2: Push to GitHub

```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main
```

That's it! The GitHub Actions workflow will automatically build and deploy your site.

### Step 3: Access Your Site

After the deployment completes (check the Actions tab), your site will be live at:

```
https://[your-github-username].github.io/FreeAssociationLink/
```

## What Was Changed

### Files Created

1. **`.github/workflows/deploy.yml`** - GitHub Actions workflow for automatic deployment
2. **`client/404.html`** - Handles client-side routing for SPAs on GitHub Pages
3. **`client/public/.nojekyll`** - Disables Jekyll processing
4. **`GITHUB_PAGES_SETUP.md`** - This guide

### Files Modified

1. **`vite.config.ts`** - Added base path configuration for GitHub Pages
2. **`client/index.html`** - Added SPA routing redirect script
3. **`package.json`** - Added `build:gh-pages` and `preview:gh-pages` scripts
4. **`README.md`** - Added comprehensive GitHub Pages deployment section

## Configuration Options

### Custom Domain

If you're using a custom domain:

1. Update `vite.config.ts`:
   ```typescript
   const base = process.env.GITHUB_PAGES === 'true' 
     ? (process.env.BASE_PATH || '/')  // Change '/FreeAssociationLink/' to '/'
     : '/';
   ```

2. Add a `CNAME` file in `client/public/` with your domain:
   ```
   yourdomain.com
   ```

### Different Repository Name

If your repository name is different from "FreeAssociationLink":

Update `vite.config.ts`:
```typescript
const base = process.env.GITHUB_PAGES === 'true' 
  ? (process.env.BASE_PATH || '/your-repo-name/')  // Change this
  : '/';
```

## Testing Locally

Before pushing, you can test the GitHub Pages build locally:

```bash
bun run preview:gh-pages
```

This builds with the same configuration as GitHub Pages and starts a local preview server.

## Workflow Details

The GitHub Actions workflow:

1. **Triggers on:**
   - Every push to the `main` branch
   - Manual trigger via "Run workflow" button

2. **Build Process:**
   - Checks out the code
   - Installs dependencies with npm
   - Builds the client with Vite (sets `GITHUB_PAGES=true`)
   - Uploads the `dist/public` directory

3. **Deploy Process:**
   - Deploys to GitHub Pages
   - Provides the deployment URL

## How Client-Side Routing Works

GitHub Pages serves static files and returns 404 for non-existent files. For SPAs with client-side routing:

1. **`404.html`**: When GitHub Pages encounters a route like `/about`, it serves `404.html`
2. **Redirect Script**: The script in `404.html` captures the URL and redirects to `index.html` with the path
3. **Index Script**: The script in `index.html` reads the path and lets Wouter handle the routing
4. **Result**: All routes work seamlessly, just like on a local dev server

## Troubleshooting

### Assets not loading (404 errors)

**Problem:** CSS, JS, or images show 404 errors

**Solution:** The base path doesn't match your repository structure

1. Check your repository name
2. Update `vite.config.ts` with the correct base path
3. Rebuild and redeploy

### Routes show 404 page

**Problem:** Routes like `/about` show GitHub's 404 page

**Solution:** Ensure the workflow is complete

1. Check the Actions tab for deployment status
2. Verify `404.html` exists in the deployed site
3. Wait a few minutes for GitHub Pages to update

### Build fails in GitHub Actions

**Problem:** The workflow fails during the build step

**Solution:** Check the error logs

1. Go to the Actions tab
2. Click on the failed workflow
3. Check the build logs for specific errors
4. Common issues:
   - Missing dependencies: Ensure `package.json` is up to date
   - Type errors: Run `bun run check` locally first
   - Memory issues: Simplify the build or reduce bundle size

### Old version showing

**Problem:** Changes aren't visible after deployment

**Solution:** Clear cache and wait for propagation

1. Hard refresh the page (Ctrl+Shift+R or Cmd+Shift+R)
2. Clear browser cache
3. Wait a few minutes for CDN cache to clear
4. Check if the workflow completed successfully

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vite Static Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [SPA GitHub Pages Solution](https://github.com/rafgraph/spa-github-pages)

## Need Help?

If you encounter issues:

1. Check the GitHub Actions logs in the Actions tab
2. Review the troubleshooting section above
3. Open an issue on the repository
4. Contact: info@openassociation.org

---

**Happy Deploying! 🚀**

