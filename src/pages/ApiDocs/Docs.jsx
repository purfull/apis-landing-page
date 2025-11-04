// Docs.jsx
import React, { useEffect, useState } from "react";
import {
  Sun,
  Moon,
  Copy,
  Check,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

const API_STRUCTURE = {
  "Email Verification": {
    key: "email",
    tabs: [
      { id: "send", title: "Send Verification Email" },
      {
        id: "verify",
        title: "Verify OTP",
        secondary: [
          { id: "verify-email", title: "By Email" },
          { id: "verify-mobile", title: "By Mobile Number" },
          { id: "verify-location", title: "By Location" },
        ],
      },
      { id: "status", title: "Get Verification Status" },
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

  const [activeCategory, setActiveCategory] = useState("email");
  const [activeSubTab, setActiveSubTab] = useState("send");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("docs_theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  useEffect(() => {
    Prism.highlightAll();
  }, [activeCategory, activeSubTab]);

  return (
    <div className="flex flex-col md:flex-row bg-gray-50 dark:bg-[#0b1020] text-gray-900 dark:text-gray-100 min-h-screen">
      {/* ===== Sidebar ===== */}
      <aside
        className={`fixed md:static top-0 left-0 z-40 w-72 h-screen bg-white dark:bg-[#071026] border-r border-gray-200 dark:border-gray-700 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold">API Reference</h2>
          <button
            onClick={() => setMenuOpen(false)}
            className="md:hidden text-gray-500 dark:text-gray-300"
          >
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

          {Object.entries(API_STRUCTURE).map(([label, group]) => (
            <div key={label} className="mb-3">
              <button
                onClick={() => {
                  setActiveCategory(group.key);
                  setExpanded((prev) => ({ ...prev, [label]: !prev[label] }));
                  setActiveSubTab(group.tabs[0]?.id || "");
                  setMenuOpen(false);
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
                        onClick={() => setActiveSubTab(t.id)}
                        className={`block w-full text-left px-2 py-1 rounded ${
                          activeSubTab === t.id && activeCategory === group.key
                            ? "text-blue-500 font-medium"
                            : "text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"
                        }`}
                      >
                        {t.title}
                      </button>
                      {t.secondary && activeSubTab === t.id && (
                        <div className="ml-4 mt-1 space-y-1 text-xs">
                          {t.secondary.map((s) => (
                            <button
                              key={s.id}
                              onClick={() => setActiveSubTab(s.id)}
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
          ))}
        </div>
      </aside>

      {/* ===== Header (mobile only) ===== */}
      <header className="md:hidden flex justify-between items-center p-4 bg-white dark:bg-[#071026] border-b border-gray-200 dark:border-gray-700 sticky top-0 z-30">
        <h1 className="text-lg font-semibold">Docs</h1>
        <button
          onClick={() => setMenuOpen(true)}
          className="text-gray-600 dark:text-gray-300"
        >
          <Menu size={22} />
        </button>
      </header>

      {/* ===== Main Content ===== */}
      <main className="flex-1 p-5 md:p-10 overflow-auto">
        {/* ---------- EMAIL VERIFICATION ---------- */}
        {activeCategory === "email" && (
          <>
            {activeSubTab === "send" && (
              <section>
                <h2 className="text-xl font-semibold mb-2">
                  Send Verification Email
                </h2>
                <p className="text-sm text-gray-400 mb-3">
                  Sends a verification OTP email to a user's registered email
                  address.
                </p>
                <pre className="language-bash bg-gray-900 text-white p-4 rounded-lg">
                  <code>
                    {`curl -X POST https://api.yourdomain.com/v1/verify/email \\
-H "Authorization: Bearer YOUR_API_KEY" \\
-d '{"email":"user@example.com"}'`}
                  </code>
                </pre>
              </section>
            )}

            {activeSubTab === "verify-email" && (
              <section>
                <h2 className="text-xl font-semibold text-blue-400 mb-2">
                  Verify OTP by Email
                </h2>
                <p className="text-sm text-gray-400 mb-3">
                  Confirms OTP sent to user's email.
                </p>
                <pre className="language-bash bg-gray-900 text-white p-4 rounded-lg">
                  <code>
                    {`curl -X POST https://api.yourdomain.com/v1/otp/email/verify \\
-H "Authorization: Bearer YOUR_API_KEY" \\
-d '{"email":"user@example.com","otp":"123456"}'`}
                  </code>
                </pre>
              </section>
            )}

            {activeSubTab === "verify-mobile" && (
              <section>
                <h2 className="text-xl font-semibold text-blue-400 mb-2">
                  Verify OTP by Mobile Number
                </h2>
                <p className="text-sm text-gray-400 mb-3">
                  Confirms OTP sent to user's mobile number.
                </p>
                <pre className="language-bash bg-gray-900 text-white p-4 rounded-lg">
                  <code>
                    {`curl -X POST https://api.yourdomain.com/v1/otp/mobile/verify \\
-H "Authorization: Bearer YOUR_API_KEY" \\
-d '{"mobile":"+919876543210","otp":"123456"}'`}
                  </code>
                </pre>
              </section>
            )}

            {activeSubTab === "verify-location" && (
              <section>
                <h2 className="text-xl font-semibold text-blue-400 mb-2">
                  Verify OTP by Location
                </h2>
                <p className="text-sm text-gray-400 mb-3">
                  Verifies OTP along with user's current latitude and longitude.
                </p>
                <pre className="language-bash bg-gray-900 text-white p-4 rounded-lg">
                  <code>
                    {`curl -X POST https://api.yourdomain.com/v1/otp/location/verify \\
-H "Authorization: Bearer YOUR_API_KEY" \\
-d '{"lat":12.93,"lng":80.11,"otp":"123456"}'`}
                  </code>
                </pre>
              </section>
            )}

            {activeSubTab === "status" && (
              <section>
                <h2 className="text-xl font-semibold mb-2">
                  Get Verification Status
                </h2>
                <p className="text-sm text-gray-400 mb-3">
                  Fetches current verification status for a user’s email or
                  mobile.
                </p>
                <pre className="language-bash bg-gray-900 text-white p-4 rounded-lg">
                  <code>
                    {`curl -X GET https://api.yourdomain.com/v1/verify/status \\
-H "Authorization: Bearer YOUR_API_KEY"`}
                  </code>
                </pre>
              </section>
            )}
          </>
        )}

        {/* ---------- LOCATION & PINCODE ---------- */}
        {activeCategory === "location" && (
          <>
            {activeSubTab === "by-pincode" && (
              <section>
                <h2 className="text-xl font-semibold mb-2">Get by Pincode</h2>
                <p className="text-sm text-gray-400 mb-3">
                  Retrieves location details including city, district, and state
                  using a 6-digit pincode.
                </p>
                <pre className="language-bash bg-gray-900 text-white p-4 rounded-lg">
                  <code>
                    {`curl -X GET https://api.yourdomain.com/v1/location/pincode/600001 \\
-H "Authorization: Bearer YOUR_API_KEY"`}
                  </code>
                </pre>
              </section>
            )}

            {activeSubTab === "by-city" && (
              <section>
                <h2 className="text-xl font-semibold mb-2">Get by City</h2>
                <p className="text-sm text-gray-400 mb-3">
                  Returns postal codes and state info for a given city name.
                </p>
                <pre className="language-bash bg-gray-900 text-white p-4 rounded-lg">
                  <code>
                    {`curl -X GET https://api.yourdomain.com/v1/location/city/Chennai \\
-H "Authorization: Bearer YOUR_API_KEY"`}
                  </code>
                </pre>
              </section>
            )}

            {activeSubTab === "states" && (
              <section>
                <h2 className="text-xl font-semibold mb-2">Get All States</h2>
                <p className="text-sm text-gray-400 mb-3">
                  Fetches a complete list of Indian states and union territories
                  with their codes.
                </p>
                <pre className="language-bash bg-gray-900 text-white p-4 rounded-lg">
                  <code>
                    {`curl -X GET https://api.yourdomain.com/v1/location/states \\
-H "Authorization: Bearer YOUR_API_KEY"`}
                  </code>
                </pre>
              </section>
            )}
          </>
        )}

        {/* ---------- FORM DATA ---------- */}
        {activeCategory === "form" && (
          <>
            {activeSubTab === "submit" && (
              <section>
                <h2 className="text-xl font-semibold mb-2">Submit Form Data</h2>
                <p className="text-sm text-gray-400 mb-3">
                  Sends form input data to the API for processing or saving.
                </p>
                <pre className="language-bash bg-gray-900 text-white p-4 rounded-lg">
                  <code>
                    {`curl -X POST https://api.yourdomain.com/v1/form/submit \\
-H "Authorization: Bearer YOUR_API_KEY" \\
-d '{"name":"John Doe","email":"john@example.com","message":"Hello there!"}'`}
                  </code>
                </pre>
              </section>
            )}

            {activeSubTab === "list" && (
              <section>
                <h2 className="text-xl font-semibold mb-2">Get Form Entries</h2>
                <p className="text-sm text-gray-400 mb-3">
                  Fetches all submitted form entries with pagination support.
                </p>
                <pre className="language-bash bg-gray-900 text-white p-4 rounded-lg">
                  <code>
                    {`curl -X GET https://api.yourdomain.com/v1/form/list?page=1&limit=10 \\
-H "Authorization: Bearer YOUR_API_KEY"`}
                  </code>
                </pre>
              </section>
            )}

            {activeSubTab === "delete" && (
              <section>
                <h2 className="text-xl font-semibold mb-2">
                  Delete Form Entry
                </h2>
                <p className="text-sm text-gray-400 mb-3">
                  Permanently removes a specific form submission by its unique
                  ID.
                </p>
                <pre className="language-bash bg-gray-900 text-white p-4 rounded-lg">
                  <code>
                    {`curl -X DELETE https://api.yourdomain.com/v1/form/delete/12345 \\
-H "Authorization: Bearer YOUR_API_KEY"`}
                  </code>
                </pre>
              </section>
            )}
          </>
        )}

        <footer className="text-center text-sm text-gray-500 dark:text-gray-400 mt-10">
          © {new Date().getFullYear()} YourCompany. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
