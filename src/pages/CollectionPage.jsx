import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CollectionCard from '../components/CollectionCard';
import { clearCollection } from '../redux/features/collectionSlice';

const CollectionPage = () => {

  const { items } = useSelector((store) => store.collection)
  const dispatch = useDispatch()

  return (
    <div className='px-10 py-5 overflow-auto bg-gray-950'>

      {items.length > 0 ?

        <div className='flex justify-between items-center mb-5'>
          <h2 className='text-xl font-bold'>Your Collection</h2>
          <button onClick={() => {
            dispatch(clearCollection())
          }}
            className='bg-red-600 px-3 py-1 rounded-md font-semibold'
          >Delete All Collection</button>
        </div> :

        <h2 className='text-xl font-bold flex justify-center'>Collection is Empty</h2>
      }

      <div className='flex flex-wrap justify-start gap-4'>
        {items.map((item, idx) => {
          return <div key={idx}>
            <CollectionCard item={item} />
          </div>
        })}
      </div>
    </div>
  )
}

export default CollectionPage