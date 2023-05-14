'use client'

import Link from "next/link";
import {usePathname} from "next/navigation";

export const Navbar = () => {

    const path = usePathname();

    return (
        <header className='max-w-[1440px] mx-auto p-8 flex flex-col items-center lg:flex-row justify-center'>
            <h1 className='mb-10 lg:mb-0 font-bold lg:absolute lg:left-10'><Link href='/'>.folio</Link></h1>
            <nav className='flex-1 w-full font-medium'>
                <ul className='w-full flex justify-center lg:gap-20 gap-8'>
                    <li><Link href='/projects'><span
                        className={path.includes('/projects') ? 'text-yellow-500' : null}>projects</span></Link></li>
                    <li><Link href='/about'><span className={path.includes('/about') ? 'text-yellow-500' : null}>about me</span></Link>
                    </li>
                    <li><Link href='/contact'><span
                        className={path.includes('/contact') ? 'text-yellow-500' : null}>contact</span></Link></li>
                </ul>
            </nav>
        </header>
    )
}