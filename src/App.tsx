import "./App.css";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/sideBar";
import navBar from "./components/navBar";
import about from "./components/about";
import recume from "./components/recume";
import portfolio from "./components/portfolio";
import blog from "./components/blog";
import contact from "./components/contact";

function App() {
  return (
    <>
      <main>
        <Sidebar />
        <div className="main-content">
          {navBar()}
          <Routes>
            <Route path="/" element={about()} />
            <Route path="/resume" element={recume()} />
            <Route path="/portfolio" element={portfolio()} />
            <Route path="/blog" element={blog()} />
            <Route path="/contact" element={contact()} />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
