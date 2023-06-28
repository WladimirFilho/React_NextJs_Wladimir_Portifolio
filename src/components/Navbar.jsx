"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { juniorDevProjectList } from "../app/data/projectsList";

export const Navbar = () => {
  const path = usePathname();

  return (
    <header className="max-w-[1640px] mx-auto p-8 flex flex-col items-center lg:flex-row">
      <nav className="flex-1 w-full font-medium">
        <ul className="w-full flex lg:flex-row flex-col justify-between items-center lg:gap-20 gap-8">
          <div>
            <li className="mb-10 lg:mb-0 font-bold ">
              <Link className="text-xl" href="/">
                .wladimir
              </Link>
            </li>
          </div>

          <div className="flex gap-8">
            <li className="py-2 px-6 border-yellow-400 border-solid hover:border-b-2">
              <Link href="/about">
                <span
                  className={path.includes("/about") ? "text-yellow-500" : null}
                >
                  About me
                </span>
              </Link>
            </li>

            <li className="py-2 px-6 border-yellow-400 border-solid hover:border-b-2">
              <Link href="/contact">
                <span
                  className={
                    path.includes("/contact") ? "text-yellow-500" : null
                  }
                >
                  Get In touch
                </span>
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};
