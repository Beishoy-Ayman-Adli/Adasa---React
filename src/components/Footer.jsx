import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="text-white pt-5 pb-4 mt-auto border-top border-secondary border-opacity-25"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      <div className="container">
        <div className="row g-5 pb-5">
          {/* العمود الأول: عدسة */}
          <div className="col-lg-3 col-md-6 text-start">
            <div className="d-flex align-items-center gap-3 mb-3">
              <span
                className="d-flex align-items-center justify-content-center fw-bold fs-5 rounded-3"
                style={{
                  width: "42px",
                  height: "42px",
                  backgroundColor: "#ff6b00",
                  color: "#ffffff",
                }}
              >
                ع
              </span>
              <span className="fw-bold fs-4">عدسة</span>
            </div>

            <p className="text-secondary small lh-lg mb-4">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.
            </p>

            <div className="d-flex gap-2">
              <a
                href="#"
                className="d-flex align-items-center justify-content-center rounded-3 text-secondary text-decoration-none border border-secondary border-opacity-25"
                style={{ width: "38px", height: "38px", backgroundColor: "#141414" }}
              >
                X
              </a>
              <a
                href="#"
                className="d-flex align-items-center justify-content-center rounded-3 text-secondary text-decoration-none border border-secondary border-opacity-25"
                style={{ width: "38px", height: "38px", backgroundColor: "#141414" }}
              >
                GH
              </a>
              <a
                href="#"
                className="d-flex align-items-center justify-content-center rounded-3 text-secondary text-decoration-none border border-secondary border-opacity-25"
                style={{ width: "38px", height: "38px", backgroundColor: "#141414" }}
              >
                in
              </a>
              <a
                href="#"
                className="d-flex align-items-center justify-content-center rounded-3 text-secondary text-decoration-none border border-secondary border-opacity-25"
                style={{ width: "38px", height: "38px", backgroundColor: "#141414" }}
              >
                YT
              </a>
            </div>
          </div>

          {/* العمود الثاني: استكشف */}
          <div className="col-lg-3 col-md-6 text-start">
            <h6 className="fw-bold mb-4 d-flex align-items-center gap-2">
              <span
                style={{
                  width: "18px",
                  height: "2px",
                  backgroundColor: "#ff6b00",
                  display: "inline-block",
                }}
              ></span>
              استكشف
            </h6>
            <ul className="list-unstyled d-flex flex-column gap-3 small">
              <li>
                <Link to="/home" className="text-secondary text-decoration-none">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-secondary text-decoration-none">
                  المدونة
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-secondary text-decoration-none">
                  من نحن
                </Link>
              </li>
            </ul>
          </div>

          {/* العمود الثالث: التصنيفات */}
          <div className="col-lg-3 col-md-6 text-start">
            <h6 className="fw-bold mb-4 d-flex align-items-center gap-2">
              <span
                style={{
                  width: "18px",
                  height: "2px",
                  backgroundColor: "#ff6b00",
                  display: "inline-block",
                }}
              ></span>
              التصنيفات
            </h6>
            <ul className="list-unstyled d-flex flex-column gap-3 small text-secondary">
              <li>إضاءة</li>
              <li>بورتريه</li>
              <li>مناظر طبيعية</li>
              <li>تقنيات</li>
            </ul>
          </div>

          {/* العمود الرابع: ابق على اطلاع */}
          <div className="col-lg-3 col-md-6 text-start">
            <h6 className="fw-bold mb-4 d-flex align-items-center gap-2">
              <span
                style={{
                  width: "18px",
                  height: "2px",
                  backgroundColor: "#ff6b00",
                  display: "inline-block",
                }}
              ></span>
              ابق على اطلاع
            </h6>
            <p className="text-secondary small lh-base mb-3">
              اشترك للحصول على أحدث المقالات والتحديثات.
            </p>
            <input
              type="email"
              className="form-control text-white border-secondary border-opacity-25 rounded-3 py-2 px-3 mb-3"
              style={{ backgroundColor: "#141414" }}
              placeholder="أدخل بريدك الإلكتروني"
            />
            <button
              className="btn w-100 rounded-pill py-2 fw-bold text-white"
              style={{ backgroundColor: "#ff6b00", border: "none" }}
            >
              اشترك
            </button>
          </div>
        </div>

        {/* الشريط السفلي */}
        <div className="d-flex flex-wrap justify-content-between align-items-center pt-4 border-top border-secondary border-opacity-25 text-secondary small">
          <div>© 2026 عدسة. صنع بكل 🧡 جميع الحقوق محفوظة.</div>
          <div className="d-flex gap-4">
            <span>سياسة الخصوصية</span>
            <span>شروط الخدمة</span>
          </div>
        </div>
      </div>
    </footer>
  );
}