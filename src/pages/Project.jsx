import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Contact from "../components/Contact";
import "../css/project.scss";

const Project = () => {
  const { id } = useParams();
  const [pageData, setPageData] = useState(null);

  const data = [
    {
      id: 1,
      title: "E-Commerce Marketplace (Full-Stack)",
      description: `
<p>
  I architected and delivered the complete <strong>RESTful API</strong> for a scalable e-commerce marketplace using
  <strong>Node.js</strong> with <strong>Express</strong> and <strong>Sequelize</strong>. The service layer cleanly separates
  controllers, business logic, and data access, enabling fast feature delivery and easy maintenance. The database layer uses
  <strong>Sequelize ORM</strong> with migrations, seeders, model associations (Users, Products, Variants, Orders, Payments),
  and transaction-safe operations for critical flows like checkout and refunds.
</p>
<br />
<p>
  Authentication is implemented with <strong>OAuth 2.0</strong> (Google sign-in), plus session/JWT support for classic login. I added
  role-based access control (admin, seller, customer) and secure password flows (hashing, rotation, account lockouts). For
  content and assets, I built a robust <strong>file handling</strong> pipeline for product images/documents with validation,
  MIME checks, image resizing, and storage abstraction (local/S3-ready). Core marketplace features include
  <strong>CRUD</strong> for catalogs, inventory, and orders; <strong>server-side pagination</strong>, filtering, and sorting; and
  defensive API patterns (rate limiting, input validation, error normalization).
</p>
<br />

<p>
  Performance and reliability were key: I introduced <strong>caching</strong> for hot endpoints, optimized queries with proper
  indexing and eager/lazy loading in Sequelize, and wrapped multi-step flows in database <strong>transactions</strong>.
  Observability covers structured logging, request tracing, and health checks. The API is documented with <strong>OpenAPI/Swagger</strong>,
  enabling smooth onboarding for frontend and third-party integrations (payments, shipping, and notifications).
</p>
<br />

<p>
  On the frontend, I contributed to a responsive UI built with <strong>React</strong> and state management via
  <strong>Redux Toolkit</strong>. I implemented reusable components (product cards, cart drawer, address manager),
  integrated the API with RTK Query/axios, and optimized perceived performance with skeletons, optimistic updates,
  and granular memoization. The cart/checkout flow includes coupon validation, shipping options, and order tracking,
  all synced with the server via normalized Redux state.
</p>

<br />
<h2>Highlights</h2>
<br />
<div>
  <p><strong>Auth & Security:</strong> OAuth 2.0 (Google), JWT/Session hybrid, RBAC, input validation, and rate limiting.</p>
  <p><strong>Data & API:</strong> Sequelize models with associations, transactions, migrations; CRUD with pagination, filtering, sorting.</p>
  <p><strong>Files:</strong> Safe file uploads with validation, resizing, and pluggable storage (local/S3-ready).</p>
  <p><strong>Performance:</strong> Query optimization, caching, and structured logging with end-to-end error handling.</p>
  <p><strong>Frontend:</strong> React + Redux Toolkit, reusable components, optimistic UI, and accessible, responsive design.</p>
  <p><strong>Docs & DX:</strong> Swagger/OpenAPI documentation and consistent error contracts for easy integration.</p>
</div>
<br />
<h2>Tech Stack</h2>
<br />
<p>
  <strong>Backend:</strong> Node.js, Express, Sequelize (PostgreSQL/MySQL) ·
  <strong>Auth:</strong> OAuth 2.0, JWT/Session, RBAC ·
  <strong>Infra:</strong> File storage (local/S3-ready), caching ·
  <strong>Frontend:</strong> React, Redux Toolkit, React Router ·
  <strong>Tooling:</strong> ESLint/Prettier, Swagger/OpenAPI, Axios/RTK Query.
</p>
`,
      video: "/pharma.webm",
    },
    {
      id: 2,
      title: "Helicopter Project",
      description: `An immersive 3D experience built with WebM video integration. Showcases animations, smooth transitions, and optimized playback for modern web apps.`,
      video: "/helicopter.webm",
    },
  ];

  useEffect(() => {
    const pgData = data.find((el) => el.id === parseInt(id));
    setPageData(pgData || null);
  }, [id]);

  if (!pageData) {
    return (
    <div className="notfound-container">
      <h1>404</h1>
      <h2>Oops! Page Not Found</h2>
      <p>The page you are looking for doesn’t exist or has been moved.</p>
      <Link to="/" className="home-btn">Go Back Home</Link>
    </div>
    );
  }

  return (
    <div className="project-container">
      <h1 className="title">{pageData.title}</h1>

      <video
        src={pageData.video}
        autoPlay
        loop
        muted
        playsInline
        className="project-video"
      />

      <p className="description" dangerouslySetInnerHTML={{__html: pageData.description}}></p>

      {/* Reuse your contact form */}
      <Contact />
    </div>
  );
};

export default Project;
