import React, { Suspense } from 'react'
import Market from '../../../components/Market'
import Article from '../../../components/common/Article'
import BLogHero from '../../../components/BlogHero'

const page = () => {
    return (
        <div className='bg-darkBlue'>
            <Suspense>
                <BLogHero />
                <Market />
                <Article heading='Related' />
            </Suspense>
        </div>
    )
}

export default page
