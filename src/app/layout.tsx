import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import BottomDock from "@/components/navigation/bottom-dock";
import BottomGradient from "@/components/navigation/bottom-gradient";
import Footer from "@/components/navigation/footer";
import TopGradient from "@/components/navigation/top-gradient";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chehak.vercel.app"),
  title: "Chehak Sharma",
  description: "Full Stack Developer",
  icons: [
    {
      url: "/chehak.jpeg",
      href: "/chehak.jpeg",
    },
  ],
  keywords: [
    "Chehak Sharma",
    "ChehakSharmna",

    "Chehak sharma",
    "Chehaksharma",

    "chehak sharma",
    "chehaksharma",

    "Chehak",
    "chehak",
    "chehak.sharma293",
    "ch3hak",
    "Chehakksharma"
  ],
  openGraph: {
    images: [
      {
        url: "/chehak.jpeg",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#111111]`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider delayDuration={0}>
            <TopGradient />
            <div className="px-6 md:px-0 md:max-w-screen-md md:mx-auto py-16 md:py-24">
              {children}
            </div>
            <Footer />
            <BottomGradient />
            <BottomDock />
          </TooltipProvider>

          <Toaster richColors position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}
