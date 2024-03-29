import React from "react";

import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";

const Recommendation = ({ mediaType, id }) => {
    const { data, loading, error } = useFetch(
        `/${mediaType}/${id}/recommendations`
    );

    if (data) {
        console.log("Recomedation data:");
        console.log(data);
    }

    return ((
        data?.results?.length) > 0 ? (
        <Carousel
            title="Recommendations"
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
        />
    ) : (
        <div className="noData"></div>
    ))

};

export default Recommendation;