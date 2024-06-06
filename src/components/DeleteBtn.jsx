import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement } from '../features/counterSlice'

function DeleteBtn() {
  const dispatch = useDispatch() 
  return (
    <button
      type="button"
      onClick={()=>dispatch(decrement())}
      className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
     -
    </button>
  )
}

export default DeleteBtn
