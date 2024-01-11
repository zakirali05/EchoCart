import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs'
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "EchoCart",
  description:
    "EchoCart is an ecommerce website built to practice Nextjs14.0.0 fundamentals | Welcome to EchoCart , Startbrowsing your dream products.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
    </ClerkProvider>
  );
}
