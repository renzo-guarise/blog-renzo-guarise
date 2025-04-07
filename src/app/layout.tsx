import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Blog | Your Name",
  description: "A blog about Artificial Intelligence and its impact on our world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          <nav className="bg-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <Link href="/" className="flex items-center px-2 py-2 text-gray-900 hover:text-gray-600">
                    AI Blog
                  </Link>
                </div>
                <div className="flex space-x-8">
                  <Link href="/blog" className="flex items-center px-2 py-2 text-gray-900 hover:text-gray-600">
                    Blog
                  </Link>
                  <Link href="/about" className="flex items-center px-2 py-2 text-gray-900 hover:text-gray-600">
                    About
                  </Link>
                </div>
              </div>
            </div>
          </nav>
          <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {children}
          </main>
          <footer className="bg-white shadow-lg mt-12">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
              <p className="text-center text-gray-500">© {new Date().getFullYear()} AI Blog. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
