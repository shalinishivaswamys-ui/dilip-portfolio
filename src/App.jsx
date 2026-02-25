import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Business from "./Business";
import Sport from "./Sport";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/business" element={<Business />} />
        <Route path="/sport" element={<Sport />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
