import { useContext } from "react";
import { ResultContext } from "../contexts/ResultContextProvider";

export const useResultContext = () => {
    const context = useContext(ResultContext)
    return context
}
 
