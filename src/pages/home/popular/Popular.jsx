import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import '../style.scss'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/carousel/Carousel'

const Popular = () => {
    const [endPoint, setEndPoint] = useState("movie");
    const { data, loading } = useFetch(`/${endPoint}/popular`)

    const onTabChange = (tab) => {
        setEndPoint(tab === "Movies" ? "movie" : "tv")
    }

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <div className="carouselTitle">Whats's Popular</div>
                <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
            </ContentWrapper>
            {/* Carousel Section */}
            <Carousel data={data?.results} loading={loading} endpoint={endPoint} />
        </div>
    )
}

export default Popular