import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import WatchPage from "./components/WatchPage";
function App() {
  return (
    <main>
      <Header/>
      <Routes>
        <Route path="/" element={<Body/>}/>
        <Route path="watch" element={<WatchPage/>}/>
      </Routes>
      
    </main>
  );
}

export default App;
