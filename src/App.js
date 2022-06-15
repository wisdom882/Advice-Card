import './App.css';
import React from 'react'

function App() {

  const[advice, setAdvice] = React.useState([]);


  
    const fetchData = async () => {
      const response = await fetch('https://api.adviceslip.com/advice');
      const adviceData = await response.json();
      setAdvice(adviceData);
      console.log(adviceData)
      }  
   React.useEffect(() => {
     fetchData()
   }, [])
   

  return (
    <div>
      <div className="card">
        <div className="advice-number">ADVICE </div>
        <div className="quote">"</div>
        <div className="border"></div>
        <button onClick={fetchData()}>dice</button>
      </div>
    </div>
  );
}

export default App;
