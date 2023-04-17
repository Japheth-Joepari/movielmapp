export default function Banner() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <p className="hero-subtitle">MovieElm</p>
          <h1 className="h1 hero-title">
            Explore <strong>Movies</strong>, TV Shows, &amp; More.
          </h1>
          <div className="meta-wrapper">
            <div className="badge-wrapper">
              <div className="badge badge-fill">Best</div>
              <div className="badge badge-outline">Featured Movies</div>
            </div>
          </div>
          <button className="btn btc-primary">
            <span>Free Movie Listing </span>
          </button>
        </div>
      </div>
    </section>
  );
}
