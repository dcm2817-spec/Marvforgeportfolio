# Marvellous Udoko — Personal Portfolio

A single-page portfolio built with plain HTML5, CSS3 and vanilla JavaScript. No framework, build step, backend, API key or environment variable is needed.

## Files (all in one place, no folders)

```
index.html           All page content
style.css            Colours, layout, responsive rules
script.js            Mobile menu, reveal animation, year, image fallbacks
marvforge-logo.png   Marvforge MF logo (header + footer)
profile.jpg          Hero photograph
my-first-poems.pdf   Full text of "My First Poems" (Read More link)
before-nineteen.pdf  Full text of "Before Nineteen" (Read More link)
asf-fellowship.jpg   Project 01 screenshot
universe.jpg         Project 02 screenshot
vals-lifestyle.jpg   Project 03 screenshot
README.md            This file
```

Every file sits side by side, so you can drag them all into GitHub together.

## Preview locally

Keep all files in the same folder and double-click `index.html`. Fonts (Cormorant Garamond and Manrope) load from Google Fonts when you are online; serif and sans-serif fallbacks are used offline.

## Replacing images

Replace a file with a new one of the **same name**: `marvforge-logo.png`, `profile.jpg`, or a project screenshot. If a file is missing, the page shows a labelled placeholder instead of a broken image.

## Content still to add

Search `index.html` for text in `[square brackets]`:

- GitHub repository links for the three projects (replace each `<span class="link disabled">GitHub: [add link]</span>` with `<a class="link" href="..." target="_blank" rel="noopener noreferrer">GitHub</a>`)
- Excerpts and reading times for "My Hidden Shadow" and "Before Nineteen"
- Descriptions for the two leadership roles
- Your LinkedIn URL (a comment in the Contact section shows the exact code)

The WhatsApp link uses the international form `https://wa.me/2349157410355` for 09157410355.

## Deploy with GitHub and Vercel

1. Create a new empty repository on GitHub (for example `marvellous-portfolio`).
2. Click **uploading an existing file** and drag in all the files from this project, then commit.
3. Go to [vercel.com](https://vercel.com), choose **Add New → Project**, and import the repository.
4. Leave Framework Preset as **Other**, with no build command and no output directory.
5. Click **Deploy**. Every future change you commit to GitHub redeploys automatically.

`index.html` is in the root and all paths are relative, so no extra configuration is required.
