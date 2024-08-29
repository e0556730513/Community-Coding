import logo from './logo.svg';
import './App.css';
import AppRouter from './routing';
import { BrowserRouter } from 'react-router-dom';
import Routing from './routing';
import Hadasah from './components/Hadasah';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <Routing></Routing>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
