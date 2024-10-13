import React from 'react'
import Posts from './content/Posts'
import Authors from './content/Authors'

const Home = () => {
    return (
        <div className='h-[90vh] max-sm:h-[92vh] gap-[1vw] w-[89vw] py-[1vw] mx-auto flex'>
            <Posts />
            <Authors />
        </div>
    )
}

export default Home
