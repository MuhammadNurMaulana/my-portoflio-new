import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Projects } from "./Pages/Projects";
import { About } from "./Pages/About";
import { Blog } from "./Pages/Blog";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import { Html } from "./Components/Blog/Html";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/pengertian&html" element={<Html />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
