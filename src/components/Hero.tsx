import React from 'react'
import Cards from './common/Cards'
import Article from './common/Article'
import Description from './common/Description'

const Hero = () => {
    return (
        <div className='bg-darkBlue -mt-1'>
            <h1 className='lg:text-[64px] lg:pt-[70px] pt-14 md:text-5xl text-4xl lg:mb-4 mb-3 text-center text-white lg:max-w-2xl max-w-lg mx-auto'>
                Unlock Knowledge with Our <span className='text-lightSkyBlue'>Featured Articles</span>
            </h1>
            <Description customStyle='max-w-[654px] mx-auto lg:mb-[30px] md:mb-6 mb-5'
                title="Explore our latest articles, insights, and expert advice on industry trends. Stay informed, gain new perspectives, and discover valuable tips to help you stay ahead." />
            <div className="container mx-auto">
                <Cards />
                <Article />
            </div>
        </div>
    )
}

export default Hero