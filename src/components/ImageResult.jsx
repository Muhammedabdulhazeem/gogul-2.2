import { useResultContext } from "../hooks/useResultContext";

const ImageResult = ({view}) => {
    const { results } = useResultContext();

    return (
        <div className={view === "grid" ? "flex flex-wrap  items-center" : "flex flex-col space-y-7 ml-8"}>
            {results?.map(({image, link: { href, title }}, index) => (
                <a href={href} className='sm:p-3 p-5' key={index} target='_blank' rel='noreferrer'>
                    <img src={image?.src} alt={title} />
                    <p className="w-36 break-words text-sm mt-2">
                        {title}
                    </p>
                </a>
            ))}
        </div>
    );
}
 
export default ImageResult;