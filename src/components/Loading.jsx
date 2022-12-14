import {Puff} from 'react-loader-spinner'

const Loading = () => {
    return (
        <div className='flex justify-center items-center'>
            <Puff
                height="80"
                width="80"
                radisu={1}
                color="#00BFFF"
                ariaLabel="puff-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
    
}
 
export default Loading;