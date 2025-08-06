"use client";

import type React from "react";

import { useState } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Menu } from "lucide-react";

import { ThemeProvider } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FaInstagram } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

const navItems = [
  { href: "/", label: "Inicio", color: "bg-[#a42b2c]" },
  { href: "/gallery", label: "Galería", color: "bg-[#17516e]" },
  { href: "/exhibition", label: "Exposición", color: "bg-[#cc5500]" },
  { href: "/contact", label: "Contacto", color: "bg-[#014421]" },
];

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <html lang="es">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/rtm8vwi.css" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <header className="border-b border-gray-800 sticky top-0 bg-black z-40 flex-shrink-0">
              <div className="flex h-16 items-center px-4 md:px-6">
                <Link href="/?video=true" className="flex items-center">
                  <img 
                    src="https://i.imgur.com/Gnb8wsE.png" 
                    alt="JAAP Logo" 
                    className="h-12 w-auto"
                  />
                </Link>

                {/* Desktop Navigation */}
                <nav className="ml-auto hidden md:flex md:items-center gap-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`w-8 h-8 ${item.color} hover:opacity-80 transition-opacity`}
                      aria-label={item.label}
                    />
                  ))}
                  <div className="flex items-center gap-4">
                    <a
                      href="https://www.instagram.com/jaap_1990/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:opacity-80"
                    >
                      <FaInstagram className="h-6 w-6 text-white mt-0.5" />
                    </a>
                  </div>
                </nav>

                {/* Mobile Navigation */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                  <SheetTrigger asChild className="md:hidden ml-auto">
                    <Button variant="ghost" size="icon" aria-label="Menu" className="text-white hover:text-white hover:bg-white/20">
                      <Menu className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[240px] sm:w-[300px]">
                    <div className="flex flex-wrap gap-4 mt-8">
                      {navItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`w-12 h-12 ${item.color} hover:opacity-80 transition-opacity`}
                          aria-label={item.label}
                          onClick={() => setIsOpen(false)}
                        />
                      ))}
                      <div className="flex items-center gap-4">
                        <a
                          href="https://www.instagram.com/jaap_1990/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:opacity-80"
                        >
                          <FaInstagram className="h-6 w-6 text-white mt-0.5" />
                        </a>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </header>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
