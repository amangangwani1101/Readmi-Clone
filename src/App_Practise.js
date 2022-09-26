// for external css
import './App.css';

// importing navbar component if expored default
// import Navbar from './Navbar';

// importing navbar component if not expored default
// import {Navbar} from './Navbar';

// if you want to use Navbar As variale not as component
const Navbar = <div>Navbar</div>;
function App() {
  // here inside return funtion  required html is written like its a combination of html + js here u can use js concept in same file without any script tag so u can write JAVASCRPT above function or in between function and return command or if u want to write in between return function or indirectly inside html then  place ({}) this braces and write inside your js logic 
  
  // actually its not hytml file but jsx file combiantion of both html + js
  

  const name = "aman";

  const stylingBox = {
    color:"red",
    // here in plave of - : letter Case Is changes
    backgroundColor:"blue"
  }
  return (
    // if u want to return more than 2 div so for its possibility :- declare empty tag 
    <>
    {/* for inline css */}
    {/* as in jsx fikle for inline css u have to create a object which will have all required css u want to add to partiular box */}
    
    {/* using navbar component created */}
    {/* <Navbar/> */}
    {/* using navbar as variable */}
    {Navbar}
    <div style={stylingBox}>
      aman 
      learning 
      react 
      understanding
      basic and want to be 
      <pre>":   PRO"</pre>
      <h1>Aman Gangwani</h1>
      <div className="clas" id="id1">SSSS</div>
      <div className="clas" id="id2"></div>
      {/* using js  */}
      {
        console.log("Good Going ",name)
      }
    </div>

    {/* <Navbar/> */}

    <div>
      aman 
      learning 
      react 
      understanding
      basic and want to be 
      <pre>":   PRO"</pre>
      <h1>Aman Gangwani</h1>
      <div className="clas" id="id1">SSSS</div>
      <div className="clas" id="id2"></div>
      {/* using js  */}
      {
        console.log("Good Going ",name)
      }
    </div>

    {/* <Navbar/> */}
    
     <div style={{backgroundColor:"blueviolet",padding:"10px"}}>
      aman 
      learning 
      react 
      understanding
      basic and want to be 
      <pre>":   PRO"</pre>
      <h1>Aman Gangwani</h1>
      <div className="clas" id="id1">SSSS</div>
      <div className="clas" id="id2"></div>
      {/* using js  */}
      {
        console.log("Good Going ",name)
      }
    </div>
    </>
  );
}

export default App;
