import React, { Suspense } from 'react'
import Market from '../../../components/Market'
import Article from '../../../components/common/Article'
import Cards from '../../../components/common/Cards'

const page = () => {
    return (
        <div className='bg-darkBlue min-h-screen flex flex-col justify-center items-center'>
            <Suspense>
                <Cards />
                <Market />
                <Article heading='Related' />
            </Suspense>
        </div>
    )
}

export default page
