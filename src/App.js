import './App.css';
import Hero from './components/hero';
import Nav from './components/nav';

function App() {
  return (
    <div className="App">
      <main className='relative '> 
        <Nav /> 
        <Hero />
      </main>  
    </div>
  );
}

export default App;
