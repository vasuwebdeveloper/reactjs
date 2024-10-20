import logo from "./logo.svg";
import "./App.css";
import { CORE_CONCEPTS } from "./data";

function Header() {
  return (
    <div>
      <main>
        <h2> Time to get started!</h2>
      </main>
    </div>
  );
}

function CoreConcept(props) {
  let {title, description} = props;
  return (
    <li>
      <img src="" alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload....
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
