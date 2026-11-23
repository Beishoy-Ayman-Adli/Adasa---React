import { useState } from "react";
import postsData from "../data/posts.json";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("جميع المقالات");
  const [searchText, setSearchText] = useState("");

  const categories = [
    "جميع المقالات",
    "إضاءة",
    "بورتريه",
    "مناظر طبيعية",
    "تقنيات",
    "معدات",
  ];

  const filteredPosts = postsData.filter((post) => {
    const matchCategory =
      selectedCategory === "جميع المقالات" || post.category === selectedCategory;
    const matchSearch =
      post.title.includes(searchText) || post.description.includes(searchText);
    return matchCategory && matchSearch;
  });

  return (
    <div style={{ backgroundColor: "#0a0a0a", color: "#ffffff" }}>
      <section className="grid-hero text-center py-5 border-bottom border-secondary border-opacity-25">
        <div className="container py-4">
          <span
            className="d-inline-block px-3 py-1 rounded-pill mb-3"
            style={{
              backgroundColor: "rgba(255, 107, 0, 0.15)",
              color: "#ff6b00",
              border: "1px solid rgba(255, 107, 0, 0.3)",
              fontSize: "14px",
            }}
          >
            • مدونتنا
          </span>

          <h1 className="display-4 fw-bold mb-3">
            استكشف <span style={{ color: "#ff6b00" }}>مقالاتنا</span>
          </h1>

          <p className="text-secondary fs-5 mb-0">
            اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
          </p>
        </div>
      </section>

      <section className="container my-4">
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 pb-4 border-bottom border-secondary border-opacity-25">
          <input
            type="text"
            className="form-control text-white border-secondary border-opacity-25 rounded-3"
            style={{ maxWidth: "280px", backgroundColor: "#141414" }}
            placeholder="ابحث في المقالات..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <div className="d-flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className="btn btn-sm rounded-pill px-3 py-2"
                style={{
                  backgroundColor:
                    selectedCategory === cat ? "#ff6b00" : "#141414",
                  color: "#ffffff",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  fontWeight: selectedCategory === cat ? "bold" : "normal",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="container pb-5">
        <div className="row g-4">
          {filteredPosts.map((post) => (
            <div className="col-md-4" key={post.id}>
              <div
                className="card h-100 text-white border-secondary border-opacity-25 rounded-4 overflow-hidden"
                style={{ backgroundColor: "#141414" }}
              >
                <div className="position-relative">
                  <img
                    src={post.image}
                    className="card-img-top"
                    style={{ height: "220px", objectFit: "cover" }}
                    alt={post.category}
                  />
                  <span
                    className="badge rounded-pill position-absolute top-0 end-0 m-3 px-3 py-2"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
                  >
                    {post.category}
                  </span>
                </div>

                <div className="card-body d-flex flex-column text-end p-4">
                  <small className="text-secondary mb-2">
                    {post.readTime} • {post.date}
                  </small>
                  <h5 className="card-title fw-bold mb-3">{post.title}</h5>
                  <p className="card-text text-secondary small mb-4">
                    {post.description}
                  </p>

                  <div className="d-flex justify-content-between align-items-center mt-auto pt-3 border-top border-secondary border-opacity-25">
                    <div>
                      <div className="fw-bold small">{post.author}</div>
                      <small
                        className="text-secondary"
                        style={{ fontSize: "12px" }}
                      >
                        {post.role}
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
          ))}
        </div>
      </section>
    </div>
  );
}