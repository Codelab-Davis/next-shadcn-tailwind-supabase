# Next.js + Shadcn UI + Tailwind CSS + Supabase Template

This template provides a solid foundation for building full-stack applications with Next.js, Shadcn UI components, Tailwind CSS, and Supabase.

## Features

- **Next.js 15** with App Router
- **Shadcn UI** components for beautiful, accessible UI
- **Tailwind CSS** for utility-first styling
- **Supabase** integration for authentication, database, and storage
- **TypeScript** for type safety
- **ESLint** and **Prettier** configuration
- **Turbopack** for faster development experience

## Prerequisites

- Node.js 18.17 or later
- pnpm (recommended) or npm/yarn/bun
- Supabase account (free tier available)

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/Codelab-Davis/next-shadcn-tailwind-supabase.git my-app
cd my-app
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Set up Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Copy your project URL and anon key from the API settings
3. Create a `.env.local` file in the project root:

```
NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

### 4. Run the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. (This is the default port for Next.js.)

## Project Structure

```
├── actions/          # Server actions
├── app/              # Next.js App Router
├── components/       # React components
│   ├── ui/           # Shadcn UI components
├── lib/              # Utility functions
│   ├── supabase/     # Supabase client configurations
│   └── utils.ts      # Helper functions
├── public/           # Static assets
└── types/            # TypeScript type definitions
```

## Working with Next.js

This template uses the Next.js App Router for file-based routing.

### Pages and Layouts

- Create pages by adding files to the app directory
- Use layout.tsx files for shared layouts
- Create loading.tsx files for loading states

```tsx
// app/dashboard/page.tsx
export default function Dashboard() {
    return <div>Dashboard Content</div>;
}
```

### Server vs Client Components

By default, all components in Next.js are Server Components. To use client-side features:

```tsx
"use client";

import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```

## Working with Shadcn UI

This template includes Shadcn UI, a collection of reusable components built with Radix UI and Tailwind CSS.

### Adding new components

1. Use the CLI to add components:

```bash
pnpm dlx shadcn-ui@latest add button
```

2. Import and use components in your pages:

```tsx
import { Button } from "@/components/ui/button";

export default function Page() {
    return <Button>Click me</Button>;
}
```

### Customizing components

All components are installed in the ui directory and can be customized as needed.

## Working with Tailwind CSS

Tailwind CSS is configured and ready to use. The template includes:

- Custom colors and theming
- Dark mode support
- Shadcn UI integration

### Customizing theme

Tailwind CSS v4 uses CSS variables for theming. Edit your `app/globals.css` file to customize the theme:

```css
@import "tailwindcss";

@theme {
    --color-primary: oklch(0.49 0.23 275.75);
    --color-primary-foreground: white;

    --font-sans: "Inter", system-ui;

    --radius-md: 0.5rem;
}

/* You can also create semantic aliases for your theme values */
@theme {
    --app-background: var(--color-zinc-950);
    --app-foreground: var(--color-zinc-50);
}
```

For complex customizations, you can also extend or override components:

```css
@utility card {
    background-color: var(--card-background);
    border-radius: var(--radius-md);
    border: 1px solid var(--border);
    padding: 1.5rem;
    box-shadow: var(--shadow-sm);
}

/* Customizing Shadcn UI components */
@layer components {
    .button-gradient {
        background-image: linear-gradient(
            to right,
            var(--color-blue-500),
            var(--color-purple-500)
        );
    }
}
```

## Working with Supabase

This template includes configurations for Supabase authentication, database, and storage.

### Authentication

```tsx
"use client";

import { createClient } from "@/lib/supabase/client";

export default function LoginButton() {
    const supabase = createClient();

    const handleLogin = async () => {
        await supabase.auth.signInWithOAuth({
            provider: "github",
        });
    };

    return <button onClick={handleLogin}>Sign in with GitHub</button>;
}
```

### Database Operations

```tsx
import { createClient } from "@/lib/supabase/server";

export default async function Posts() {
    const supabase = await createClient();
    const { data: posts } = await supabase.from("posts").select("*");

    return (
        <div>{posts?.map((post) => <div key={post.id}>{post.title}</div>)}</div>
    );
}
```

### Storage

```tsx
"use client";

import { createClient } from "@/lib/supabase/client";

export default function FileUpload() {
    const supabase = createClient();

    const handleUpload = async (event) => {
        const file = event.target.files[0];
        const { data, error } = await supabase.storage
            .from("avatars")
            .upload(`public/${file.name}`, file);
    };

    return <input type="file" onChange={handleUpload} />;
}
```

## Linting and Formatting

This template includes ESLint and Prettier configuration. Run:

```bash
# Lint code
pnpm lint

# Format code
pnpm format
```

## Deployment

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use [Vercel](https://vercel.com/new).

1. Push your code to a GitHub repository
2. Import the project to Vercel
3. Add your Supabase environment variables
4. Deploy

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org)
- [Shadcn UI](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Supabase](https://supabase.com)

Similar code found with 2 license types
