import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg py-3 border-bottom border-secondary border-opacity-25"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      <div className="container">
        <Link className="navbar-brand text-white d-flex align-items-center gap-2" to="/">
          <span
            className="d-flex align-items-center justify-content-center fw-bold rounded-circle"
            style={{
              width: "38px",
              height: "38px",
              backgroundColor: "#ff6b00",
              color: "#ffffff",
            }}
          >
            ع
          </span>
          <div className="text-end">
            <div className="fw-bold fs-5 lh-1">عدسة</div>
            <small style={{ color: "#ff6b00", fontSize: "11px" }}>
              عالم التصوير الفوتوغرافي
            </small>
          </div>
        </Link>

        <button
          className="navbar-toggler bg-secondary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul
            className="navbar-nav mx-auto gap-1 my-2 my-lg-0 px-2 py-1 rounded-pill border border-secondary border-opacity-25"
            style={{ backgroundColor: "#141414" }}
          >
            <li className="nav-item">
              <NavLink
                to="/home"
                style={({ isActive }) => ({
                  backgroundColor: isActive ? "#ff6b00" : "transparent",
                  color: isActive ? "#ffffff" : "#a3a3a3",
                  textDecoration: "none",
                  padding: "8px 20px",
                  borderRadius: "50px",
                  display: "block",
                  fontWeight: isActive ? "bold" : "normal",
                })}
              >
                الرئيسية
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/blog"
                style={({ isActive }) => ({
                  backgroundColor: isActive ? "#ff6b00" : "transparent",
                  color: isActive ? "#ffffff" : "#a3a3a3",
                  textDecoration: "none",
                  padding: "8px 20px",
                  borderRadius: "50px",
                  display: "block",
                  fontWeight: isActive ? "bold" : "normal",
                })}
              >
                المدونة
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                style={({ isActive }) => ({
                  backgroundColor: isActive ? "#ff6b00" : "transparent",
                  color: isActive ? "#ffffff" : "#a3a3a3",
                  textDecoration: "none",
                  padding: "8px 20px",
                  borderRadius: "50px",
                  display: "block",
                  fontWeight: isActive ? "bold" : "normal",
                })}
              >
                من نحن
              </NavLink>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-3">
            <Link
              to="/blog"
              className="btn rounded-pill px-4 py-2 fw-bold text-white"
              style={{ backgroundColor: "#ff6b00", border: "none" }}
            >
              ابدأ القراءة
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}