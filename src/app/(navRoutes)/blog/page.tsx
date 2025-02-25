import React from 'react'
import Market from '../../../components/Market'
import Article from '../../../components/common/Article'
import Cards from '../../../components/common/Cards'

const page = () => {
    return (
        <div className='bg-darkBlue min-h-screen flex flex-col justify-center items-center'>
            <Cards/>
            <Market />
            <Article heading='Related'/>
        </div>
    )
}

export default page
