import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CC1 from "./CC/CC1";
import Home from './CC/Home'

function App() {
  return (
    <div>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/cc1" element={<CC1 />}/>
        <Route path="/home" element={<Home />}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
