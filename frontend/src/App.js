import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    callData();
  }, []);

  const callData = async() => {
    try {
      const response = await fetch("http://localhost:8080/hello");
      const data = await response.json();
      console.log(data, 'data from backend');
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
