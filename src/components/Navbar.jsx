"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const path = usePathname();

  return (
    <header className="max-w-[1640px] mx-auto p-8 flex flex-col items-center lg:flex-row">
      <nav className="flex-1 w-full font-medium">
        <ul className="w-full flex lg:flex-row flex-col justify-between items-center lg:gap-20 gap-8">
          <div>
            <li className="mb-10 lg:mb-0 font-semibold ">
              <Link className="text-xl" href="/">
                <span className={path === "/" ? "text-yellow-500" : null}>
                  .wladimir
                </span>
              </Link>
            </li>
          </div>

          <div className="flex gap-8">
            <li className="py-2 px-6 hover:border-yellow-400 border-transparent border-solid border-b-2">
              <Link href="/about">
                <span
                  className={path.includes("/about") ? "text-yellow-500" : null}
                >
                  About me
                </span>
              </Link>
            </li>

            <li className="py-2 px-6 hover:border-yellow-400 border-transparent border-solid border-b-2">
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
