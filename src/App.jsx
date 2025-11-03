import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import { useEffect, useRef, useState } from "react";
import HomePage from "./pages/Home";
import Project from "./pages/Project";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import Login from "./pages/Login";
import { Provider } from "react-redux";
import store from "./store/store";
import Register from "./pages/Register";
import Otp from "./pages/Otp";
import Dashboard from "./pages/Dashboard";
import Logs from "./pages/Logs";
import Profile from "./pages/Profile";
import Support from "./pages/Support";

function App() {
  const navRef = useRef(null);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const navbar = document.getElementsByClassName("navbar")[0]
    if (navbar) {
      const height = navbar.offsetHeight;
      setNavHeight(height);

      // Set CSS variable globally (on root)
      document.documentElement.style.setProperty("--nav-height", `${height}px`);
    }
  }, []);
  return (
    <Provider store={store}>
    <Router>
      <NavBar />
      <div className="" style={{paddingTop: navHeight}}> {/* padding for navbar space */}
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify-otp" element={<Otp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/logs" element={<Logs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/support" element={<Support />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </Router>
    </Provider>
  );
}

export default App;
