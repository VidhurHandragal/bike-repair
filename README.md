# Better Bikes

A free, mobile-first repair guide created by Vidhur Handragal of Troop 287 as an Eagle Scout service project. It was created originally for University Preparatory Academy and the Cathedral of Faith at 2315 Canoas Garden Avenue in San Jose, California. The site is plain HTML, CSS, and vanilla JavaScript; it needs no server, account, paid API, database, build step, or tracking.

## Files

- `index.html` — homepage, navigation, search, categories, station tools, safety checklist, and guide view.
- `assets/css/styles.css` — responsive site and print styles.
- `assets/js/repairs.js` — central repair content, verified station tool inventory, and optional video fields.
- `assets/js/app.js` — guide rendering, hash navigation, mobile menu, and live search.
- `manual.html` and `assets/js/manual.js` — print-friendly manual generated from the same repair data.
- `assets/bike-repair-manual.pdf` — downloadable PDF snapshot.

## Preview locally

Open `index.html` in a current browser. No build or local server is required. Search, guide links, mobile navigation, and the manual work from local files as well as a GitHub Pages project URL.

## Publish with GitHub Pages

1. Create a **public** GitHub repository for this project. A repository name such as `better-bikes` produces the project URL `https://USERNAME.github.io/better-bikes/`; use your actual username and repository name.
2. Add the project files to the repository and push them to the `main` branch. Do not include an assumed username or guessed QR URL in the site.
3. In the repository, open **Settings → Pages**. Under build and deployment, choose **Deploy from a branch**, select `main` and the `/ (root)` folder, then save.
4. Wait for GitHub Pages to publish. Verify the exact URL shown in Pages. Check homepage, search, categories, every guide, manual PDF, and mobile layout at that deployed project URL.
5. To publish an update later, edit the content or assets, commit/push to `main`, and allow Pages to redeploy. Keep the repository name and Pages URL unchanged to keep the printed QR destination stable.

GitHub Pages publication and public access require authorization by the repository owner. This project has not been published by this workspace.

## Maintain the guides and tools

- **Add a guide:** Add one object to `REPAIRS` in `assets/js/repairs.js`. Give it a unique `id`, a category ID from `REPAIR_CATEGORIES`, substantive plain-language content, appropriate tool lists, compatibility notes, warnings, steps, success checks, safety checks, and stop criteria. Add related guide IDs only when they exist. Add the ID to `featuredIds` in `assets/js/app.js` only if it belongs on the homepage.
- **Update a video:** Edit the guide’s `video` object in `assets/js/repairs.js` with a direct URL and descriptive `linkText`. Verify the page’s actual title, channel, and subject before publishing. Leave `video: ""` when a link is not verified; the public guide will omit the video section.
- **Edit tool inventory:** Update `STATION_TOOLS` at the top of `assets/js/repairs.js`. Keep repair-specific lists consistent with the installed equipment. The pump head, valve support, and gauge must be checked on the actual installed pump.
- **Replace the PDF:** Open `manual.html` in a browser and select **Print / Save as PDF** (or press Ctrl+P and choose Save as PDF). Save the resulting file as `assets/bike-repair-manual.pdf`, replacing the old snapshot. The manual uses the same repair data as the site. Check that the downloaded PDF opens before publishing.
- **Keep the QR URL:** Change website content without renaming the public repository or changing its Pages source URL. Print the human-readable short URL directly beneath the QR code as a backup.

## Video verification status

No individual video is currently linked. Search results available during authoring did not verify specific video pages, titles, and subjects sufficiently to publish direct links. Empty `video` fields are intentional; add links only after checking the actual video page, preferably from a reliable educational source such as the official Park Tool channel.

## PDF upkeep

The committed PDF is a generated snapshot, not an automatically refreshed file. Whenever guide content changes, regenerate it from `manual.html` and replace the PDF as described above so the site and download stay consistent.

## Mobile deployment check

After publication, open the exact GitHub Pages URL on a phone. Check that navigation opens/closes, search returns and clears results, guide links work with the project URL prefix, safety text is readable outdoors, and the PDF opens/downloads. Test on both Wi-Fi and cellular if possible. Generate the physical QR code only after this check; encode the final Pages URL directly, without a redirect or QR subscription. Do not make a QR code from a guessed or temporary URL.

## Equipment and safety scope

Tool inventory reflects the specification provided for a SARIS Bike Fixation public repair stand: Phillips and standard screwdrivers, two steel-core tire levers, headset/pedal wrench, 8/10 mm and 9/11 mm cone wrenches, T-25 wrench, and hex key set. The separate freestanding pump is expected to be SARIS model 26246, but its exact installed head, compatibility, and gauge need physical verification. The stand’s installation hardware is not a bicycle repair tool.

No inner tubes, patches, adhesive, chain lubricant, chains/quick links, chain tools, quick-link pliers, brake pads, cables/housing, torque wrench, or specialized disc-brake tools are represented as station supplies. Manufacturer instructions take precedence over general guidance. This website is not a substitute for professional service and cannot guarantee a repair is safe.
