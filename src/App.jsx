import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import SearchResults from "./components/SearchResults";
import { useSelector } from "react-redux";
function App() {
  const theme = useSelector((store)=>store.darkMode.theme)
  return (
    <div className={`${theme}`}>
      <div className={`w-screen h-screen overflow-x-hidden dark:bg-black`}>
        <Header/>
        <Routes>
          <Route path="/" element={<Body/>}/>
          <Route path="watch" element={<WatchPage/>}/>
          <Route path="results" element={<SearchResults/>}/>
        </Routes>
      </div>
    </div>
    
  );
}

export default App;
