import "./App.css";
import Layout from "./Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Resume from "./Pages/Resume";
import Navbar from "./Components/Navbar";


const App = () => {
  return (
    
    <BrowserRouter>
    {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/home" element={ <Home/>}/>
        <Route path="/resume" element={<Resume/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
