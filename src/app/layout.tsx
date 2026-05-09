import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"
import { Suspense } from "react";
import ClientProviders from "@/utils/ClientProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rise of Fearless",
  description: "Fight for Glory. Experience a map that reflects the strength and spirit of Africa. Roam valleys, cliffs, and open fields where strategy meets survival.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
<body className={inter.className}>
        <ClientProviders>
          <div className=" overscroll-x-none">
              <Suspense>
                {children}
              </Suspense>
            <Toaster/>
          </div>
        </ClientProviders>
        </body>
    </html>
  );
}
