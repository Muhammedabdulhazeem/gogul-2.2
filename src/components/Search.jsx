import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { useResultContext } from "../hooks/useResultContext";
import Links from "./Links";

const Search = () => {
    const [text, setText] = useState('')
    const {setSearchTerm} = useResultContext()
    const [debouncedValue] = useDebounce(text, 300)
    console.log("user-text: " + text)

    useEffect(() => {
        if(debouncedValue) setSearchTerm(text)
    }, [debouncedValue])

    useEffect(() => {
        if(text == "") setSearchTerm()
            
    }, [text])

    return (
        <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
            <input
              type="text"
              value={text}
              className="sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
              placeholder="Search Gogul or type URL"
              onChange={(e) => setText(e.target.value)}
            />
            {text && (<button 
              type="button" 
              className="absolute top-2.5 right-4 text-lg text-gray-500"
              onClick={() => setText('')}
            >
                X
            </button>)}
            <Links />
        </div>
    );
}
 
export default Search;