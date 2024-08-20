import "./App.css";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/sideBar";
import navBar from "./components/navBar";
import about from "./components/about";
import recume from "./components/recume";
import project from "./components/project";
// import blog from "./components/blog";
import contact from "./components/contact";
import technologies from "./components/technologies";

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
            <Route path="/project" element={project()} />
            <Route path="/technologies" element={technologies()} />
            {/* <Route path="/blog" element={blog()} /> */}
            <Route path="/contact" element={contact()} />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
