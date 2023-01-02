import { useState } from "react";

export const App = () => {
  const radioCollection = ["shime", "kaomi"];
  const [borrowed, setBorrowed] = useState("kaomi");
  const onChange = (e) => setBorrowed(e.target.value);

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
              onChange={onChange}
            >
            </input>
            {value}
          </label>
        )
      })}
      <br/>
      <input type="textarea"></input>
      {/* ここに書いたものをconsolelognに出力させる */}




      <h2>history</h2>
      <button>しめかわいに切り替える</button>

    </>
  )
};