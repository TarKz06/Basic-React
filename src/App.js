import "./App.css";
import AppHeader from "./components/AppHeader";
import MangaItem from "./components/MangaItem";

function App() {
  const textInput = <input type="text" />;
  const okButton = <button>eieieieie</button>;
  return (
    <div className="app">
     <AppHeader />
      <div className="app-grid">
       <MangaItem/>
       <MangaItem/>
       <MangaItem/>
       <MangaItem/>       
      </div>
    </div>
  );
}

export default App;
