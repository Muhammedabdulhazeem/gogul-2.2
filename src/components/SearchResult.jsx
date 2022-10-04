import { useResultContext } from "../hooks/useResultContext";


const SearchResult = ({ view }) => {
    const {results} = useResultContext()
    console.log(results)

    return (
        <div className={view === "grid" ? "flex flex-wrap justify-between space-y-6 sm:px-56" : "flex flex-col space-y-7 ml-8"}>
            {results?.map(({link, title}, index) => (
                <div key={index} className='md:w-2/5 w-full'>
                    <a href={link} target={"_blank"} rel='noreferrer' >
                        <p className="text-sm">
                            {link.length > 30 ? link.substring(0, 30) : link.title}
                        </p>
                        <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                            {title}
                        </p>
                    </a>
                </div>
            ))}
        </div>
    );
}
 
export default SearchResult;