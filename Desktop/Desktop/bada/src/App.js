import './App.css';

import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login"
import Blank from "./pages/Blank/Blank";
import Main from "./pages/Menu/Main";


function App() {
  return (
  <BrowserRouter>
    <Routes>
          
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="menu" element={<Main />} />
            <Route path="*" element={<Blank />} />
          
        </Routes>
  </BrowserRouter>

  );
}

export default App;
