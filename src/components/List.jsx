import React from "react";
// import { useState } from "react";


export const List = () => {

  const settlement = () => {
    return(
      console.log("settlement")
    )
  };

//   const [val, setVal] = useState("");
//   const inputText = (e) => {
//     setVal(e.target.value);
//   }
//   const createVal = () => {
//     setVal([...val, val]);
//   };

  return (
    <>
      <button onClick={settlement}>精算</button>
      {/* {createVal.map((credit) => {
        return (
          <div key={credit}>

          </div>
        )
      })} */}
    </>
  )
};