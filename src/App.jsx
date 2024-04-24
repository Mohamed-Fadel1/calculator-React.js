import { useState } from "react";
import { evaluate } from "mathjs";
import "./App.css";

function App() {
  const [result, setReult] = useState("");

  function handleClick (e)
  {
setReult(result.concat(e.target.value))
  }


  function clear ()
  {
    setReult ("")
  }


  function backSpace ()
  {
    setReult(result.slice(0 , -1))
  }



 

  function calculate() {
    try {
      setReult(evaluate(result).toString());
    } catch (error) {
      setReult("Error");
    }
  }
  


  return (
    <>
  
      <div className="container">
        <form>
          <input type="text" value={result} />
        </form>
        <div className="keyPad ">
          <button onClick = {clear} className="clear highLight" >Clear</button>
          <button  onClick={backSpace} className="backSpace highLight"  >C</button>
          <button className="highLight" value="/" onClick={handleClick} >&divide;</button>
          <button value="7" onClick={handleClick} >7</button>
          <button value="8" onClick={handleClick} >8</button>
          <button value="9" onClick={handleClick} >9</button>
          <button className="highLight" value="*" onClick={handleClick} >&times;</button>
          <button value="4" onClick={handleClick} >4</button>
          <button value="5" onClick={handleClick} >5</button>
          <button value="6" onClick={handleClick} >6</button>
          <button className="highLight" value="-" onClick={handleClick} >&ndash;</button>
          <button value="1" onClick={handleClick} >1</button>
          <button value="2" onClick={handleClick} >2</button>
          <button value="3" onClick={handleClick} >3</button>
          <button className="highLight" value="+" onClick={handleClick} >+</button>
          <button value="0" onClick={handleClick} >0</button>
          <button value="."  onClick={handleClick} >.</button>
          <button className="result highLight"  onClick={calculate} >=</button>
        </div>
      </div>
    </>
  );
}

export default App;
