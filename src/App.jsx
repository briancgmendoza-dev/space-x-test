import { useDispatch, useSelector } from 'react-redux'
import { useCallback, useEffect, useRef } from 'react'

import { spaceXAction } from './store/spaceXSlice'
import Spinner from './components/Spinner'
import SearchBar from './components/SearchBar'
import LaunchList from './components/Launch/List';

import './assets/scss/styles.scss'
import './App.css';

/**
 * TODO:
 * 1. Some sort of pagination for LaunchList
 * 2. End of data.
*/

function App() {
  const dispatch = useDispatch()
  const { data, status } = useSelector((state) => state.spaceXData)
  const { searchTerm } = useSelector((state) => state.searchSpaceXData)
  const launchWrapperRef = useRef(null);

  useEffect(() => {
    dispatch(spaceXAction())
  }, [dispatch])

  const filteredData = searchTerm ? data.filter((item) => {
    return item?.mission_name?.toLowerCase().includes(searchTerm.toLowerCase())
  }) : data

  return (
    <div className="main__wrapper">
      <div className='container'>
        <SearchBar />
        {status === 'loading' && (<Spinner />)}
        <div ref={launchWrapperRef}>
          {status === 'succeeded' && (<LaunchList list={filteredData} />)}
        </div>
        {status === 'failed' && (<p>Something went wrong fetching spaceX data</p>)}
      </div>
    </div>
  )
}

export default App;
