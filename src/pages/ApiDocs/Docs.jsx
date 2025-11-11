// Docs.jsx
import React, { useEffect, useState, useRef } from "react";
import { Sun, Moon, Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import { DOCS_CONTENT } from "../ApiDocs/DocsData";

const API_STRUCTURE = {
  Verification: {
    key: "email", // must match DOCS_CONTENT key
    tabs: [
      {
        id: "verify",
        title: "Verify Email",
        secondary: [
          { id: "send-otp", title: "Send OTP" },
          { id: "verify-otp", title: "Verify OTP" },
          { id: "verify-otpToken", title: "Verify OTP Token" },
        ],
      },
    ],
  },
  "Location & Pincode": {
    key: "location",
    tabs: [
      { id: "by-pincode", title: "Get by Pincode" },
      { id: "by-city", title: "Get by City" },
      { id: "states", title: "Get All States" },
    ],
  },
  "Form Data": {
    key: "form",
    tabs: [
      { id: "submit", title: "Submit Form Data" },
      { id: "list", title: "Get Form Entries" },
      { id: "delete", title: "Delete Form Entry" },
    ],
  },
};

export default function Docs() {
  const firstCategoryKey = Object.keys(DOCS_CONTENT)[0] || "email";
  const [theme, setTheme] = useState(
    localStorage.getItem("docs_theme") || "dark"
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [expanded, setExpanded] = useState(() =>
    Object.keys(API_STRUCTURE).reduce(
      (acc, key) => ({ ...acc, [key]: true }),
      {}
    )
  );
  const [activeCategory, setActiveCategory] = useState(firstCategoryKey);
  const [activeSubTab, setActiveSubTab] = useState("");
  const contentRef = useRef(null);
  const sectionRefs = useRef({}); // stores refs to all sub-sections

  // Theme toggle
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("docs_theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  // Prism syntax highlighting
  useEffect(() => {
    Prism.highlightAll();
  }, [activeCategory, activeSubTab]);

  // IntersectionObserver to highlight active sub-tab while scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSubTab(entry.target.id);
          }
        });
      },
      { root: contentRef.current, threshold: 0.5 }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [activeCategory]);

  const scrollToSection = (id) => {
    const target = sectionRefs.current[id];
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 dark:bg-[#0b1020] text-gray-900 dark:text-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 z-40 w-72 h-screen bg-white dark:bg-[#071026] border-r border-gray-200 dark:border-gray-700 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold">API Reference</h2>
          <button onClick={() => setMenuOpen(false)} className="md:hidden">
            <X size={20} />
          </button>
        </div>

        <div className="p-4 overflow-y-auto h-[calc(100%-60px)]">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Developer docs
            </p>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>

          {Object.entries(API_STRUCTURE).map(([label, group]) => {
            const hasEndpoints =
              DOCS_CONTENT[group.key] &&
              Object.keys(DOCS_CONTENT[group.key]).length > 0;
            if (!hasEndpoints) return null;

            return (
              <div key={label} className="mb-3">
                <button
                  onClick={() => {
                    const firstSub =
                      Object.keys(DOCS_CONTENT[group.key])[0] || "";
                    setActiveCategory(group.key);
                    setExpanded((prev) => ({ ...prev, [label]: !prev[label] }));
                    setActiveSubTab(firstSub);
                    setMenuOpen(false);
                    scrollToSection(firstSub);
                  }}
                  className={`flex items-center justify-between w-full text-left px-2 py-2 rounded ${
                    activeCategory === group.key
                      ? "bg-gray-200 dark:bg-gray-800"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  <span className="font-medium">{label}</span>
                  {expanded[label] ? (
                    <ChevronDown size={16} />
                  ) : (
                    <ChevronRight size={16} />
                  )}
                </button>

                {expanded[label] && (
                  <div className="ml-3 mt-1 space-y-1 text-sm">
                    {group.tabs.map((t) => (
                      <div key={t.id}>
                        <button
                          onClick={() => {
                            const possibleKeys = Object.keys(
                              DOCS_CONTENT[group.key]
                            );
                            const chosenKey = possibleKeys.includes(t.id)
                              ? t.id
                              : possibleKeys[0] || "";
                            setActiveSubTab(chosenKey);
                            scrollToSection(chosenKey);
                          }}
                          className={`block w-full text-left px-2 py-1 rounded ${
                            activeSubTab === t.id &&
                            activeCategory === group.key
                              ? "text-blue-500 font-medium"
                              : "text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"
                          }`}
                        >
                          {t.title}
                        </button>

                        {t.secondary && (
                          <div className="ml-4 mt-1 space-y-1 text-xs">
                            {t.secondary.map((s) => (
                              <button
                                key={s.id}
                                onClick={() => {
                                  const possibleKeys = Object.keys(
                                    DOCS_CONTENT[group.key]
                                  );
                                  const chosenKey = possibleKeys.includes(s.id)
                                    ? s.id
                                    : possibleKeys[0] || "";
                                  setActiveSubTab(chosenKey);
                                  scrollToSection(chosenKey);
                                }}
                                className={`block w-full text-left px-2 py-1 rounded ${
                                  activeSubTab === s.id
                                    ? "text-blue-400 font-semibold"
                                    : "text-gray-400 hover:text-gray-200"
                                }`}
                              >
                                ↳ {s.title}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </aside>

      {/* Header (Mobile) */}
      <header className="md:hidden flex justify-between items-center p-4 bg-white dark:bg-[#071026] border-b border-gray-200 dark:border-gray-700 sticky top-0 z-30">
        <h1 className="text-lg font-semibold">Docs</h1>
        <button
          onClick={() => setMenuOpen(true)}
          className="text-gray-600 dark:text-gray-300"
        >
          <Menu size={22} />
        </button>
      </header>

      {/* Main Content */}
      <main ref={contentRef} className="flex-1 p-5 md:p-10 overflow-auto">
        {/* Render all sub-sections for the active category */}
        {DOCS_CONTENT[activeCategory] &&
          Object.entries(DOCS_CONTENT[activeCategory]).map(([key, content]) => (
            <section
              key={key}
              id={key}
              ref={(el) => (sectionRefs.current[key] = el)}
              className="mb-10"
            >
              <h2 className="text-xl font-semibold mb-2">{content.title}</h2>
              <p className="text-sm text-gray-400 mb-4">
                {content.description}
              </p>

              <h4 className="text-sm font-medium mb-2">Example Request:</h4>
              <pre className="language-bash bg-gray-900 text-white p-4 rounded-lg mb-6 overflow-x-auto">
                <code>{content.code}</code>
              </pre>

              {content.details && (
                <div className="space-y-6">
                  {content.details.usage && (
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                        How to Use
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {content.details.usage}
                      </p>
                    </div>
                  )}

                  {content.details.params && (
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        Parameters
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-500 dark:text-gray-400">
                        {content.details.params.map((param, idx) => (
                          <li key={idx}>
                            <strong>{param.name}</strong>: {param.description}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {content.details.response && (
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        Example Response
                      </h4>
                      <pre className="language-json bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
                        <code>{content.details.response}</code>
                      </pre>
                    </div>
                  )}
                </div>
              )}
            </section>
          ))}

        <footer className="text-center text-sm text-gray-500 dark:text-gray-400 mt-10">
          © {new Date().getFullYear()} YourCompany. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
