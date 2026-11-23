export default function Home() {




<section className="container my-5">
  <div className="row g-4">
    {/* الكارد الأول */}
    <div className="col-md-4">
      <div
        className="card h-100 text-white border-secondary border-opacity-25 rounded-4 overflow-hidden"
        style={{ backgroundColor: "#141414" }}
      >
        <div className="position-relative">
          <img
            src="/img1.jpg"
            className="card-img-top"
            style={{ height: "220px", objectFit: "cover" }}
            alt="إضاءة"
          />
          <span
            className="badge rounded-pill position-absolute top-0 end-0 m-3 px-3 py-2"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
          >
            إضاءة
          </span>
        </div>

        <div className="card-body d-flex flex-column text-end p-4">
          <small className="text-secondary mb-2">
            8 دقائق للقراءة • 15 يناير 2026
          </small>
          <h5 className="card-title fw-bold mb-3">
            إتقان تصوير الساعة الذهبية: دليل شامل
          </h5>
          <p className="card-text text-secondary small mb-4">
            تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح احترافية حول الإضاءة والتكوين.
          </p>

          <div className="d-flex justify-content-between align-items-center mt-auto pt-3 border-top border-secondary border-opacity-25">
            <div>
              <div className="fw-bold small">سالم أحمد</div>
              <small className="text-secondary" style={{ fontSize: "12px" }}>
                مصور محترف
              </small>
            </div>
            <span
              className="rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: "34px",
                height: "34px",
                backgroundColor: "rgba(255, 107, 0, 0.15)",
                color: "#ff6b00",
              }}
            >
              &lt;
            </span>
          </div>
        </div>
      </div>
    </div>

    {/* الكارد الثاني */}
    <div className="col-md-4">
      <div
        className="card h-100 text-white border-secondary border-opacity-25 rounded-4 overflow-hidden"
        style={{ backgroundColor: "#141414" }}
      >
        <div className="position-relative">
          <img
            src="/img2.jpg"
            className="card-img-top"
            style={{ height: "220px", objectFit: "cover" }}
            alt="بورتريه"
          />
          <span
            className="badge rounded-pill position-absolute top-0 end-0 m-3 px-3 py-2"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
          >
            بورتريه
          </span>
        </div>

        <div className="card-body d-flex flex-column text-end p-4">
          <small className="text-secondary mb-2">
            6 دقائق للقراءة • 12 يناير 2026
          </small>
          <h5 className="card-title fw-bold mb-3">
            أسرار تصوير البورتريه: كيف تلتقط روح الشخصية
          </h5>
          <p className="card-text text-secondary small mb-4">
            اكتشف تقنيات احترافية لتصوير بورتريهات تعبيرية تكشف عن شخصية الموضوع الحقيقية.
          </p>

          <div className="d-flex justify-content-between align-items-center mt-auto pt-3 border-top border-secondary border-opacity-25">
            <div>
              <div className="fw-bold small">محمد علي</div>
              <small className="text-secondary" style={{ fontSize: "12px" }}>
                مصور بورتريه
              </small>
            </div>
            <span
              className="rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: "34px",
                height: "34px",
                backgroundColor: "rgba(255, 107, 0, 0.15)",
                color: "#ff6b00",
              }}
            >
              &lt;
            </span>
          </div>
        </div>
      </div>
    </div>

    {/* الكارد الثالث */}
    <div className="col-md-4">
      <div
        className="card h-100 text-white border-secondary border-opacity-25 rounded-4 overflow-hidden"
        style={{ backgroundColor: "#141414" }}
      >
        <div className="position-relative">
          <img
            src="/img3.jpg"
            className="card-img-top"
            style={{ height: "220px", objectFit: "cover" }}
            alt="مناظر طبيعية"
          />
          <span
            className="badge rounded-pill position-absolute top-0 end-0 m-3 px-3 py-2"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
          >
            مناظر طبيعية
          </span>
        </div>

        <div className="card-body d-flex flex-column text-end p-4">
          <small className="text-secondary mb-2">
            10 دقائق للقراءة • 10 يناير 2026
          </small>
          <h5 className="card-title fw-bold mb-3">
            دليل تصوير المناظر الطبيعية: من المبتدئ إلى المحترف
          </h5>
          <p className="card-text text-secondary small mb-4">
            استكشف تقنيات تصوير المناظر الطبيعية الخلابة وكيفية التقاط جمال الطبيعة بعدستك.
          </p>

          <div className="d-flex justify-content-between align-items-center mt-auto pt-3 border-top border-secondary border-opacity-25">
            <div>
              <div className="fw-bold small">إبراهيم حسن</div>
              <small className="text-secondary" style={{ fontSize: "12px" }}>
                مصور طبيعة
              </small>
            </div>
            <span
              className="rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: "34px",
                height: "34px",
                backgroundColor: "rgba(255, 107, 0, 0.15)",
                color: "#ff6b00",
              }}
            >
              &lt;
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
}