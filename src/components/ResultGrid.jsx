import { useEffect } from 'react'
import { setResults, setLoading, setError } from '../redux/features/searchSlice'
import { fetchPhotos, fetchVideos } from '../api/mediaAPI'
import { useDispatch, useSelector } from 'react-redux'
import ResultCard from './ResultCard'


const ResultGrid = () => {

  const dispatch = useDispatch()
  const { query, activeTab, results, loading, error } = useSelector((store) => store.search)


  const getData = async () => {
    // If we won't search then do nothing
    if(!query) return

    try {
      dispatch(setLoading());

      let data = [];
      if (activeTab == 'Photos') {
        let response = await fetchPhotos(query)
        data = response.results.map((item) => ({
          id: item.id,
          type: 'Photos',
          title: item.alt_description,
          thumbnail: item.urls.small,
          src: item.urls.full,
          url: item.links.html,
        }))
      }
      else if (activeTab == 'Videos') {
        let response = await fetchVideos(query)
        console.log(response);
        data = response.videos.map((item) => ({
          id: item.id,
          type: 'Videos',
          title: item.user.name || 'video',
          thumbnail: item.image,
          src: item.video_files[0].link,
          url: item.url,
        }))
      }

      dispatch(setResults(data));
    }
    catch (err) {
      dispatch(setError(err.message))
    }
  }

  useEffect(function () {
    getData()
  }, [query, activeTab])

  if(error) return <h1 className='h-screen flex justify-center items-center'>Error</h1>
  if(loading) return <h1 className='h-screen flex justify-center items-center'>Loading...</h1>


  return (
    <div className='px-3 sm:px-10 py-5 flex flex-wrap justify-center gap-3 sm:gap-4 overflow-auto'>
      {results.map((item, idx)=>{
        return <div key={idx}>
          <ResultCard item={item} />
        </div>
      })}
    </div>
  )
}

export default ResultGrid