import Navbar from "./Componets/Navbar/navbar";
import Trans from "./Componets/Transaction/Trans";
import Update from "./Componets/UpdateUser/UpdateUser";
import Home from "./Componets/home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/update" element={<Update />} />
        <Route path="/trans" element={<Trans />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
