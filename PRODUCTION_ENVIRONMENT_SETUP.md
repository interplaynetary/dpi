# Production Environment Setup 🔐

## Issue: Form Submission Not Working in Production

If you're seeing "Form submission is not configured. Please contact the administrator." on openassociation.org, it's because the Google Sheets URL environment variable isn't configured in production.

## Solution: Set Up GitHub Repository Secret

The form submission requires the `VITE_GOOGLE_SHEETS_URL` environment variable to be available during the build process. For security and proper configuration, this is stored as a GitHub repository secret.

### Step-by-Step Instructions

#### 1. Navigate to Repository Settings

1. Go to your GitHub repository: `https://github.com/[YOUR_USERNAME]/[YOUR_REPO_NAME]`
2. Click on **Settings** (top right of the repository page)
3. In the left sidebar, click on **Secrets and variables** → **Actions**

#### 2. Add the Secret

1. Click the **New repository secret** button (green button in the top right)
2. Fill in the following:
   - **Name:** `VITE_GOOGLE_SHEETS_URL`
   - **Secret:** `https://script.google.com/macros/s/AKfycbxQ-rUSwysn_2v1tNNk2-t3cCnlBtMIqPaaocrQQSCAYk3YaKpPUyb1rF_zAjB9R3ydrQ/exec`
3. Click **Add secret**

#### 3. Trigger a New Deployment

After adding the secret, you need to trigger a new deployment for the changes to take effect:

**Option A: Push a commit**
```bash
git commit --allow-empty -m "Trigger deployment with environment variable"
git push origin main
```

**Option B: Manually trigger workflow**
1. Go to the **Actions** tab in your repository
2. Click on "Deploy to GitHub Pages" workflow
3. Click **Run workflow** button
4. Select the branch (main) and click **Run workflow**

#### 4. Verify Deployment

1. Wait 2-5 minutes for the deployment to complete
2. Check the **Actions** tab to see the deployment status
3. Once complete, visit `https://openassociation.org/join` and test the form submission

## How It Works

### Local Development
- Vite reads from `.env` file automatically
- Form works because `VITE_GOOGLE_SHEETS_URL` is available

### Production (GitHub Pages)
- Environment variables must be explicitly passed during build
- GitHub Actions workflow now includes:
  ```yaml
  env:
    VITE_GOOGLE_SHEETS_URL: ${{ secrets.VITE_GOOGLE_SHEETS_URL }}
  ```
- Vite embeds the value into the built JavaScript files
- Form works because the URL is compiled into the production code

## Security Note

⚠️ **Important:** Vite environment variables prefixed with `VITE_` are **embedded in the client-side code** and are publicly visible in the browser. This is acceptable for public endpoints like Google Apps Script URLs that are designed to be called from browsers.

For truly sensitive credentials (API keys, database passwords), use server-side environment variables instead.

## Google Sheets Integration

The current Google Apps Script endpoint at:
```
https://script.google.com/macros/s/AKfycbxQ-rUSwysn_2v1tNNk2-t3cCnlBtMIqPaaocrQQSCAYk3YaKpPUyb1rF_zAjB9R3ydrQ/exec
```

This endpoint should be configured to accept POST requests and store form submissions in a Google Sheet.

### If You Need to Update the Google Sheets URL

1. Update the repository secret in GitHub Settings → Secrets and variables → Actions
2. Trigger a new deployment (see Step 3 above)

## Troubleshooting

### Form still not working after adding secret

1. **Check the Actions tab** - Make sure the deployment completed successfully
2. **Clear browser cache** - Hard refresh the page (Ctrl+Shift+R or Cmd+Shift+R)
3. **Check browser console** - Look for any JavaScript errors
4. **Verify the secret was added correctly** - Secret name must be exactly `VITE_GOOGLE_SHEETS_URL`

### How to verify the environment variable is embedded

1. Visit your production site
2. Open browser DevTools (F12)
3. Go to Sources tab
4. Search for "script.google.com" in the JavaScript files
5. You should find the URL embedded in the code

## Alternative: Hardcode the URL (Not Recommended)

If you want a quick fix without using secrets, you can hardcode the URL directly in the code:

```typescript
// In PledgeFormSection.tsx
const googleSheetsUrl = import.meta.env.VITE_GOOGLE_SHEETS_URL || 
  'https://script.google.com/macros/s/AKfycbxQ-rUSwysn_2v1tNNk2-t3cCnlBtMIqPaaocrQQSCAYk3YaKpPUyb1rF_zAjB9R3ydrQ/exec';
```

⚠️ This is not recommended for production as it makes it harder to update the URL later.

## Summary

✅ **Fixed:** GitHub Actions workflow now includes environment variable  
⚠️ **Required:** You must add the secret to your GitHub repository  
🚀 **Next:** Follow steps above to add secret and trigger deployment  

---

Questions? Contact: coalition@openassociation.org
