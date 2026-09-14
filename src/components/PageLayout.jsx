import { Link } from "react-router-dom";

function PageLayout({ children }) {
  return (
    <div>
      <Link to="/">Back</Link>
      <div style={{ marginTop: 16 }}>{children}</div>
    </div>
  );
}

export default PageLayout;