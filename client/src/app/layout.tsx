import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// font awesome
import { config, dom } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { UserProvider } from "@auth0/nextjs-auth0/client";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Redstone Exchange",
  description: "Technical Minecraft forums for discussing various topics.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={inter.className}>{children}</body>
      </UserProvider>
    </html>
  );
}
