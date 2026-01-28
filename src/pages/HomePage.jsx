import React from 'react'
import SearchBar from '../components/SearchBar'
import Tabs from '../components/Tabs'
import ResultGrid from '../components/ResultGrid'
import { useSelector } from 'react-redux'

const HomePage = () => {

  const query = useSelector((state) => state.search.query);

  return (
    <div className='bg-gray-950'>
        <SearchBar /> 
        {!query? '':<Tabs />}
        
        <ResultGrid />
    </div>
  )
}

export default HomePage