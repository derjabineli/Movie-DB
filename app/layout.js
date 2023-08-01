import "./globals.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: "Movie Database",
  description: "A Movie Database that displays the latest movies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="mx-32 my-12">{children}</body>
    </html>
  );
}
