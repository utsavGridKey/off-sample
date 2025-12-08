# Deployment Guide for offsocial.in

## Important: Deploy the BUILD folder, NOT the source code!

### Steps to Deploy:

1. **Build the application** (already done):
   ```
   npm run build
   ```

2. **Upload ONLY the contents of the `build` folder** to your web server:
   - All files and folders inside `d:\WORK\OFF_SOCIAL\WEBSITE\off-social-app\build\`
   - This includes:
     - index.html
     - favicon.ico
     - manifest.json
     - .htaccess
     - static/ folder
     - All other files in the build folder

3. **Server Configuration**:
   - Make sure your server's document root points to where you uploaded the build files
   - The `.htaccess` file (already in the build folder) handles client-side routing for Apache servers
   - For other servers (Nginx, etc.), configure similar routing rules

4. **Common Mistakes to Avoid**:
   - ❌ DO NOT upload the entire project folder
   - ❌ DO NOT upload src/, public/, node_modules/, or package.json
   - ✅ ONLY upload the contents of the build/ folder

5. **Verify Deployment**:
   - After uploading, check that:
     - https://offsocial.in/favicon.ico loads correctly
     - https://offsocial.in/manifest.json loads correctly
     - No %PUBLIC_URL% placeholders appear in the browser

### File Structure on Server:
Your server root should look like this:
```
/
├── index.html
├── favicon.ico
├── manifest.json
├── .htaccess
├── static/
│   ├── css/
│   ├── js/
│   └── media/
└── (other build files)
```

### If Using FTP/cPanel:
1. Navigate to your public_html or www directory
2. Delete old files if necessary
3. Upload all files from the build folder
4. Maintain the folder structure (especially the static folder)

## SPA Routing Configuration

### For Netlify:
The project includes:
- `_redirects` file in the public folder (automatically copied to build)
- `netlify.toml` configuration file
These files ensure that all routes redirect to index.html for client-side routing.

### For Apache Servers (like your offsocial.in):
The `.htaccess` file in the build folder handles routing. Make sure it's uploaded.

### For Other Hosting Providers:
- **Vercel**: Add a `vercel.json` with rewrites configuration
- **GitHub Pages**: Use HashRouter instead of BrowserRouter
- **Nginx**: Configure server block to try_files $uri /index.html
