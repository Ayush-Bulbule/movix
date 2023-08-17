import React from 'react'
import useFetch from '../../hooks/useFetch'
import DetailsBanner from './detailsBanner/DetailsBanner'
import { useParams } from 'react-router-dom';
import Cast from './cast/Cast';
import VideosSection from './videoSection/VideosSection';
import Similar from './carousels/Similar';
import Recommendation from './carousels/Recommondations';

const Details = () => {
    console.log("Hello");
    const { mediaType, id } = useParams();
    const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);


    const { data: videos, loading: videosLoading } = useFetch(`/${mediaType}/${id}/videos`);
    const { data: credits, loading: creditsLoading } = useFetch(`/${mediaType}/${id}/credits`)
    console.log("credits:" + credits);
    console.log("videos:" + loading);
    console.log("data:")
    console.log(data);

    if (credits?.crew) {
        console.log("cast:");
        console.log(credits.cast);
    }
    console.log(videos?.results?.[0])
    return (
        <>
            <DetailsBanner video={videos?.results?.[0]} crew={credits?.crew} />
            {
                credits?.cast &&
                <Cast data={credits?.cast} loading={creditsLoading} />

            }
            <VideosSection data={data} loading={loading} />
            <Similar mediaType={mediaType} id={id} />
            <Recommendation mediaType={mediaType} id={id} />
        </>
    )
}

export default Details