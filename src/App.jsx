import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import SearchResults from "./components/SearchResults";
function App() {
  return (
    <main className="w-screen h-screen overflow-x-hidden">
      <Header/>
      <Routes>
        <Route path="/" element={<Body/>}/>
        <Route path="watch" element={<WatchPage/>}/>
        <Route path="results" element={<SearchResults/>}/>
      </Routes>
    </main>
  );
}

export default App;
