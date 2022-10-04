import ReactPlayer from "react-player/youtube";
import { useResultContext } from "../hooks/useResultContext";

const VideoResults = ({view}) => {
    const {results} = useResultContext()
    console.log('this is the result:')
    console.log(results)

    // `https/${result.additional_links?.[0].href}`
    return (
        <div className={view === "grid" ? "flex flex-wrap" : "flex flex-col space-y-7 ml-8"}>
            {results.map((result, index) => (
                <div key={index} className="p-2">
                    {result?.link && <ReactPlayer url={result?.link} controls width="355px" height="200px" />}
                </div>
            ))}
        </div>
    );
}
 
export default VideoResults;