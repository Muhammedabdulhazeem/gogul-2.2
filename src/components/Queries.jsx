import { Routes, Route, Navigate } from "react-router-dom";
import Results from "./Results";
import listIcon from '../asset/list.svg'
import gridIcon from '../asset/grid.svg'
import { useState } from "react";

const Queries = ({darkTheme}) => {
    const [view, setView] = useState("grid")

    return (
        <div className="p-4">
            <div className="flex items-center absolute top-20 right-8 gap-2">
                <svg onClick={() => setView("list")} className={view === "list" ? "w-6 h-6 border-2" : "w-6 h-6"} 
                    fill={darkTheme ? "white" : "currantColor"} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 
                        1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 
                        1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd">
                    </path>
                </svg>

                <svg onClick={() => setView("grid")} className={view === "grid" ? "w-6 h-6 border-2" : "w-6 h-6"} 
                    fill={darkTheme ? "white" : "currantColor"} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 
                        2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 
                        2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z">
                    </path>
                </svg>
           </div>
            <Routes>
                <Route path='/' element={<Navigate to='/search' />}/>
                <Route path={'/search'} element={<Results view={view} />} />
                <Route path='/search' element={<Results view={view}/>} />
                <Route path='/image' element={<Results view={view}/>} />
                <Route path='/news' element={<Results view={view}/>} />
                <Route path='/video' element={<Results view={view}/>} />
            </Routes>
        </div>
    );
}
 
export default Queries;