import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../redux/features/searchSlice'

const Tabs = () => {

    const tabs = ['Photos', 'Videos']
    const dispatch = useDispatch()
    const activeTab = useSelector((state) => state.search.activeTab)

  return (
    <div className='w-full flex gap-5 justify-center px-10 py-5'>
        {tabs.map(function(elem, idx){
            return (
                <button key={idx} 
                className={`${(activeTab == elem?'bg-blue-800':'bg-gray-600')} px-5 py-2 rounded-md uppercase active:scale-95 font-semibold`}
                onClick={()=>{
                    dispatch(setActiveTab(elem))
                }}
                >
                    {elem}
                </button>
            )
        })}
    </div>
  )
}

export default Tabs