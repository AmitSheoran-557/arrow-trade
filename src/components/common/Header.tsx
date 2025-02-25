"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { NAV_LINKS_LIST } from "../../utils/helper";
import { useRouter, usePathname } from "next/navigation";
import { DropDownIcon } from "../../utils/icons";

const Header: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const currentPath = pathname;
        const selectedLinkIndex = NAV_LINKS_LIST.findIndex((link) => link.link === currentPath);
        if (selectedLinkIndex !== -1) {
            setSelectedIndex(selectedLinkIndex);
        }
        if (open && window.innerWidth < 1024) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [open, pathname]);

    const handleLinkClick = (index: number, path: string) => {
        setOpen(!open);
        setSelectedIndex(index);
        router.push(path);
    };

    return (
        <div className={`flex justify-between bg-darkBlue flex-col w-full z-20 relative`}>
            <div className="max-w-[1220px] max-2xl:px-4 flex w-full mx-auto items-center relative">
                <div className="bg-white/10 w-full flex justify-between items-center lg:py-4 py-3 lg:pe-10 lg:ps-[88px] max-lg:px-10 max-md:px-7 max-sm:px-5 lg:mt-4 mt-3 rounded-[60px] border-white/15 border backdrop:blur-xl">
                    <button onClick={() => setOpen(!open)} className={`hidden md:max-w-10 md:h-11 h-full max-w-8 w-full justify-center items-center max-lg:absolute max-lg:right-12 max-md:right-12 max-sm:right-10 relative z-[70] max-lg:flex flex-col overflow-hidden`}>
                        <span className={`w-full transition-all duration-300 md:min-h-1 md:min-w-10 max-md:min-w-8 h-[3.5px] md:mb-2 mb-1.5 !rounded-full bg-white relative after:w-full after:h-full after:absolute after:top-0 after:left-0 ${open ? "rotate-45 md:!-mb-1 after:rotate-90 after:!rounded-sm after:bg-white !bg-white" : ""}`}></span>
                        <span className={`w-full transition-all duration-300 md:min-h-1 md:min-w-10 max-md:min-w-8 h-[3.5px] md:mb-2 mb-1.5 !rounded-full bg-white ${open ? "hidden" : ""}`}></span>
                        <span className={`w-full transition-all duration-300 md:min-h-1 md:min-w-10 max-md:min-w-8 h-[3.5px] !rounded-full bg-white after:!bg-white ${open ? "-translate-x-12 !bg-white" : ""}`}></span>
                    </button>
                    <Link href="/">
                        <Image className="lg:max-w-[150px] lg:max-h-11 max-w-32 w-auto h-auto" src="/assets/images/webp/header-logo.webp" alt="page-logo" width={150} height={44} />
                    </Link>
                    <div className={`flex xl:gap-6 xl:pl-10 lg:pl-5 items-center max-lg:px-4 relative w-full max-lg:bg-black mx-auto gap-5 !text-black lg:max-h-max max-lg:fixed max-lg:top-0 max-lg:h-full max-lg:w-full max-lg:flex-col max-lg:bg-hero-pattern bg-cover bg-top max-lg:duration-300 justify-center max-lg:items-center z-[60] ${open ? "max-lg:left-0" : "max-lg:left-full"}`}>
                        {NAV_LINKS_LIST.map((item, index) => (
                            <div key={index} className="relative group" onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
                                <Link href={item.link} onClick={() => handleLinkClick(index, item.link)}
                                    className={`relative lg:text-sm text-xl flex items-center group-hover:text-lightSkyBlue text-white/70 transition-all duration-300 !tracking-wide ease-linear group
                                  ${selectedIndex === index ? "font-bold !text-lightSkyBlue" : ""}`}>
                                    {item.title}
                                    {item.dropdownContent && (
                                        <span className="ml-2 dropdown-icon"><DropDownIcon /></span>
                                    )}
                                    <span className="absolute left-0 lg:-bottom-0.5 bottom-0 w-0 h-[2px] bg-lightSkyBlue transition-all rounded-xl duration-300 ease-linear group-hover:w-full"></span>
                                </Link>
                                {item.dropdownContent && hoveredIndex === index && (
                                    <div className="absolute left-0 top-full pt-2 max-w-xs lg:bg-white max-lg:bg-white transition-all ease-linear duration-300 shadow-lg rounded-xl p-4 w-full">
                                        {item.dropdownContent.map((dropdownItem, dropdownIndex) => (
                                            <Link key={dropdownIndex}  href={dropdownItem.link}  className="text-black flex w-full hover:text-lightSkyBlue cursor-pointer mt-0.5 hover:scale-110 transition-all ease-linear duration-300">
                                                {dropdownItem.title}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        <div className="md:hidden max-md:block">
                            <button onClick={() => setOpen(!open)} className="flex items-center mb-5 justify-center !leading-[120%] whitespace-nowrap linear-gradient transition-all ease-linear duration-300 hover:shadow-[_0px_4px_24.6px_0px_#71CED061] hover:text-black text-lightSkyBlue border border-lightSkyBlue bg-transparent hover:bg-lightSkyBlue lg:px-[15.5px] px-3 lg:py-[16.1px] py-3 rounded-[72px] lg:text-base text-sm font-semibold">
                                Sign Up
                            </button>
                            <button onClick={() => setOpen(!open)} className="flex items-center justify-center !leading-[120%] whitespace-nowrap linear-gradient transition-all ease-linear duration-300 shadow-[_0px_4px_24.6px_0px_#71CED061] text-black hover:text-lightSkyBlue border border-transparent hover:bg-transparent hover:border-lightSkyBlue bg-lightSkyBlue lg:px-6 px-4 lg:py-[16.1px] py-3 rounded-[72px] lg:text-base text-sm font-semibold">
                                Login
                            </button>
                        </div>
                    </div>
                    <div className="md:block max-md:hidden max-lg:mr-20">
                        <div className="flex lg:gap-6 gap-5">
                            <button className="flex items-center justify-center !leading-[120%] whitespace-nowrap linear-gradient transition-all ease-linear duration-300 hover:shadow-[_0px_4px_24.6px_0px_#71CED061] hover:text-black text-lightSkyBlue border border-lightSkyBlue bg-transparent hover:bg-lightSkyBlue lg:px-[15.5px] px-3 lg:py-[16.1px] py-3 rounded-[72px] lg:text-base text-sm font-semibold">
                                Sign Up
                            </button>
                            <button className="flex items-center justify-center !leading-[120%] whitespace-nowrap linear-gradient transition-all ease-linear duration-300 shadow-[_0px_4px_24.6px_0px_#71CED061] text-black hover:text-lightSkyBlue border border-transparent hover:bg-transparent hover:border-lightSkyBlue bg-lightSkyBlue lg:px-6 px-4 lg:py-[16.1px] py-3 rounded-[72px] lg:text-base text-sm font-semibold">
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
