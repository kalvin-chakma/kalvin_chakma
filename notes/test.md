# Google Login with Better Auth in Node.js

This guide explains how to implement Google login using Better Auth in a Node.js application (e.g., with Express).

## ✅ Steps to Implement Google Login with Better Auth

### 1. Create Google OAuth Credentials

- Go to [Google Cloud Console](https://console.cloud.google.com/).
- Create or select a project.
- Navigate to **APIs & Services** → **Credentials**.
- Click **Create Credentials** → **OAuth 2.0 Client IDs**.
- Select **Web application**.
- Add the authorized redirect URI:
  ```
  http://localhost:3005/api/auth/callback/google
  ```
- Copy the **Client ID** and **Client Secret**.

### 2. Install Better Auth

If not already installed, run:

```bash
npm install better-auth
```

### 3. Configure Better Auth with Google in `auth.ts`

```ts
// auth.ts
import { betterAuth } from "better-auth";
import Database from "better-sqlite3";

export const auth = betterAuth({
  database: new Database("./sqlite.db"), // or use PostgreSQL, etc.
  emailAndPassword: { enabled: true },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
  },
});
```

Ensure your `.env` file includes:

```env
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

### 4. Set Up Express with Better Auth

```ts
// server.ts or app.ts
import express from "express";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./auth";

const app = express();

app.all("/api/auth/*", toNodeHandler(auth));
app.use(express.json());

app.listen(3005, () => {
  console.log("Server is running at http://localhost:3005");
});
```

### 5. Frontend: Redirect to Google Sign-in

Redirect users to:

```
http://localhost:3005/api/auth/signin/google
```

Example HTML for a sign-in button:

```html
<a href="http://localhost:3005/api/auth/signin/google">Sign in with Google</a>
```

### 6. Handling the Session

To retrieve the logged-in user:

```ts
import { fromNodeHeaders } from "better-auth/node";

app.get("/api/me", async (req, res) => {
  const session = await auth.api.getSession({
    headers: fromNodeHeaders(req.headers),
  });
  res.json(session);
});
```

## 🛡 Notes

- Ensure the redirect URI matches exactly in both Google Cloud Console and your server setup.
- Use HTTPS in production for security.
- If your frontend is on a different domain, consider adding CORS support.
