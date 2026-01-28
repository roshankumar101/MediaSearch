import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'

const SearchBar = () => {

    const [text, setText] = useState('')
    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(setQuery(text))
        setText('')
    }

    return (
        <form className='border-b border-gray-800 bg-gray-950 flex gap-5 px-4 sm:px-10 py-5'
            onSubmit={(e) => {
                submitHandler(e)
            }}>
            <input type="text" placeholder='Search Anything...'
                className='px-5 py-2 outline-none border border-gray-400 rounded-lg w-full'
                value={text} onChange={(e) => setText(e.target.value)}
            />

            <button className='px-5 py-2 active:scale-95 cursor-pointer bg-green-600 rounded-lg'>Search</button>
        </form>
    )
}

export default SearchBar