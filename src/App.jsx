import { useState } from "react";
import {Form} from "./components/Form";

export const App = () => {
  

  const [val, setVal] = useState("");
  const inputText = (e) => {
    setVal(e.target.value);
  }
  const createVal = () => {
    setVal([...val, val]);
  } ;

  const addCredit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: val,
    };
    createVal(newTodo);
    setVal("");
  };

  const confirmContent = () => {
    console.log(val)
  };

  return (
    <>
      <h1>credit</h1>
      <Form />
      
      <br />

      <form onSubmit={addCredit}>
        <input
          type="number"
          placeholder="How much"
          value={val}
          onChange={inputText}
        />
        <button onClick={confirmContent}>
          OK
        </button>
      </form>


      <h2>List</h2>
      
      {createVal.map((credit) => {
        return(
          <div key={credit}>
            
          </div>
        )
      })}

      <button>精算</button>

    </>
  )
};