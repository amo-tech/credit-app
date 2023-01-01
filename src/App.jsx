export const App = () => {

  const handleChange = () => {
    return(
        "hoge"
    );
  };

    return(
        <>
          <h1>credit</h1>
          <label>
          <input 
            type="radio" 
            value="shime" 
            onChange={handleChange} 
            checked={"a"}></input>
            shime or kaomi 66miteyaru
          </label>
          


          <h2>history</h2>
          <button>しめかわいに切り替える</button>
    
        </>
    )
};