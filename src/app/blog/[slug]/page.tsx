import React from 'react'
import Market from '../../../components/Market'
import Article from '../../../components/common/Article'

const page = () => {
    return (
        <div className='bg-darkBlue'>
            <Market />
            <Article heading='Related'/>
        </div>
    )
}

export default page
