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
