import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import "./style.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/movix-logo.svg";

const Header = () => {
    const [show, setShow] = useState("top");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [query, setQuery] = useState("");
    const [showSearch, setShowSearch] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    useEffect(() => {
        window.addEventListener("scroll", controllNavbar);

    }, [lastScrollY]);

    const controllNavbar = () => {
        console.log(window.scrollY);
        if (window.scrollY > 200) {

            if (window.scrollY > lastScrollY && !mobileMenu) {
                setShow("hide");
            } else {
                setShow("show");
            }

            setLastScrollY(window.scrollY);
        } else {
            setShow("show");
        }
    }
    const searchQueryHandler = (e) => {
        if (e.key === "Enter" && query !== "") {
            navigate(`/search/${query}`);
            setQuery(e.target.value);
        }
    }

    const openSearch = () => {
        setMobileMenu(false);
        console.log("hi");
        setShowSearch(true);
    }

    const openMobileMenu = () => {
        setMobileMenu(true);
        setShowSearch(false);
    }


    const navigationHandler = (type) => {
        console.log(type);
        if (type === "movie") {
            navigate("/explore/movie");
        } else if (type === "tv") {
            navigate("/explore/tv");
        } else {
            navigate(type);
        }
        setMobileMenu(false);
    }

    return (
        <header className={`header ${mobileMenu ? "mobileView" : ''} ${show}`}>
            <ContentWrapper>
                <div className="logo">
                    <img src={logo} alt="Logo" onClick={() => navigate("/")} className="logo" />
                </div>
                <ul className="menuItems">
                    <li className="menuItem" onClick={() => navigationHandler("movie")}>Movies</li>
                    <li className="menuItem" onClick={() => navigationHandler("tv")}> TVShows</li>
                    <li className="menuItem" onClick={() => openSearch()} >
                        <HiOutlineSearch />
                    </li>
                </ul>

                <div className="mobileMenuItems">
                    <HiOutlineSearch onClick={() => openSearch()} />
                    {
                        mobileMenu ? (
                            <VscChromeClose onClick={() => setMobileMenu(false)} />
                        ) : (
                            <SlMenu onClick={openMobileMenu} />
                        )
                    }
                </div>
            </ContentWrapper>
            {
                showSearch && <div className="searchBar">
                    <ContentWrapper>
                        <div className="searchInput">
                            <input type="text" name="placeholder
                        Search for a tv show..." id="sb"
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyUp={searchQueryHandler}
                            />
                            <VscChromeClose onClick={() => setShowSearch(false)} />
                        </div>
                    </ContentWrapper>

                </div>
            }
        </header >
    );
};
export default Header;
