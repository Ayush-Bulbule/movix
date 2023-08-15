import React from 'react'
import useFetch from '../../hooks/useFetch'
import DetailsBanner from './detailsBanner/DetailsBanner'
import { useParams } from 'react-router-dom';

const Details = () => {
    console.log("Hello");
    const { mediaType, id } = useParams();
    const { data, loading } = useFetch(`/${mediaType}/${id}`);


    const { data: videos, loading: videosLoading } = useFetch(`/${mediaType}/${id}/videos`);
    const { data: credits, loading: creditsLoading } = useFetch(`/${mediaType}/${id}/credits`)
    console.log("credits:");
    console.log(videos?.results?.[0])
    return (
        <DetailsBanner video={videos?.results?.[0]} crew={credits?.crew} />
    )
}

export default Details