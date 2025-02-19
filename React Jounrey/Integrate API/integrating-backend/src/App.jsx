import Show from "./Components/Show";
import Home from "./Components/Home";
import Services from "./Components/Services";
import { Link, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div className="pt-[5%] pl-[5%]">
      <nav className="flex justify-center gap-10">
        <Link to="/">Home</Link>
        <Link to="/show">Show</Link>
        <Link to="/services">Services</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show" element={<Show />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
};

export default App;
