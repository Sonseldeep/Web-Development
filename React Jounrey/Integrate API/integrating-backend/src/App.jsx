import Show from "./Components/Show";
import Home from "./Components/Home";
import { Link, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div className="pt-[5%] pl-[5%]">
      <nav className="flex justify-center gap-10">
        <Link to="/">Home</Link>
        <Link to="/show">Show</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show" element={<Show />} />
      </Routes>
    </div>
  );
};

export default App;
