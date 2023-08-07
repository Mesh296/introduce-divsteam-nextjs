import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { HiArchive } from 'react-icons/hi';
import { DiAtom } from 'react-icons/di';
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import project from '../../../public/services_img/crypto-screener-cover-image.jpg'

const FeaturedProject = ({ type, title, img, link, github }) => {

    return (
        <article className="w-atuo h-1/5 flex items-center justify-between rounded-2xl p-3  border boder-solid border-slate-200 hover:border-slate-700 duration-200 bg-white relative ">
            {/* <div className=" top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-black rounded-br-3xl" /> */}
            <div className="w-1/2 flex flex-col items-start justify-between">
                <span className="text-red-400 font-medium text-base">{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2" >
                    <h2 className="my-2 w-full text-left text-2xl font-bold">{title}</h2>
                </Link>
                <div className=" w-full mt-6 flex gap-1  ">
                    <Link href={link} target="_blank"
                        className="rounded-lg text-xs text-black font-medium hover:underline underline-offset-1  ">Visit Project
                    </Link>
                    <Link href={link} target="_blank" ><FaGithub className="text-sm" /></Link>
                </div>
            </div>
            <Link href={link} target='_blank' className="w-1/2 cursor-pointer overflow-hidden rounded-lg ">
                <Image src={img} alt={title} className="h-full w-auto" />
            </Link>
        </article>
    )
}

const About = () => {
    return (
        <div id='about' className="h-screen w-full flex items-center justify-center bg-gradient-to-b from-[#F8F8F8] to-white mt-20 px-10 gap-5">
            <div className=" w-1/2 flex flex-col justify-start items-center gap-3 pb-32 pr-28 ">
                <AnimatedText text="About us" className="text-xl font-bold text-left" />
                <p className="text-base font-light">Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                </p>
                <p className="text-base pt-3 font-light">Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                </p>
                <button className="text-xs mr-[290px] mt-5 font-semibold rounded-lg cursor-pointer text-white px-6 py-2
                 bg-[#484848] hover:bg-[#606060] duration-200 whitespace-nowrap"> More about our story
                    <DiAtom className="inline text-2xl " />
                </button>
            </div>
            <div className=" h-screen w-1/3 mt-32 flex flex-col gap-3" >
                <h2 className="text-lg text-gray-500 font-semibold"> <IoIosArrowDown className="inline" />Our Featured Projects</h2>
                <FeaturedProject
                    type="Blog Website"
                    title="FutureDev"
                    img={project}
                    github='/'
                    link='/'
                />
                <FeaturedProject
                    type="Blog Website"
                    title="FutureDev"
                    img={project}
                    github='/'
                    link='/'
                />
                <FeaturedProject
                    type="Blog Website"
                    title="FutureDev"
                    img={project}
                    github='/'
                    link='/'
                />
                <button className="mt-3 mr-[250px] bg-[#484848] hover:bg-[#606060] duration-200 whitespace-nowrap text-xs px-2 py-2 font-semibold rounded-lg cursor pointer text-white">More details <HiArchive className="inline text-lg pb-[3px]" /></button>
            </div>
        </div >
    )
}

export default About;