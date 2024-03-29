import { useEffect } from "react";
import { fetchFromApi } from "./utils/api";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration, getGenres } from "./store/homeSlice";



import Home from "./pages/home/Home";
import PageNotFound from "./pages/404/PageNotFound";
import Details from "./pages/details/Details";
import Explore from "./pages/explore/Explore";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import SearchResult from "./pages/searchResult/SearchResult";



function App() {
  const url = useSelector((state) => state.home);
  console.log(url);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, [])

  const fetchApiConfig = () => {
    fetchFromApi("/configuration").then((res) => {
      console.log(res);

      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original"
      }
      dispatch(getApiConfiguration(url));
    })
  };


  const genresCall = async () => {
    let promises = [];
    let endpoints = ["tv", "movie"];

    let allGenres = {};

    endpoints.forEach((endpoint) => {
      promises.push(fetchFromApi(`/genre/${endpoint}/list`));
    });

    //Promise ALl
    const data = await Promise.all(promises);
    data.map(({ genres }) => {
      console.log("G: " + genres);
      return genres.map((item) => (
        allGenres[item.id] = item
      ))
    });
    dispatch(getGenres(allGenres));
  }
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
