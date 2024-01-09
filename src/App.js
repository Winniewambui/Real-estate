import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Companies from './components/companies/Companies';
import Residencies from './components/residencies/Residencies';

function App() {
  return (
    <div className="App">
    <div> 
    <div className='white-gradient'/>
   <Navbar />
  <Hero /> 
  </div>   {/*  first child element of the app.js */}
  <Companies />
  <Residencies />
  {/* <Value /> */}
    </div>
  );
}

export default App;
