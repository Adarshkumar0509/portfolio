# My Portfolio — Setup & Deploy Guide

## Project Structure
```
portfolio/
├── public/
│   └── index.html          ← page title, meta tags
├── src/
│   ├── data.js             ← ⭐ EDIT THIS to update your info
│   ├── App.js              ← main component (don't touch unless customizing)
│   ├── index.js            ← entry point (don't touch)
│   └── index.css           ← global styles (don't touch)
├── package.json
└── README.md
```

---

## Step 1 — Install & run locally

Make sure you have Node.js installed (https://nodejs.org — download LTS version).

```bash
cd portfolio
npm install
npm start
```

Your site opens at http://localhost:3000

---

## Step 2 — Update your content

Open `src/data.js` — this is the only file you need to edit:

- **Your name, tagline, description** → `PERSONAL` object at the top
- **Projects** → `PROJECTS` array — add/remove/edit objects
- **Skills** → `SKILLS` object — add/remove items per category
- **Blog posts** → `BLOG_POSTS` array
- **Contact info** → `PERSONAL.contact`

---

## Step 3 — Resume upload

The resume section lets visitors upload and download your PDF.
For a permanent link instead, host your PDF on Google Drive:
1. Upload PDF to Google Drive
2. Right-click → Share → Anyone with link → Copy link
3. Replace the upload section in App.js with a direct `<a href="YOUR_LINK">` button

---

## Step 4 — Wire up the contact form (EmailJS)

So you receive emails when someone fills the form:

```bash
npm install @emailjs/browser
```

In `src/App.js`, find the `handleForm` function.
Replace this line:
```js
await new Promise(r => setTimeout(r, 1200));
```
With:
```js
await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form, 'YOUR_PUBLIC_KEY');
```

Get your keys at https://emailjs.com (free plan = 200 emails/month)

---

## Step 5 — Deploy to Vercel (free, 2 minutes)

1. Push your project to GitHub:
```bash
git init
git add .
git commit -m "portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

2. Go to https://vercel.com → Sign in with GitHub
3. Click "New Project" → Import your repo
4. Click "Deploy" — done, your site is live

Every time you push to GitHub, Vercel auto-deploys.

---

## Updating your portfolio later

Just edit `src/data.js`, then:
```bash
git add .
git commit -m "updated projects"
git push
```
Vercel redeploys automatically in ~30 seconds.
