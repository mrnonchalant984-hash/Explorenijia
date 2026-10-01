import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "ExploreNaija", description: "Curated Nigerian escapes, culture tours and unforgettable weekends." };
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
