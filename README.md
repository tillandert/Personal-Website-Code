This is the code for my personal website.

## GitHub Pages

This repo can be deployed directly to GitHub Pages. You do not need to create a new repository.

Important details:
- The app uses `HashRouter`, which avoids GitHub Pages refresh and deep-link issues for client-side routes.
- Production builds use the repository base path, so the site will work at `https://tillandert.github.io/Personal-Website-Code/`.
- If you want to host a resume file directly, add something like `public/resume.pdf` and link to `${import.meta.env.BASE_URL}resume.pdf` in the app.

To publish:
1. Push this repository to GitHub.
2. In the repository settings, open Pages.
3. Set the source to GitHub Actions.
4. Push to `main` and the workflow will deploy the built site.
