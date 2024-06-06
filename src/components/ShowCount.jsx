import React from "react";
import { useSelector } from "react-redux";

function ShowCount() {
  const data = useSelector((c) => {
    console.log(c.show.value);
    return c.show.value;
  });
  return <div className="text-9xl font-semibold">{data}
  </div>;
}

export default ShowCount;
