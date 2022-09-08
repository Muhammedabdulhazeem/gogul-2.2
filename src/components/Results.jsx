import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import Loading from "./Loading";
import { useResultContext } from "../hooks/useResultContext";
import SearchResult from "./SearchResult";
import ImageResult from "./ImageResult";
import NewsResult from "./NewsResult";
import VideoResults from "./VideoResults";


const Results = () => {
    const { results, isLoading, getResults, searchTerm, setSearchTerm } = useResultContext();
    const location = useLocation();

    useEffect(() => {
        if(searchTerm) {
            getResults(`${location.pathname}/q=${searchTerm}&num=10`)
            // if(location.pathname === '/videos') {
            //     getResults(`search/q=${searchTerm} videos`)
            // } else {
            //     getResults(`${location.pathname}/q=${searchTerm}&num=40`)
            // }
        }
    }, [searchTerm, location.pathname])

    if(isLoading) return <Loading />

    console.log(location.pathname)

    switch (location.pathname) {
        case '/search':
            return <SearchResult />;
        case '/image':
            return <ImageResult />;
        case '/video':
            return <VideoResults />;
        case '/news':
            return <NewsResult />;
        default:
            return "ERROR";
    }

    // return (
    //     <div>
    //         Results
    //     </div>
    // );
}
 
export default Results;