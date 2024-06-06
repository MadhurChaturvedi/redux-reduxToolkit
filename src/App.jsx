import React from "react";
import "./App.css";
import ShowCount from "./components/ShowCount";
import AddBtn from "./components/AddBtn";
import DeleteBtn from "./components/DeleteBtn";
function App() {
  return (
    <div className=" w-full h-screen flex justify-center items-center flex-col gap-8">
      <div className="p-2">
        <ShowCount />
      </div>
      <div className=" flex justify-center items-center gap-7 p-3">
        <AddBtn />
        <DeleteBtn />
      </div>
    </div>
  );
}

export default App;
