"use client";

import { Icon } from "@iconify/react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="text-foreground">
      <div className="max-w-7xl text-sm mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left */}
          <div className="flex space-x-4 md:space-x-6">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <Link href="/products" className="hover:text-primary">
              Products
            </Link>
          </div>

          {/* Center */}
          <div className="shrink-0">
            <Image
              src={"/images/md farms.png"}
              alt={""}
              width={50}
              height={50}
            />
          </div>

          {/* Right */}
          <div className="hidden md:flex space-x-4">
            <Link href={"tel:+2348126891034"} target="_blank" rel="noopener noreferrer">
              <Icon
                icon="ic:round-phone"
                width="25"
                height="25"
                className="cursor-pointer text-gray-500 hover:text-primary"
              />
            </Link>
            <Link href={`https://wa.me/+2348126891034`} target="_blank" rel="noopener noreferrer">
            <Icon
              icon="ic:sharp-whatsapp"
              width="25"
              height="25"
              className="cursor-pointer text-gray-500 hover:text-primary"
            />
            </Link>

            <Link href={"mailto:Mofarms.ng@gmail.com"} target="_blank" rel="noopener noreferrer">

            <Icon
              icon="material-symbols:mail"
              width="25"
              height="25"
              className="cursor-pointer text-gray-500 hover:text-primary"
            />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-foreground focus:outline-none"
            >
              <Icon
                className="text-gray-500 hover:text-primary"
                icon={menuOpen ? "mdi:close" : "mdi:menu"}
                width="28"
                height="28"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="shadow-lg pb-8">
          <div className="md:hidden px-2 pt-2 pb-3 space-y-1 bg-background">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md hover:bg-primary hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="block px-3 py-2 rounded-md hover:bg-primary hover:text-white"
            >
              Products
            </Link>
          </div>
          <div className="md:hidden flex justify-center space-x-6">
            <Link href={"tel:+2348126891034"} target="_blank" rel="noopener noreferrer">
              <Icon
                icon="ic:round-phone"
                width="25"
                height="25"
                className="cursor-pointer text-gray-500 hover:text-primary"
              />
            </Link>
            <Link href={`https://wa.me/+2348126891034`} target="_blank" rel="noopener noreferrer">
            <Icon
              icon="ic:sharp-whatsapp"
              width="25"
              height="25"
              className="cursor-pointer text-gray-500 hover:text-primary"
            />
            </Link>

            <Link href={"mailto:Mofarms.ng@gmail.com"} target="_blank" rel="noopener noreferrer">

            <Icon
              icon="material-symbols:mail"
              width="25"
              height="25"
              className="cursor-pointer text-gray-500 hover:text-primary"
            />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
