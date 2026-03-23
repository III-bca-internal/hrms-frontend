import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";


import Home from "./pages/Home";
import AddEmployee from "./pages/AddEmployee";
import Employees from "./pages/Employees";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Navbar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddEmployee />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        
      </div>
    </BrowserRouter>
  );
}
// sonar trigger
export default App;