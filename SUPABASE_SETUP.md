# Supabase Blog Setup Guide

## ✅ What's Been Done

Your portfolio blog has been successfully migrated from Firebase to Supabase! Here's what was implemented:

### 1. **Installation & Configuration**
- ✅ Installed `@supabase/supabase-js` package
- ✅ Removed Firebase dependencies
- ✅ Created `supabase-config.js` with your Supabase credentials

### 2. **Database Setup**
- ✅ Created `posts` table with the following columns:
  - `id` (UUID, primary key)
  - `title` (text)
  - `post_text` (text)
  - `hashtag` (text)
  - `author_id` (UUID, references auth.users)
  - `author_name` (text)
  - `created_at` (timestamp)
- ✅ Enabled Row Level Security (RLS)
- ✅ Set up policies for read, insert, update, and delete operations

### 3. **Features Implemented**
- ✅ Google OAuth Authentication
- ✅ User signup/login
- ✅ Create new blog posts
- ✅ Edit your own posts (NEW!)
- ✅ Delete your own posts
- ✅ View all blog posts
- ✅ Author verification (users can only edit/delete their own posts)

---

## 🔧 Required: Google OAuth Setup in Supabase

To enable Google sign-in, you need to configure OAuth in your Supabase project:

### Step 1: Get Google OAuth Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Navigate to **APIs & Services** > **Credentials**
4. Click **Create Credentials** > **OAuth 2.0 Client ID**
5. Configure the OAuth consent screen if you haven't already
6. For Application type, select **Web application**
7. Add these authorized redirect URIs:
   ```
   https://dotfokkctshikgxxavku.supabase.co/auth/v1/callback
   http://localhost:3000/blogs (for local testing)
   ```
8. Click **Create** and copy your:
   - Client ID
   - Client Secret

### Step 2: Configure Supabase

1. Go to your [Supabase Dashboard](https://app.supabase.com/)
2. Select your project
3. Navigate to **Authentication** > **Providers**
4. Find **Google** in the list
5. Enable the Google provider
6. Paste your Google Client ID and Client Secret
7. Save the configuration

### Step 3: Update Site URL (Important!)

1. In Supabase Dashboard, go to **Authentication** > **URL Configuration**
2. Set **Site URL** to your production URL (e.g., `https://yourportfolio.com`)
3. Add **Redirect URLs**:
   ```
   http://localhost:3000/blogs
   https://yourportfolio.com/blogs
   ```

---

## 🚀 How to Use

### For Development (Local)
1. Start your development server:
   ```bash
   npm start
   ```
2. Navigate to `/login`
3. Click "Sign In with Google"
4. After authentication, you'll be redirected to `/blogs`

### User Actions

**Anonymous Users (Not Logged In):**
- ✅ Can view all blog posts
- ❌ Cannot create, edit, or delete posts

**Logged In Users:**
- ✅ Can view all blog posts
- ✅ Can create new blog posts
- ✅ Can edit their own posts (Edit button appears)
- ✅ Can delete their own posts (Delete button appears)

---

## 📝 How It Works

### Authentication Flow
1. User clicks "Sign In with Google" on `/login`
2. Supabase redirects to Google OAuth
3. User authorizes the app
4. Google redirects back to your app with auth token
5. Supabase creates/updates user in the database
6. User is redirected to `/blogs`

### Post Management
- **Create**: User fills form → Data inserted with their `author_id`
- **Read**: Fetch all posts ordered by `created_at` (newest first)
- **Edit**: User clicks Edit → Form pre-filled → Updates their post
- **Delete**: User clicks Delete → Post removed (only if they're the author)

### Security (Row Level Security)
- Anyone can read posts
- Only authenticated users can create posts
- Users can only update/delete their own posts
- All enforced at the database level!

---

## 💰 Supabase Free Tier

**What you get for FREE:**
- ✅ 500 MB database space
- ✅ 1 GB file storage
- ✅ 50,000 monthly active users
- ✅ 2 GB bandwidth
- ✅ Unlimited API requests
- ✅ Social OAuth providers (Google, GitHub, etc.)
- ✅ Row Level Security
- ✅ No credit card required!

**Perfect for your portfolio blog!** 🎉

---

## 🔍 File Changes Summary

### New Files Created:
- `src/pages/Blogs/supabase-config.js` - Supabase client configuration
- `src/pages/Blogs/EditPost.jsx` - Edit post component
- `SUPABASE_SETUP.md` - This guide!

### Modified Files:
- `src/App.js` - Added Supabase auth state management & EditPost route
- `src/pages/Blogs/Login.jsx` - Google OAuth with Supabase
- `src/pages/Blogs/CreatePost.jsx` - Create posts in Supabase
- `src/pages/Blogs/Blogs.jsx` - Sign out with Supabase
- `src/pages/Blogs/BlogsData.jsx` - Fetch/delete posts from Supabase + Edit button
- `package.json` - Removed Firebase, added Supabase

### Removed:
- `firebase` package and all Firebase dependencies
- Firebase configuration (kept the file for reference, but it's not used)

---

## 🐛 Troubleshooting

### Issue: "Sign In" button does nothing
**Solution:** Make sure you've configured Google OAuth in Supabase (see Step 2 above)

### Issue: Can't create posts
**Solution:** 
1. Check if you're logged in
2. Verify the `posts` table exists in Supabase
3. Check browser console for errors

### Issue: "Error signing in with Google"
**Solution:**
1. Verify Google OAuth credentials in Supabase
2. Check redirect URLs are correct
3. Make sure Google OAuth consent screen is configured

### Issue: Can see Edit/Delete buttons on other users' posts
**Solution:** This shouldn't happen! RLS policies prevent this. Clear your browser cache and re-login.

---

## 📚 Additional Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase Auth Guide](https://supabase.com/docs/guides/auth)
- [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)
- [Google OAuth Setup](https://supabase.com/docs/guides/auth/social-login/auth-google)

---

## 🎯 Next Steps

1. **Configure Google OAuth** (Most important - follow Step 1 & 2 above)
2. Test locally with `npm start`
3. Create a test blog post
4. Try editing and deleting your post
5. Deploy to production (Netlify/Vercel)
6. Update Supabase redirect URLs with your production domain

---

## 🎨 Future Enhancements (Optional)

- Add rich text editor for blog posts
- Add image upload functionality
- Add comments system
- Add post categories/tags
- Add search functionality
- Add pagination for posts
- Add user profiles
- Add post likes/reactions

---

**Your blog is now running on Supabase - 100% FREE! 🚀**

Need help? Check the Supabase docs or feel free to ask!
