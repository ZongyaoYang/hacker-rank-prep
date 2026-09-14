import { Link } from "react-router-dom";
import routes from "../routes";

function Home() {
  return (
    <div>
      <h1>React Playground</h1>
      <ul>
        {routes.map((r) => (
          <li>
            <Link to={r.path}>{r.label}</Link> - {r.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
