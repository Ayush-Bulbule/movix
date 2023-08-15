import React, { useRef } from "react";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate, useNavigation } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";//formatting date

import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../lazyLoadImage/img";
import Genres from "../genres/Genres";
import PosterFallback from "../../assets/no-poster.png";
import CircleRating from "../circleRating/CircleRating";
import "./style.scss";

const Carousel = ({ data, loading, endpoint }) => {

    const navigate = useNavigate();
    const { url } = useSelector((state) => state.home);
    const carouselContainer = useRef();

    const navigation = (dir) => {
        //useRef hook to get the current carousel container
        const container = carouselContainer.current;

        const scrollAmount = dir === "left" ? container.scrollLeft - container.offsetWidth + 20
            : container.scrollLeft + container.offsetWidth + 20;

        container.scrollTo({
            left: scrollAmount,
            behavior: "smooth"
        });
    }

    const skItem = () => {
        return (
            <div className="skeletonItem">
                <div className="posterBlock skeleton"></div>
                <div className="textBlock">
                    <div className="title skeleton" ></div>
                    <div className="date skeleton"></div>
                </div>
            </div >
        )
    }

    return (
        <div className="carousel">
            <ContentWrapper>
                <BsFillArrowLeftCircleFill
                    className="carouselLeftNav arrow"
                    onClick={() => navigation("left")}
                />

                <BsFillArrowRightCircleFill
                    className="carouselRighttNav arrow"
                    onClick={() => navigation("right")}
                />
                {!loading ? (
                    <div className="carouselItems"
                        ref={carouselContainer}>
                        {
                            data?.map((item, index) => {

                                const posterUrl = item.poster_path ? url.poster + item.poster_path : PosterFallBack;
                                return (
                                    <div key={item.id}
                                        className="carouselItem"
                                        onClick={() => navigate(`/${item.media_type || endpoint}/${item.id}`)}
                                    >
                                        <div className="posterBlock">
                                            <Img src={posterUrl} />
                                            <CircleRating rating={item.vote_average} />
                                            <Genres data={item.genre_ids.slice(0, 2)} />
                                        </div>
                                        <div className="textBlock">
                                            <div className="title">
                                                {item.title || item.name}
                                            </div>
                                            <span className="date">
                                                {dayjs(item.release_Date).format("MMM D, YYYY")}
                                            </span>
                                        </div>
                                    </div>

                                )
                            })
                        }
                    </div>
                ) : (
                    <>
                        {skItem()}
                        {skItem()}
                        {skItem()}
                        {skItem()}

                    </>
                )}
            </ContentWrapper>
        </div>
    )
}

export default Carousel