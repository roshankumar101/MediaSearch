import React from 'react'
import { Heart } from 'lucide-react';
import { removeCollection } from '../redux/features/collectionSlice'
import { useDispatch } from 'react-redux'

const CollectionCard = ({item}) => {

    const dispatch = useDispatch()

  return (
    <div className='w-56 h-60 bg-white rounded-2xl relative'>
      <a href={item.url} target='_blank' className='h-full' >
        <div className='h-full rounded-xl overflow-hidden'>
          {item.type == 'Photos'? <img src={item.src} alt="" className='w-full h-full object-cover object-center' /> : <video src={item.src} autoPlay loop muted className='w-full h-full object-cover object-center'></video>}
        </div>
      </a>
      <div className='absolute bottom-0'>
        <h2 className='text-md leading-tight font-semibold pl-3 pr-4 pb-6 capitalize'>{item.title}</h2>
      </div>
      <button onClick={()=>{
        dispatch(removeCollection(item))
      }}
      className='absolute bottom-0 right-0 mb-2 mr-1' title='Delete' ><Heart className='active:scale-80 transition-all duration-300 cursor-pointer' strokeWidth={3} fill='red' color='red'/></button>
    </div>
  )
}

export default CollectionCard