import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Next.js + Shadcn UI + Tailwind + Supabase Template",
    description:
        "A modern full-stack template for building beautiful, accessible, and high-performance web applications",
    keywords: [
        "Next.js",
        "Shadcn UI",
        "Tailwind CSS",
        "Supabase",
        "React",
        "TypeScript",
        "Full-stack",
    ],
    authors: [{ name: "CodeLab Davis" }],
    creator: "CodeLab Davis",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://next-shadcn-tailwind-supabase.vercel.app/",
        title: "Next.js + Shadcn UI + Tailwind + Supabase Template",
        description:
            "A modern full-stack template for building beautiful, accessible, and high-performance web applications",
        siteName: "Next.js + Shadcn UI + Tailwind + Supabase Template",
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
