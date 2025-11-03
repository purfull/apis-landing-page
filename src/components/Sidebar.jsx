import { Home, Zap, FileText, CreditCard, BookOpen, User, LogOut, Headset } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../css/sidebar.scss";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  // { name: "APIs", href: "/apis", icon: Zap },
  { name: "Logs", href: "/logs", icon: FileText },
  { name: "Support", href: "/support", icon: Headset },
  { name: "Profile", href: "/profile", icon: User },
//   { name: "Pricing", href: "/pricing", icon: CreditCard },
//   { name: "Docs", href: "/docs", icon: BookOpen },
];

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="sidebar">
      {/* <div className="sidebar__header">
        <Link to="/dashboard">
          <div className="logo" />
          <span className="title">VeriData</span>
        </Link>
      </div> */}

      <nav className="sidebar__nav">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={isActive ? "active" : ""}
            >
              <item.icon size={20} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="sidebar__footer">
        <button onClick={handleLogout}>
          <LogOut size={20} />
          <span>Log out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
