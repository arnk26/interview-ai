import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import MCQTest from "./pages/MCQTest";
import Result from "./pages/Result";

function App() {
  return (
    <>
     

      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mcq" element={<MCQTest />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
    </>
  );
}

export default App;