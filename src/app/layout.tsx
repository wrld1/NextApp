import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cheap Change",
  description: "Currency exchange",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-full flex flex-col">
          <Header />
          <main className="flex-auto">
            <div>{modal}</div>
            <div>{children}</div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
