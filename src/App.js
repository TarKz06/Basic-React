import "./App.css";
import AppHeader from "./components/AppHeader";
import MangaItem from "./components/MangaItem";
import mangas from "./data/data";



function App() {
 const mangaElements = mangas.map((manga,index) =>{
   return <MangaItem key={index} manga={manga}/>
 })
  return (
    <div className="app">
      <AppHeader />
      <div className="app-grid">
    {mangaElements}
      </div>
    </div>
  );
}

export default App;
