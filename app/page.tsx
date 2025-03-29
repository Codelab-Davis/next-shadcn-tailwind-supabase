import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    ArrowRight,
    Code,
    Database,
    Layout,
    Palette,
} from "lucide-react";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Hero section */}
            <section className="py-24 px-6 flex flex-col items-center text-center">
                <div className="max-w-3xl mx-auto space-y-6">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                        Next.js + Shadcn UI + Tailwind + Supabase
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        A modern full-stack template for building beautiful,
                        accessible, and high-performance web applications.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center pt-4">
                        <Button asChild size="lg">
                            <Link href="https://github.com/Codelab-Davis/next-shadcn-tailwind-supabase.git">
                                <Github className="mr-1 size-5 fill-white" />
                                GitHub
                            </Link>
                        </Button>
                        <Button asChild size="lg" variant="outline">
                            <Link href="https://github.com/Codelab-Davis/next-shadcn-tailwind-supabase/blob/main/README.md">
                                Get Started
                                <ArrowRight className="ml-2 size-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Features section */}
            <section className="py-16 px-6 bg-muted/50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Everything you need to build modern apps
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Next.js */}
                        <div className="bg-background rounded-lg p-6 shadow-sm border">
                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                                <Image
                                    src="/next.svg"
                                    alt="Next.js"
                                    width={24}
                                    height={24}
                                    className="dark:invert"
                                />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                                Next.js 15
                            </h3>
                            <p className="text-muted-foreground">
                                React framework with App Router, Server
                                Components, and Edge Runtime.
                            </p>
                        </div>

                        {/* Shadcn UI */}
                        <div className="bg-background rounded-lg p-6 shadow-sm border">
                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                                <Layout className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                                Shadcn UI
                            </h3>
                            <p className="text-muted-foreground">
                                Beautifully designed components built with Radix
                                UI and Tailwind CSS.
                            </p>
                        </div>

                        {/* Tailwind */}
                        <div className="bg-background rounded-lg p-6 shadow-sm border">
                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                                <Palette className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                                Tailwind CSS
                            </h3>
                            <p className="text-muted-foreground">
                                Utility-first CSS framework for rapid UI
                                development and consistent designs.
                            </p>
                        </div>

                        {/* Supabase */}
                        <div className="bg-background rounded-lg p-6 shadow-sm border">
                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                                <Database className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                                Supabase
                            </h3>
                            <p className="text-muted-foreground">
                                Open source Firebase alternative with auth,
                                database, and storage.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Getting started section */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8">Getting Started</h2>

                    <div className="space-y-6">
                        <div className="bg-muted/30 p-6 rounded-lg border">
                            <h3 className="flex items-center text-lg font-medium mb-3">
                                <Code className="size-5 mr-2" />
                                Clone the repository
                            </h3>
                            <pre className="bg-background p-3 rounded-md overflow-x-auto">
                                <code>
                                    git clone
                                    https://github.com/Codelab-Davis/next-shadcn-tailwind-supabase.git
                                    my-app
                                </code>
                            </pre>
                        </div>

                        <div className="bg-muted/30 p-6 rounded-lg border">
                            <h3 className="flex items-center text-lg font-medium mb-3">
                                <Code className="size-5 mr-2" />
                                Install dependencies
                            </h3>
                            <pre className="bg-background p-3 rounded-md overflow-x-auto">
                                <code>cd my-app && pnpm install</code>
                            </pre>
                        </div>

                        <div className="bg-muted/30 p-6 rounded-lg border">
                            <h3 className="flex items-center text-lg font-medium mb-3">
                                <Code className="size-5 mr-2" />
                                Run development server
                            </h3>
                            <pre className="bg-background p-3 rounded-md overflow-x-auto">
                                <code>pnpm dev</code>
                            </pre>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <Button asChild variant="outline">
                            <Link href="https://github.com/Codelab-Davis/next-shadcn-tailwind-supabase/blob/main/README.md">
                                View more instructions
                                <ArrowRight className="ml-2 size-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="mt-auto py-12 px-6 border-t">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-muted-foreground">
                        Built with ♥ by{" "}
                        <a
                            href="https://codelabdavis.com"
                            className="underline underline-offset-4"
                        >
                            CodeLab Davis
                        </a>
                    </p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link
                            href="https://github.com/Codelab-Davis/next-shadcn-tailwind-supabase/blob/main/README.md"
                            className="text-sm text-muted-foreground hover:underline underline-offset-4"
                        >
                            README Documentation
                        </Link>
                        <Link
                            href="https://github.com/Codelab-Davis"
                            className="text-sm text-muted-foreground hover:underline underline-offset-4"
                        >
                            GitHub
                        </Link>
                        <Link
                            href="https://nextjs.org"
                            className="text-sm text-muted-foreground hover:underline underline-offset-4"
                        >
                            Next.js
                        </Link>
                        <Link
                            href="https://ui.shadcn.com"
                            className="text-sm text-muted-foreground hover:underline underline-offset-4"
                        >
                            Shadcn UI
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}

const Github = ({ className }: { className?: string }) => {
    return (
        <svg
            className={className}
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <title>GitHub</title>
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
    );
};
