import Image from "next/image";
import { IoIosArrowForward } from 'react-icons/io';

const Home = () => {
    return (
        <div className=" h-screen bg-white relative" id="home">
            <div className=" text-7xl font-extrabold absolute left-32 top-[18rem] z-10">
                <h1>LOREM</h1>
                <div className=" text-base font-extralight absolute w-[30rem]">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
            </div>
            <div className="flex justify-between absolute cursor-pointer text-white px-6 py-2 rounded-lg bg-[#4481EE] hover:bg-[#376bc6] duration-200 left-32 top-[30rem] z-10">
                <button 
                    className=" pr-2 font-semibold"
                    onClick={console.log("btn clicked")}>
                    BUTTON
                </button>
                <IoIosArrowForward className=" m-auto h-full"/>
            </div>      

            <div className=" h-[30rem] w-[30rem] absolute left-48 top-1/4 ">
                <Image
                    src="/Ellipse_1.png"
                    alt="Ellipse"
                    layout="fill" // required
                    objectFit="cover" // change to suit your needs
                    className=" h-full" // just an example
                />
            </div>

            <div className=" h-[44rem] w-[36rem] absolute right-20">
                <Image
                    src="/Home_pic.png"
                    alt="Home picture"
                    layout="fill" // required
                    objectFit="contain" // change to suit your needs
                    className=" h-full" // just an example
                />
            </div>
        </div>
    )
}
export default Home;