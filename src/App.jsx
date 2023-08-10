import { useEffect } from "react";
import { fetchFromApi } from "./utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";
//01:04:56
function App() {
  const url = useSelector((state) => state.home.url);
  console.log(url);
  const dispatch = useDispatch();

  useEffect(() => {
    apiTesting();
  }, [])

  const apiTesting = () => {
    fetchFromApi("/movie/popular").then((res) => {
      console.log(res);
      dispatch(getApiConfiguration(res));
    })
  }
  return (
    <>
      App

    </>
  )
}

export default App
