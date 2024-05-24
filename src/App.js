import { Routes,Route } from "react-router-dom";
import { Home } from "./Page/Home";
import './App.css';
import { About } from "./Page/About";

function App() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/about" element={<About/>} />
    </Routes>
    </>
  );
}

export default App;
