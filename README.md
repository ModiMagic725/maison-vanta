# MAISON VANTA (fictional demo restaurant)
Static, frontend-only site: HTML, CSS, JavaScript. No backend, no build step, no assets folder.
Images load from remote Unsplash URLs; fonts and GSAP from Google Fonts / cdnjs. Failed images fall back to a gradient.
All reservation, contact and enquiry forms are demonstrations only.
## Preview locally
`python3 -m http.server 8000` in this folder, then open http://localhost:8000
## Deploy
- Netlify: drag the folder into app.netlify.com/drop, or connect a repo (no build command, publish directory `.`).
- Vercel: `npx vercel` in this folder (framework: Other, no build command).
## Known limits
Remote image URLs were not verified; browser testing was not run. Swiper, Owl Carousel, AOS, Three.js and Lenis are not used.
## Features
Swiper gallery (experiences), keyboard lightbox (Esc, arrows), menu and wine filters, query-parameter dish pages, validated demo forms, GSAP/ScrollTrigger motion.
