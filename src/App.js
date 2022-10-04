import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Queries from './components/Queries';
import { useState } from 'react';
import { useResultContext } from './hooks/useResultContext';
import { useEffect } from 'react';


const emptySearch = (
  <div className='empty-search'>
    <p>Nothing has been searched yet 🤷</p>
  </div>
)

function App() {
  const [darkTheme, setDarkTheme] = useState(false)
  const { searchTerm } = useResultContext()
  // const [empty, setEmpty] = useState(false)
  // console.log("empty: " + empty)
  console.log("searchTerm: " + searchTerm)


  // useEffect(() => {
  //   if(searchTerm === '') {
  //     setEmpty(true)
  //   } else {
  //     setEmpty(false)
  //   }

  // }, [searchTerm])

  return (
    <div className={darkTheme ? 'dark' : ""}>
      <div className='bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen'>
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
        {!searchTerm ? emptySearch  : <Queries darkTheme={darkTheme}/>}
        <Footer />
      </div>
    </div>
  );
}

export default App;
