import Image from "next/image";

const Services = () => {
    return (
        <div className=" h-screen bg-gradient-to-b from-[#F8F8F8] to-white justify-center" id="services">
            <div className="  pt-20 h-40">
                <h1 className=" text-4xl font-bold flex justify-center">Our services</h1>
                <p className=" text-2xl text-gray-500 font-light flex justify-center">Experience the full potential of our services, customized to suit your specific requirements</p>
            </div>

            <div className="mt-8 grid lg:grid-cols-3 gap-10 px-10">
                <div className="border border-[#CBCBCB] rounded-xl">
                    <div className="flex justify-center p-4 w-full h-auto ">
                        <Image
                            src="/services_img/webbuilding.jpg"
                            alt="web building"
                            width={400}
                            height={100}
                            className=""
                        />
                    </div>
                    <div className="p-4 pb-12">
                        <h2 className="font-semibold text-lg">Graphic design</h2>
                        <p className=" text-sm text-gray-500 font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div> 
                </div>

                <div className="border border-[#CBCBCB] rounded-xl">
                    <div className="flex justify-center p-4 w-full h-auto ">
                        <Image
                            src="/services_img/webbuilding.jpg"
                            alt="web building"
                            width={400}
                            height={100}
                            className=""
                        />
                    </div>
                    <div className="p-4 pb-12">
                        <h2 className="font-semibold text-lg">Website building</h2>
                        <p className=" text-sm text-gray-500 font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div> 
                </div>

                <div className="border border-[#CBCBCB] rounded-xl">
                    <div className="flex justify-center p-4 w-full h-auto ">
                        <Image
                            src="/services_img/webbuilding.jpg"
                            alt="web building"
                            width={400}
                            height={100}
                            className=""
                        />
                    </div>
                    <div className="p-4 pb-12">
                        <h2 className="font-semibold text-lg">Data crawling</h2>
                        <p className=" text-sm text-gray-500 font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div> 
                </div>

            </div>
        </div>
    )
}

export default Services;