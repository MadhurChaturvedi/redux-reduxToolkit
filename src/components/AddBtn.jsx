import React from "react";
import { useDispatch } from "react-redux";
import { increment } from "../features/counterSlice.js";

function AddBtn() {
    const dispatch = useDispatch();

  return (
    <button
      type="button"
      onClick={()=>dispatch(increment())}
      className=" bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      +
    </button>
  );
}

export default AddBtn;
