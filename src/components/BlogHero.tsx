"use client";
import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import NProgress from "nprogress";
import Description from "./common/Description";
import { CARDS_DATA_LIST } from "../utils/helper";

const BLogHero = () => {
    const { slug } = useParams();
    NProgress.start();
    setTimeout(() => {
        NProgress.done();
    }, 400);

    const blogArray = CARDS_DATA_LIST.filter(
        (obj) =>
            obj && obj.title && obj.title.toLowerCase().replace(/\s+/g, "-") === slug
    );
    const blog: any = blogArray.length ? blogArray[0] : null;

    return (
        <div className="">
            {blog ? (
                <div>
                    <div className="max-w-[1440px] mx-auto relative">
                        <Image src="/assets/images/webp/footer-layer.webp" width={117}
                            height={235}
                            alt="bg"
                            className="absolute top-[34px] right-[60px] pointer-events-none"
                        />
                        <div className="container  mb-[271px] max-lg:mb-[150px] max-md:mb-28 max-sm:mb-24 max-lg:flex-col max-xl:flex max-xl:gap-5 max-xl:justify-center max-xl:items-center max-w-[1140px] mx-auto px-5">
                            <div className="max-w-[481px] pt-[91px] max-lg:pt-20 max-md:pt-16 max-sm:pt-12 max-lg:max-w-[unset]">
                                <h2 className="lg:text-[64.09px] max-w-[718px] text-white md:text-6xl sm:text-5xl text-4xl leading-[121%]">
                                    {blog.title}
                                    <span className="!text-lightSkyBlue hidden font-semibold max-sm:block">
                                        Market Insights
                                    </span>
                                </h2>
                                <Description customStyle="mt-4 mb-[30px]" title={blog.description} />
                                <div className="gap-4 items-center max-sm:flex-wrap flex">
                                    <button className="py-[7px] px-[37px] whitespace-nowrap text-white/80 hover:bg-white hover:text-black transition-all duration-300 border border-solid border-cyan bg-darkGray rounded-[50px] text-sm leading-[150%]">
                                        Productivity
                                    </button>
                                    <button className="py-[7px] px-[40px] whitespace-nowrap text-white/80 hover:bg-white hover:text-black transition-all duration-300 border border-solid bg-lightBlack border-white rounded-[50px] text-sm leading-[150%]">
                                        {blog.readTime}
                                    </button>
                                    <p className="leading-[150%] whitespace-nowrap font-semibold max-lg:text-sm text-white">
                                        {blog.date}
                                    </p>
                                </div>
                            </div>
                            <Image width={720} height={570} alt="blogs image" src={blog.cardImage}
                                className="lg:absolute h-[570px] object-cover lg:-top-[102px] right-0 max-xl:relative max-lg:max-h-[unset] max-lg:h-full max-xl:max-w-[600px] max-xl:w-[90%]"
                            />
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center h-screen bg-darkBlue">
                    <h1 className="text-9xl font-bold text-white">404</h1>
                    <h2 className="text-4xl font-semibold text-white mt-4">Page Not Found</h2>
                    <p className="text-lg text-white mt-2"> Sorry, the page you are looking for does not exist.</p>
                    <a href="/blogs" className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"> Go Home </a>
                </div>
            )}
        </div>
    );
};

export default BLogHero;