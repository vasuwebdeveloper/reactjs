import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreComponent.jsx";
{
  /*POC #3: understanding props} */
}


function App() {
  return (
    <div>
      <Header /> {/*POC #1: Calling header component} */}
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
