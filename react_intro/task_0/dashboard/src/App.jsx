import './App.css'
import holbertLogo from "./assets/holberton-logo.jpg";
import myDate from './utils';

function App() {

  return (
    <>
      <div className='App-header'>
        <img src={holbertLogo} alt='holberton logo' />
        <h1 style={{ color: "#e1003c" }}>School dashboard</h1>
      </div>

      <div className='App-body'>
        <p> Login to access the full dashboard</p>
      </div>
      <div className='App-footer'>
        <p>Copyright {myDate.getCurrentYear()} -  {myDate.getFooterCopy(true)}</p>
      </div>
    </>
  )
}

export default App