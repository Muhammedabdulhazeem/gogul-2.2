import {createContext, useState } from "react";

export const ResultContext = createContext()

// 'https://google-search3.p.rapidapi.com/api/v1/search/q=elon+musk',

const baseURL = 'https://google-search3.p.rapidapi.com/api/v1'

export const ResultContextProvider = ({children}) => {
    const [results, setResults] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('');

    const getResults = async (type) => {
        setIsLoading(true)

        // types = /vidieos, /search, /images
        const res = await fetch(`${baseURL}${type}`, {
            method: 'GET',
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'EU',
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
            }
        });

        const data = await res.json();
        // console.log(data)

        if(type.includes('/new')) {
            setResults(data.entries);
        } else if(type.includes('/image')) {
            setResults(data.image_results);
        } else if(type.includes('/video')) {
            setResults(data.results);
        } else{
            setResults(data.results);
        }

        setIsLoading(false)
    }

    return (
        <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}>
            { children }
        </ResultContext.Provider>
    )
}

 

