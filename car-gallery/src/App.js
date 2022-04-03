import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Footer from "./Components/Navi/Footer";

import Navi from "./Components/Navi/Navi";
import CustomerLogin from "./Components/Register/CustomerLogin";
import CustomerRegister from "./Components/Register/CustomerRegister";

function App() {
  return (
    <div>
     
      <Router>
      <Navi />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<CustomerRegister />} />
            <Route path="/login" element={<CustomerLogin/>}/>
          </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
