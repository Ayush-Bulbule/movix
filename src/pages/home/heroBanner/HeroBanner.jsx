import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './style.scss'
import useFetch from '../../../hooks/useFetch'

import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import Img from '../../../components/lazyLoadImage/Img'


const HeroBanner = () => {

    const navigate = useNavigate()
    const [background, setBackground] = useState('')
    const [query, setQuery] = useState('')
    const { url } = useSelector((state) => state.home)
    // custom useFetch Hook to fetch data from api
    const { data, loading } = useFetch('/movie/upcoming')

    useEffect(() => {
        const bg = url.backdrop + data?.results[Math.floor(Math.random() * 20)]?.backdrop_path;
        setBackground(bg);
        console.log(data)
    }, [data])

    const searchQueryHandler = (e) => {
        if (e.key === 'Enter' && query.length > 0) {
            navigate(`/search/${query}`)
        }
    }
    return (
        <div className="heroBanner">
            {!loading && <div className="backdrop-img">
                <Img src={background} />
            </div>}
            <div className="opacity-layer"></div>
            <ContentWrapper>
                <div className="heroBannerContent">
                    <span className="title">Welcome</span>
                    <span className="subTitle">Millions of Movies, TV shows and people to discover.
                        Explore New!

                    </span>
                    <div className="searchInput">
                        <input onChange={(e) => setQuery(e.target.value)} type="text" name="search" id="search" placeholder='Search a Movie.....' />
                        <button>Search</button>
                    </div>
                </div>
            </ContentWrapper >
        </div>
    )
}

export default HeroBanner