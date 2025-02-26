"use client";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CARDS_DATA_LIST } from '../../utils/helper';
import { NextArrowIcon, PrevArrowIcon, RightArrowIcon } from '../../utils/icons';
import Image from 'next/image';
import CommonHeading from './CommonHeading';

interface ArticleProps {
  heading: string;
}

const Article: React.FC<ArticleProps> = ({ heading }) => {
  const featuredCards = CARDS_DATA_LIST.filter(card => card.isFeatured);

  const NextArrow = ({ onClick }: any) => (
    <div className="next-arrow cursor-pointer absolute top-[45%] max-xl:hidden -right-24" onClick={onClick}>
      <NextArrowIcon />
    </div>
  );

  const PrevArrow = ({ onClick }: any) => (
    <div className="prev-arrow cursor-pointer absolute top-[45%] max-xl:hidden -left-24" onClick={onClick}>
      <PrevArrowIcon />
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="card-slider xl:py-[180px] lg:py-32 md:py-24 sm:py-16 py-12">
      <div className="container mx-auto px-4">
        <CommonHeading headingClass="text-center lg:mb-[70px] md:mb-10 sm:mb-8 mb-5" heading={heading} colorHeading="Articles" />
<div className="mx-auto">
        <Slider {...settings}>
          {featuredCards.length >= 3 && featuredCards.map(card => (
            <div key={card.id} className="bg-white/5 max-w-[364px] lg:min-w-[364px] w-full text-white rounded-[10px] shadow-lg relative">
              <Image src={card.cardImage} alt={card.author} width={364} height={273} />
              <span className='absolute lg:right-5 right-4 lg:top-5 top-4 font-bold lg:text-base text-sm'>{card.date}</span>
              <div className="w-full px-5 pb-[39px]">
                <div className='max-w-[324px] w-full -mt-5 flex lg:gap-4 gap-3 mx-auto justify-center'>
                  <span className='max-w-[154px] w-full border flex justify-center items-center lg:text-sm text-xs lg:py-2 py-1.5 text-white/80 !leading-[150%] rounded-[50px] transition-all ease-linear duration-300 border-lightSkyBlue bg-raisinBlack'>productivity</span>
                  <span className='max-w-[154px] w-full border flex justify-center items-center lg:text-sm text-xs lg:py-2 py-1.5 text-white/80 !leading-[150%] rounded-[50px] transition-all ease-linear duration-300 border-white hover:border-lightSkyBlue hover:bg-raisinBlack bg-jetBlack'>{card.readTime}</span>
                </div>
                <h3 className="lg:text-xl text-lg font-semibold lg:mt-6 mt-5 lg:mb-2.5 mb-2">{card.title}</h3>
                <p className="lg:text-base text-sm text-white/80 lg:mb-6 mb-5">{card.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2.5">
                    <img className="max-w-[50px] w-full rounded-full" src={card.authorImage} alt={card.author} />
                    <span className="lg:text-base text-sm font-semibold">{card.author}</span>
                  </div>
                  <RightArrowIcon />
                </div>
              </div>
            </div>
          ))}
        </Slider>
        </div>
        <div className="flex justify-center items-center gap-5">
          {featuredCards.length < 3 && featuredCards.map(card => (
            <div key={card.id} className="bg-white/5 max-w-[364px] w-full text-white rounded-[10px] shadow-lg relative">
              <Image src={card.cardImage} alt={card.author} width={364} height={273} />
              <span className='absolute lg:right-5 right-4 lg:top-5 top-4 font-bold lg:text-base text-sm'>{card.date}</span>
              <div className="w-full px-5 pb-[39px]">
                <div className='max-w-[324px] w-full -mt-5 flex lg:gap-4 gap-3 mx-auto justify-center'>
                  <span className='max-w-[154px] w-full border flex justify-center items-center lg:text-sm text-xs lg:py-2 py-1.5 text-white/80 !leading-[150%] rounded-[50px] transition-all ease-linear duration-300 border-lightSkyBlue bg-raisinBlack'>productivity</span>
                  <span className='max-w-[154px] w-full border flex justify-center items-center lg:text-sm text-xs lg:py-2 py-1.5 text-white/80 !leading-[150%] rounded-[50px] transition-all ease-linear duration-300 border-white hover:border-lightSkyBlue hover:bg-raisinBlack bg-jetBlack'>{card.readTime}</span>
                </div>
                <h3 className="lg:text-xl text-lg font-semibold lg:mt-6 mt-5 lg:mb-2.5 mb-2">{card.title}</h3>
                <p className="lg:text-base text-sm text-white/80 lg:mb-6 mb-5">{card.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2.5">
                    <img className="max-w-[50px] w-full rounded-full" src={card.authorImage} alt={card.author} />
                    <span className="lg:text-base text-sm font-semibold">{card.author}</span>
                  </div>
                  <RightArrowIcon />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Article;
