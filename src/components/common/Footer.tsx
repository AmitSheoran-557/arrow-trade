import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FOOTER_LINKS_LIST, SOCIAL_LINKS_LIST } from '../../utils/helper'
import Description from './Description'

const Footer = () => {
    return (
        <div className='bg-blueBlack w-full relative'>
            <div className="container mx-auto px-4 lg:pt-[60px] lg:pb-20 max-lg:py-14 max-md:py-12">
                <Link href='/'>
                    <Image className='max-w-[150px] w-full' src='/assets/images/webp/header-logo.webp' alt='footer-logo' width={150} height={44} />
                </Link>
                <div className="flex gap-6 flex-wrap lg:p-2.5 max-lg:py-1 lg:my-[30px] md:my-6 my-5 items-center">
                    {FOOTER_LINKS_LIST.map((item, index) => (
                        <Link key={index} href={item.link} className='text-white hover:text-lightSkyBlue transition-all ease-linear duration-300 lg:text-base text-sm'>{item.title}</Link>
                    ))}
                </div>
                <h2 className="text-white font-semibold lg:text-base text-sm ">Trade Responsibility Disclaimer</h2>
                <Description customStyle='text-white/80 lg:max-w-[1050px] lg:text-base text-sm !text-start lg:mb-[30px] md:mb-6 mb-5' title="Trading Forex and CFDs involves a high level of risk and may not be suitable for all investors. Leverage can work both for and against you, and it’s possible to lose more than your initial investment. Please ensure that you fully understand the risks involved, taking into account your financial objectives and risk appetite. Seek independent financial advice if necessary before starting trading. ArrowTrade does not offer financial advice." />
                <h3 className="text-white font-semibold lg:text-base text-sm ">Disclaimer</h3>
                <Description customStyle='text-white/80 lg:text-base text-sm !text-start lg:mb-[30px] md:mb-6 mb-5' title="Information on this site is not directed at residents of any country or jurisdiction where distribution or use would be contrary to local law or regulation. Please check with your local regulations before proceeding." />
                <h3 className="text-white font-semibold lg:text-base text-sm ">Regulatory Information</h3>

                <Description customStyle='text-white/80 lg:text-base text-sm !text-start lg:mb-2.5 mb-2' title="Arrowtradefx.com is a website operated by Arrow Trade S.A.R.L, which is registered in: – Lebanon, Beirut, Barbour, Zrek Street, Najmat almazraa building, Eighth floor- company number 1028098. (Arrow trade offices: 2nd floor Hazmieh, Baabda Real Estate, Property 4370 sections 20/021, Beirut, Lebanon.)" />
                <Description customStyle='text-white/80 lg:text-base text-sm !text-start lg:mb-[50px] md:mb-8 mb-7' title="Arrow Trade S.A.R.L (Lebanon) is the sole entity authorized to operate the MetaTrader platform under our license. No other companies are involved in the operation or management of our MetaTrader license." />
                <div className='flex lg:gap-6 gap-5'>
                    {SOCIAL_LINKS_LIST.map((item, index) => (
                        <Link key={index} href={item.link} target='_blank' className='flex items-center transition-all ease-linear duration-300 hover:scale-125 justify-center rounded-full w-9 h-9'>
                            <Image src={item.image} alt={item.alt} width={24} height={24} />
                        </Link>
                    ))}
                </div>
            </div>
            <div className='w-full mx-auto text-center py-4 border-t border-white/20'>
                <p className='text-white/80 lg:text-base text-sm'>Copyright © ${new Date().getFullYear()} ArrowTrade. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
