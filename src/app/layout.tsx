import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "RENOVO HOSTING",
  description: "Hospedagem rápida, segura e confiável.",
  icons: {
    icon: "/favicon.ico"
  }
};

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.variable} antialiased bg-gray-950 text-white`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
