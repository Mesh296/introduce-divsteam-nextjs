'use client'

import { useState, useEffect } from "react";
import Link from "next/link";


//import { Link } from "react-scroll";
//import logodivs from "divslogo.png"

const Navbar = () => {

    const [navbar, setNavbar] = useState(false)
    const changeBackground = () => {
        if (window.scrollY >= 90) {
            setNavbar(true)
        }
        else {
            setNavbar(false)
        }
    }
    //globalThis.addEventListener('scroll', changeBackground);

    useEffect(() => {
        window.addEventListener("scroll", changeBackground);
        return () => window.removeEventListener("scroll", changeBackground);
    });


    return (
        <div className={navbar ? " z-10 ease-in duration-300 fixed w-screen bg-[#c8cedc] opacity-90" : "z-10 ease-in duration-200 fixed w-screen bg-transparent"}>
            <nav className="sticky">
                <div className="flex flex-wrap items-center justify-between mx-auto p-4 text-white">
                    <img src="/Home_pic.png" alt="divs team logo" className=" object-contain h-16 -m-6 pl-8" />

                    <div className=" mr-10">
                        <ul className="flex flex-row space-x-6">
                            <li className=" rounded-3xl text-black hover:text-white hover:bg-[#4481EE] duration-200 py-2 cursor-pointer"
                                onClick={console.log("Home")}>
                                <Link className="  px-6 py-2" href="#home" scroll={true}>Home</Link>
                            </li>

                            <li className=" rounded-3xl text-black hover:text-white hover:bg-[#4481EE] duration-200 py-2 cursor-pointer"
                                onClick={console.log("About")}>
                                <Link className="px-6 py-2" href="#about" scroll={true}>About</Link>
                            </li>

                            <li className=" rounded-3xl text-black hover:text-white hover:bg-[#4481EE] duration-200 py-2 cursor-pointer"
                                onClick={console.log("Work")}>
                                <Link className="px-6 py-2" href="#work" scroll={true}>Work</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;