# How to Update the Sand Springs Methodist Website

This guide is written for non-technical users. You do not need to understand code to follow these steps.

---

## Adding Photos to the Gallery

1. Open the folder: `content/photos/`
2. Drag and drop your `.jpg` or `.png` photo files into that folder
3. Follow the steps below to publish your changes

---

## Adding or Updating Leadership Photos

1. Open the folder: `content/leadership/`
2. Add a photo file (square crop works best, e.g. `pastor.jpg`)
3. Follow the steps below to publish your changes

---

## Publishing Your Changes to the Website

After adding photos or making any updates, run these three commands in the Terminal from the project folder:

**Step 1 — Stage your changes:**
```
git add .
```

**Step 2 — Describe what you changed:**
```
git commit -m "Added new church photos"
```
(Replace the message with whatever you changed — e.g. "Updated pastor photo")

**Step 3 — Push to GitHub:**
```
git push
```

That's it. Railway will automatically detect the push and update the live website within a minute or two.

---

## Swapping the YouTube Sermon Playlist

1. Open: `app/components/LatestSermon.tsx`
2. Find this line near the top:
   ```
   const youtubePlaylistId = "PLrEnkel7L3J_placeholder";
   ```
3. Replace the placeholder ID with your real YouTube playlist ID
4. Save the file, then run the three publish commands above

---

## Updating the Online Giving Link

1. Open: `app/components/Giving.tsx`
2. Find this line:
   ```
   href="#"
   ```
3. Replace `#` with your actual giving platform URL (e.g. from Tithe.ly or Pushpay)
4. Save the file, then run the three publish commands above

---

## Need Help?

Open a conversation with Claude Code and describe what you want to change. Claude will make the edit for you and explain what was done.
