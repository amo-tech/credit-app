import { useState } from "react";

export const App = () => {
  const radioCollection = ["shime", "kaomi"];
  const [borrowed, setBorrowed] = useState("kaomi");
  const onChangePerson = (e) => setBorrowed(e.target.value);

  const [val, setVal]= useState("");
  const inputText = (e) => {
    setVal(e.target.value);
  }

  const confirmContent = () => {
    console.log(val)
  };

  return (
    <>
      <h1>credit</h1>

      {radioCollection.map((value) => {
        return (
          <label key={value}>
            <input
              type="radio"
              value={value}
              checked={borrowed === value}
              onChange={onChangePerson}
            >
            </input>
            {value}
          </label>
        )
      })}
      <br/>

      <input 
        placeholder="How much"
        value={val}
        onChange={inputText}
      />

      <button onClick={confirmContent}>
        OK
      </button>



      <h2>List</h2>
      <button>精算</button>

    </>
  )
};