import { useState } from "react";
import { Button } from "./ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Home,
  Zap,
  FileText,
  CreditCard,
  BookOpen,
  User,
  LogOut,
  BanknoteArrowUp,
} from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import "../css/navBar.scss";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [showPreview, setShowPreview] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (id) => {
    if (location.pathname === "/") {
      // Already on home → just scroll
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to home first, then scroll after render
      navigate("/", { state: { scrollTo: id } });
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <div className="logo">
            {/* <img
              src="/profile-pic.jpg" // replace with your profile image path
              alt="profile"
              className="profile-img"
              onClick={() => setShowPreview(true)}
            /> */}
            <Link to="/">purfull</Link>
          </div>

          {/* Desktop Menu */}
          <div className="nav-links-container">
            <ul className="nav-links">
              {/* <li>
                <a onClick={() => handleNavClick("home")}>Home</a>
              </li> */}
              <li>
                <a onClick={() => handleNavClick("docs")}>
                  <BookOpen size={18} />
                  API Docs
                </a>
              </li>
              {!isLogin && (
                <Link to="/login">
                  <Button
                    className="text-md shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => handleNavClick("login")}
                  >
                    <User size={18} />
                    Sign in
                  </Button>
                </Link>
              )}
              {/* {isLogin && (
                <li className="nav-funds ">
                  <a href="">
                    <BanknoteArrowUp />
                    ₹100.00
                  </a>
                </li>
              )} */}
              {isLogin && (
                <Link to="/dashboard" className="nav-funds">
                <li className="available-funds">
                  <a href="">
                    <BanknoteArrowUp />
                    ₹100.00
                  </a>
                </li>
                  <Button
                    className="text-md transition-all duration-300"
                    onClick={() => handleNavClick("dashboard")}
                  >
                    {/* <User size={18} /> */}
                    Add Funds
                  </Button>
                </Link>
              )}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <ul className="mobile-menu">
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/work" onClick={() => setIsOpen(false)}>
                Work
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
            {isLogin && (
              <div className="nav-links-container">
                {/* Social Icons */}
                <div className="social-icons">
                  {/* <a href="#">
                <FaFacebookF />
              </a> */}
                  <div className="" style={{ position: "relative" }}>
                    <a href="/cart">
                      <FaShoppingCart size={24} />
                    </a>
                  </div>
                  {/* <a href="" target="_blank" style={{ position: "relative" }}> */}
                  <div style={{ position: "relative" }}>
                    <FaUserCircle
                      size={24}
                      onClick={() => setUserDropdown(!userDropdown)}
                      style={{ cursor: "pointer" }}
                    />
                    {/* </a> */}
                  </div>
                  {userDropdown && (
                    <div
                      className="user-dropdown-menu"
                      style={{
                        position: "absolute",
                        top: "35px",
                        right: 0,
                        background: "#fff",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                        zIndex: 1000,
                        padding: "10px 20px",
                        // width: "150px",
                      }}
                    >
                      <ul
                        style={{
                          listStyle: "none",
                          margin: 0,
                          padding: "10px",
                        }}
                      >
                        <li style={{ padding: "8px 0", cursor: "pointer" }}>
                          <Link to="/userprofile">Profile</Link>
                        </li>
                        <li style={{ padding: "8px 0", cursor: "pointer" }}>
                          <Link to="/ordertracking">Orders</Link>
                        </li>
                        <li style={{ padding: "8px 0", cursor: "pointer" }}>
                          Logout
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}
          </ul>
        )}
      </nav>
    </>
  );
};

export default NavBar;
