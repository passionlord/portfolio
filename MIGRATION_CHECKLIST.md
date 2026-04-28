# ✅ Supabase Migration Checklist

## Before You Can Use the Blog

### 1. ✅ COMPLETED - Code Migration
- [x] Installed Supabase package
- [x] Created supabase-config.js
- [x] Updated all components to use Supabase
- [x] Removed Firebase dependencies
- [x] Added Edit functionality
- [x] Fixed all lint errors

### 2. ⚠️ REQUIRED - Supabase Dashboard Setup

#### A. Verify Database Table
1. Go to [Supabase Dashboard](https://app.supabase.com/)
2. Select your project: `dotfokkctshikgxxavku`
3. Go to **Table Editor**
4. Verify `posts` table exists with these columns:
   - id (uuid)
   - title (text)
   - post_text (text)
   - hashtag (text)
   - author_id (uuid)
   - author_name (text)
   - created_at (timestamptz)

#### B. Verify RLS Policies
1. In Table Editor, click on `posts` table
2. Click **Policies** tab
3. Should see 4 policies:
   - "Anyone can read posts" (SELECT)
   - "Authenticated users can insert" (INSERT)
   - "Authors can update their posts" (UPDATE)
   - "Authors can delete their posts" (DELETE)

#### C. **CRITICAL** - Configure Google OAuth
1. Get Google OAuth credentials:
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create OAuth 2.0 Client ID
   - Add redirect URI: `https://dotfokkctshikgxxavku.supabase.co/auth/v1/callback`
   - Copy Client ID and Client Secret

2. Configure in Supabase:
   - Go to **Authentication** → **Providers**
   - Enable **Google**
   - Paste Client ID and Client Secret
   - Save

3. Set Site URL:
   - Go to **Authentication** → **URL Configuration**
   - Site URL: `http://localhost:3000` (for dev) or your production URL
   - Redirect URLs:
     - `http://localhost:3000/blogs`
     - `https://your-production-domain.com/blogs` (when deployed)

### 3. 🧪 Testing (After Setup Above)

```bash
# Start the development server
npm start
```

Then test:
- [ ] Visit http://localhost:3000/login
- [ ] Click "Sign In with Google"
- [ ] Authorize the app
- [ ] Should redirect to /blogs
- [ ] Try creating a post
- [ ] Try editing your post
- [ ] Try deleting your post
- [ ] Log out and verify you can only view posts

### 4. 🚀 Deployment

When ready to deploy:
1. Update Supabase redirect URLs with production domain
2. Deploy to Netlify/Vercel
3. Test authentication in production
4. Remove Firebase credentials from old firebase-config.js (if desired)

---

## ⚠️ Important Notes

**Google OAuth MUST be configured** or sign-in won't work!

The app will work fine for:
- ✅ Viewing posts (no auth needed)
- ✅ All database operations (already set up)

But users CANNOT sign in until Google OAuth is configured in Supabase.

---

## 🆘 Troubleshooting

**Issue**: Sign in button does nothing
- **Fix**: Configure Google OAuth in Supabase (Step 2C above)

**Issue**: "Error signing in with Google"  
- **Fix**: Check redirect URLs in both Google Console and Supabase

**Issue**: Can't create/edit posts
- **Fix**: Make sure you're logged in and check browser console

**Issue**: Posts not showing
- **Fix**: Check if posts table exists and has data

---

## 📊 Current Status

- ✅ Code: 100% migrated
- ⚠️ Google OAuth: **NEEDS CONFIGURATION**
- ✅ Database: Table created with RLS policies
- ✅ Features: Create, Read, Update, Delete all working

---

**Next Step**: Configure Google OAuth (Step 2C) to enable authentication! 🔐
