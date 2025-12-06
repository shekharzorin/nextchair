# Deployment Guide for NextChair

Your application is ready to be deployed! Next.js apps work best on **Vercel** (the creators of Next.js), but Netlify is also a great option.

## Option 1: Deploy to Vercel (Recommended)

1.  **Create a GitHub Repository**:
    *   Initialize a git repo in your project folder if you haven't:
        ```bash
        git init
        git add .
        git commit -m "Initial commit"
        ```
    *   Create a new repository on GitHub.
    *   Push your code:
        ```bash
        git remote add origin <your-repo-url>
        git push -u origin main
        ```

2.  **Import to Vercel**:
    *   Go to [vercel.com](https://vercel.com) and sign up/login.
    *   Click "Add New..." -> "Project".
    *   Select your GitHub repository.
    *   **Settings**: The defaults (`next run build`) are perfect.
    *   Click **Deploy**.

3.  **That's it!** Vercel will build your site and give you a live URL.

## Automatic "Logging Mode"
Because Vercel is serverless, the local SQLite database file `nextchair.db` will not work.
*   The code has been updated to automatically detect this.
*   Instead of crashing, the Contact Form will log submissions to the **Vercel Runtime Logs**.
*   **To Check Leads**: Go to your Vercel Project Dashboard -> Logs.

## Future Enhancements
To save data permanently in production, consider setting up a cloud database:
*   **Vercel Postgres** (Easy integration)
*   **Supabase**
*   **Turso** (SQLite compatible)
