import Header from './components/Header/Header'
import planets from './data.json'

function App() {
  console.log(planets)
  return (
    <div className="App">
      <Header />
        <h1>{planets[0].name}</h1> 
        <p>
        {planets[0].geology.content}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default App;
