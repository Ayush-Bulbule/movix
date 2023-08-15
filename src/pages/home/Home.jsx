import React from 'react'
import HeroBanner from './heroBanner/HeroBanner'
import Trending from './trending/Trending'
import Popular from './popular/Popular'
import TopRated from './topRated/TopRated'

const Home = () => {
    return (
        <>
            <HeroBanner />
            <Trending />
            <Popular />
            <TopRated />
            <div className="" style={{ "height": "1000px" }}></div>

        </>
    )
}

export default Home