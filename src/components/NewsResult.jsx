import { useResultContext } from "../hooks/useResultContext";


const NewsResult = ({view}) => {
    const {results} = useResultContext()

    const randit = Math.random() * 1000
    const rndit = Math.random() * 900

    return (
        <div className={view === "grid" ? "flex flex-wrap justify-between space-y-6 sm:px-56 items-center" : "flex flex-col space-y-7 ml-8"}>
            {results?.map(({links, id, source, title}) => (
                <div key={id} className='md:w-2/5 w-full'>
                    {console.log(id)}
                    <a href={links?.[0].href} target={"_blank"} rel='noreferrer' className="hover:underline">
                        <p className="text-lg dark:text-blue-300 text-blue-700">
                            {title}
                        </p>
                        <div className="flex gap-4">
                            <a href={source?.href} className="hover:underline hover:text-blue-300" target='_blank' rel="noreferrer">
                                {source?.href}
                            </a>
                        </div>
                    </a>
                </div>
            ))}
        </div>
    );
}
 
export default NewsResult;