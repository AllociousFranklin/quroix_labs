import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist. Navigate back to Quroix Labs to explore our AI automation services, case studies, and more.",
};

export default function NotFound() {
  return (
    <section style={{ height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2vh", padding: "0 10vw", textAlign: "center" }}>
      <h1 className="headline white">404</h1>
      <h2 className="subheadline white" style={{ fontSize: "2vw" }}>Page Not Found</h2>
      <p className="description grey" style={{ maxWidth: "500px" }}>
        The page you are looking for doesn&apos;t exist or has been moved. Let us help you find what you need.
      </p>
      <div style={{ display: "flex", gap: "1vw", marginTop: "2vh" }}>
        <Link href="/" className="button button-transparent-border link" style={{ textDecoration: "none" }}>
          <div className="button-content">
            <span className="small-description">Go Home</span>
            <span className="small-description">Go Home</span>
          </div>
        </Link>
        <Link href="/contact" className="button button-transparent-border link" style={{ textDecoration: "none" }}>
          <div className="button-content">
            <span className="small-description">Contact Us</span>
            <span className="small-description">Contact Us</span>
          </div>
        </Link>
      </div>
    </section>
  );
}
