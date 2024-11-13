import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const quintessential = localFont({
  src: "./fonts/Quintessential-Regular.ttf",
  variable: "--font-quintessential",
  weight: "400",
})
const oldStandardBold = localFont({
  src: "./fonts/OldStandardTT-Bold.ttf",
  variable: "--font-old-standard-tt-bold",
  weight: "700",
  style: "normal",
})
const oldStandardItalic = localFont({
  src: "./fonts/OldStandardTT-Italic.ttf",
  variable: "--font-old-standard-tt-italic",
  weight: "400",
  style: "italic",
})
const oldStandardRegular = localFont({
  src: "./fonts/OldStandardTT-Regular.ttf",
  variable: "--font-old-standard-tt-regular",
  weight: "400",
  style: "normal",
})


export const metadata: Metadata = {
  title: "NK Chicken Rice",
  description: "Taste the authenthicity of Singaporean Cuisine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${quintessential.variable} ${oldStandardRegular.variable} ${oldStandardItalic.variable} ${oldStandardBold.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
