import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import LoadingScreen from "@/components/LoadingScreen"; // Ensure this is a client component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LughaSauti",
  description:
    "Tovuti rasmi ya LughaTausi, imeundwa na Filoteus Ngonyani na John Makweba.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Loading Screen */}
          <LoadingScreen />

          {/* Actual Page Content */}
          <NavBar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
