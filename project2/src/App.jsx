import "./App.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <section>
        <Header />
      </section>
      <section>
        <Editor />
      </section>
      <section>
        <List />
      </section>
    </div>
  );
}

export default App;
