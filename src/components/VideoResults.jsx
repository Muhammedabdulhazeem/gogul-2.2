import ReactPlayer from "react-player/youtube";
import { useResultContext } from "../hooks/useResultContext";

const VideoResults = () => {
    const {results} = useResultContext()
    console.log('this is the result:')
    console.log(results)

    // `https/${result.additional_links?.[0].href}`
    return (
        <div className="flex flex-wrap">
            {results.map((result, index) => (
                <div key={index} className="p-2">
                    <h1>HELLO</h1>
                    <p className=" border-4 border-red-600">
                        {result?.link}
                    </p>
                    {result?.link && <ReactPlayer url={result?.link} controls width="355px" height="200px" />}
                    <p className=" border-4 border-green-600">{result?.cite?.domain}</p>
                </div>
            ))}
        </div>
    );
}
 
export default VideoResults;