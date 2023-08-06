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
        <div className={navbar ? " py-3 z-20 ease-in duration-300 fixed w-screen bg-[#f8f8f8] backdrop-filter backdrop-blur-md bg-opacity-50 border-b border-gray-200"
         : " py-3 z-20 ease-in duration-200 fixed w-screen bg-transparent"}>
            <nav className="sticky">
                <div className="flex flex-wrap items-center justify-between mx-auto  text-white">
                    <img src="/Home_pic.png" alt="divs team logo" className=" object-contain h-16 -m-6 pl-8" />

                    <div className=" mr-10">
                        <ul className="flex flex-row space-x-6">
                            <li className=" rounded-md text-black hover:text-white hover:bg-[#484848] duration-200 py-2 cursor-pointer"
                                onClick={console.log("Home")}>
                                <Link className="  px-6 py-2" href="#home" scroll={true}>Home</Link>
                            </li>

                            <li className=" rounded-md text-black hover:text-white hover:bg-[#484848] duration-200 py-2 cursor-pointer"
                                onClick={console.log("Services")}>
                                <Link className="  px-6 py-2" href="#services" scroll={true}>Services</Link>
                            </li>

                            <li className=" rounded-md text-black hover:text-white hover:bg-[#484848] duration-200 py-2 cursor-pointer"
                                onClick={console.log("About")}>
                                <Link className="px-6 py-2" href="#about" scroll={true}>About us</Link>
                            </li>

                            <li className=" rounded-md text-black hover:text-white hover:bg-[#484848] duration-200 py-2 cursor-pointer"
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