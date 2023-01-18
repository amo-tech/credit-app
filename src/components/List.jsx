import React from "react";
// import { useState } from "react";


export const List = () => {

  const creditList = [
    {
      id: 1,
      who: "kyomu",
      amount: 10,
    },
    {
      id:2,
      who: "shime",
      amount: 10,
    }
  ]

  const settlement = () => {
    return(
      console.log("settlement")
    )
  };

  
  

  return (
    <>
    {/* ここ直す、mapについてべんきょうする */}
      {creditList.map((id) => {
        return(
          <div key={id}>
            <span>{creditList.who}</span>
            <span>{creditList.amount}</span>
          </div>
        )
        })}
      <button onClick={settlement}>精算</button>
    </>
  )
};