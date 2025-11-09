# Custom Domain Setup Guide
## Setting up openassociation.org with GitHub Pages

This guide will walk you through configuring your custom domain `openassociation.org` from Namecheap for your GitHub Pages site.

---

## Part 1: Configure DNS Settings on Namecheap

### Step 1: Access DNS Settings

1. Log into your [Namecheap account](https://namecheap.com)
2. Go to **Domain List** and click **Manage** next to `openassociation.org`
3. Navigate to the **Advanced DNS** tab

### Step 2: Add DNS Records

You need to add the following records:

#### A Records (for apex domain)

Add **4 A records** pointing to GitHub's IP addresses:

| Type | Host | Value | TTL |
|------|------|-------|-----|
| A Record | @ | 185.199.108.153 | Automatic |
| A Record | @ | 185.199.109.153 | Automatic |
| A Record | @ | 185.199.110.153 | Automatic |
| A Record | @ | 185.199.111.153 | Automatic |

#### CNAME Record (for www subdomain)

Add **1 CNAME record**:

| Type | Host | Value | TTL |
|------|------|-------|-----|
| CNAME Record | www | [your-github-username].github.io. | Automatic |

> Replace `[your-github-username]` with your actual GitHub username

### Step 3: Remove Conflicting Records

- Delete any existing **A Records** for `@` (apex domain)
- Delete any existing **CNAME Records** for `www`
- Remove the **URL Redirect Record** if present (Namecheap sometimes adds this by default)

### DNS Propagation Time

⏱️ DNS changes can take anywhere from **a few minutes to 48 hours** to propagate worldwide. Typically, it takes 15-30 minutes.

---

## Part 2: Configure GitHub Repository Settings

### Step 1: Push Your Changes

The CNAME file has been created for you. Now push it to GitHub:

```bash
git add .
git commit -m "Add custom domain: openassociation.org"
git push origin main
```

### Step 2: Configure Custom Domain in GitHub

1. Go to your GitHub repository: `https://github.com/[your-username]/dpi`
2. Navigate to **Settings** → **Pages**
3. Under **Custom domain**, enter: `openassociation.org`
4. Click **Save**

### Step 3: Enable HTTPS

1. Wait for the DNS check to complete (this can take a few minutes after DNS propagates)
2. Once the DNS check passes, check the box **Enforce HTTPS**
3. GitHub will automatically provision an SSL certificate (this may take up to 24 hours)

---

## Part 3: Verification

### Check DNS Propagation

Use these tools to verify your DNS records have propagated:

- [DNS Checker](https://dnschecker.org/)
- [What's My DNS](https://whatsmydns.net/)

Enter `openassociation.org` and check for:
- **A records** should show GitHub's 4 IP addresses
- **CNAME record** for `www.openassociation.org` should show your GitHub Pages URL

### Test Your Site

After DNS propagates and GitHub configures everything:

1. Visit `http://openassociation.org` - should redirect to HTTPS
2. Visit `https://openassociation.org` - should load your site
3. Visit `https://www.openassociation.org` - should redirect to the apex domain

---

## Troubleshooting

### Issue: "Domain's DNS record could not be retrieved"

**Solution:**
- Wait longer for DNS propagation (can take up to 48 hours)
- Double-check your A records are correct
- Ensure there are no conflicting DNS records

### Issue: "CNAME already taken"

**Solution:**
- The domain is already configured for another GitHub Pages site
- Remove it from the other repository first
- Or verify you have the correct domain name

### Issue: HTTPS not available

**Solution:**
- Wait up to 24 hours for SSL certificate provisioning
- Ensure DNS is properly configured and propagated
- Try removing and re-adding the custom domain in GitHub Settings

### Issue: 404 Error on custom domain

**Solution:**
- Verify the CNAME file is in your repository at `client/public/CNAME`
- Check that it contains only `openassociation.org` (no http/https, no trailing slash)
- Wait for the next GitHub Actions deployment to complete
- Clear your browser cache

### Issue: Site loads but assets are broken

**Solution:**
- This shouldn't haopen with the current configuration (base path is set to `/`)
- If it does, check browser console for 404 errors
- Verify the build completed successfully in GitHub Actions

---

## What Has Been Configured

✅ **CNAME file created** at `client/public/CNAME`
- Contains: `openassociation.org`
- Will be included in every build and deployed to GitHub Pages

✅ **Vite config updated** in `vite.config.ts`
- Base path changed from `/dpi/` to `/`
- Works correctly with custom domain (no subdirectory needed)

---

## Next Steps

1. **Configure DNS on Namecheap** (see Part 1 above)
2. **Push your changes to GitHub**:
   ```bash
   git add .
   git commit -m "Add custom domain: openassociation.org"
   git push origin main
   ```
3. **Add custom domain in GitHub Settings** (see Part 2 above)
4. **Wait for DNS propagation** (15 minutes to 48 hours)
5. **Enable HTTPS** once DNS check passes
6. **Visit your site** at https://openassociation.org 🎉

---

## Quick Reference: Namecheap DNS Settings

Here's what your DNS settings should look like in Namecheap:

```
Type          Host    Value                          TTL
─────────────────────────────────────────────────────────────
A Record      @       185.199.108.153                Automatic
A Record      @       185.199.109.153                Automatic
A Record      @       185.199.110.153                Automatic
A Record      @       185.199.111.153                Automatic
CNAME Record  www     [your-username].github.io.     Automatic
```

---

## Additional Resources

- [GitHub Pages Custom Domain Documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Managing a custom domain for your GitHub Pages site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [Namecheap DNS Management](https://www.namecheap.com/support/knowledgebase/category/10/domains/)

---

## Support

If you encounter issues:
1. Check the troubleshooting section above
2. Verify DNS propagation with online tools
3. Check GitHub Actions logs for build/deployment errors
4. Review GitHub Pages settings in your repository

**Contact:** info@openassociation.org

---

**Last Updated:** November 9, 2025
**Domain:** openassociation.org
**Repository:** dpi

