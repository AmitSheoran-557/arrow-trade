"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { RightArrowIcon, SearchIcon } from "../../utils/icons";
import { CARDS_DATA_LIST } from "../../utils/helper";
import { useRouter, useSearchParams } from "next/navigation";
import Description from "./Description";

interface CardProps { id: string; date: string; title: string; description: string; readTime: string; author: string; authorImage: string; cardImage: any; }

const Card: React.FC<CardProps> = ({ id, date, title, description, readTime, author, authorImage, cardImage, }) => {
    const router = useRouter();

    return (
        <div className="bg-white/5 max-w-[364px] w-full text-white rounded-[10px] shadow-lg relative" onClick={() => router.push(`/blog/${id}`)}>
            <Image src={cardImage} alt={author} width={364} height={273} />
            <span className="absolute lg:right-5 right-4 lg:top-5 top-4 font-bold lg:text-base text-sm">{date}</span>
            <div className="w-full px-5 pb-[39px]">
                <div className="max-w-[324px] w-full -mt-5 flex lg:gap-4 gap-3 mx-auto justify-center">
                    <span className="max-w-[154px] w-full border flex justify-center items-center lg:text-sm text-xs lg:py-2 py-1.5 text-white/80 !leading-[150%] rounded-[50px] transition-all ease-linear duration-300 border-lightSkyBlue bg-raisinBlack">productivity</span>
                    <span className="max-w-[154px] w-full border flex justify-center items-center lg:text-sm text-xs lg:py-2 py-1.5 text-white/80 !leading-[150%] rounded-[50px] transition-all ease-linear duration-300 border-white hover:border-lightSkyBlue hover:bg-raisinBlack bg-jetBlack">{readTime}</span>
                </div>
                <h3 className="lg:text-xl text-lg font-semibold lg:mt-6 mt-5 lg:mb-2.5 mb-2">{title}</h3>
                <p className="lg:text-base text-sm text-white/80 lg:mb-6 mb-5">{description}</p>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2.5">
                        <img className="max-w-[50px] w-full rounded-full" src={authorImage} alt={author} />
                        <span className="lg:text-base text-sm font-semibold">{author}</span>
                    </div>
                    <RightArrowIcon />
                </div>
            </div>
        </div>
    );
};

const Cards: React.FC = () => {
    const [search, setSearch] = useState("");
    const [open, setOpen] = useState(3);
    const searchParams = useSearchParams();
    const router = useRouter();

    useEffect(() => {
        const param = searchParams.get("page");
        if (param) setOpen(parseInt(param) * 3);
    }, [searchParams]);

    const filteredCards = CARDS_DATA_LIST.filter((card) =>
        card.title.toLowerCase().includes(search.toLowerCase())
    );
    const BlogCard = filteredCards.slice(0, open);

    const handleShowMore = () => {
        const nextPage = open < filteredCards.length ? open / 3 + 1 : 1;
        setOpen(nextPage * 3);
        router.push(`?page=${nextPage}`);
    };

    return (
        <div className="container pb-[30px] mx-auto max-2xl:px-4">
            <Image className="absolute pointer-events-none top-[140%] right-0 max-w-[230px] " src="/assets/images/webp/article-ellipse.webp" alt="shadow-img" width={100} height={200} />
            <div className="lg:pb-[70px] pb-14 w-full flex flex-col justify-center">
                <h1 className='lg:text-[64px] lg:pt-[70px] pt-14 md:text-5xl text-4xl lg:mb-4 mb-3 text-center text-white lg:max-w-2xl max-w-lg mx-auto'>
                    Unlock Knowledge with Our <span className='text-lightSkyBlue'>Featured Articles</span>
                </h1>
                <Description customStyle='max-w-[654px] mx-auto lg:mb-[30px] md:mb-6 mb-5'
                    title="Explore our latest articles, insights, and expert advice on industry trends. Stay informed, gain new perspectives, and discover valuable tips to help you stay ahead." />
                <div className="max-w-[558px] flex lg:gap-2.5 gap-2 mx-auto w-full lg:px-[30px] px-5 py-3 border border-white/25 rounded-[39px] bg-transparent">
                    <SearchIcon />
                    <input className="bg-transparent outline-none w-full placeholder:text-white/80 !leading-[150%] text-white/80 lg:text-base text-sm" type="search" placeholder="Search"
                        value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-5">
                {filteredCards.length === 0 ? (
                    <div className="text-center text-white mt-6">
                        <h2 className="text-lg font-semibold">No Cards Found</h2>
                    </div>
                ) : (
                    BlogCard.map((card, index) => <Card key={index} {...card} />)
                )}
            </div>
            <button className="flex mx-auto lg:mt-5 mt-4 items-center justify-center !leading-[120%] whitespace-nowrap linear-gradient transition-all ease-linear duration-300 shadow-[_0px_4px_24.6px_0px_#71CED061] text-black hover:text-lightSkyBlue border border-transparent hover:bg-transparent hover:border-lightSkyBlue bg-lightSkyBlue lg:px-6 px-4 lg:py-[16.1px] py-3 rounded-[72px] lg:text-base text-sm font-semibold" onClick={handleShowMore}>
                {open < filteredCards.length ? "Show all cards" : "Hide all cards"}
            </button>
        </div>
    );
};

export default Cards;
