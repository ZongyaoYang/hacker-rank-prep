import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageLayout from "./components/PageLayout";
import routes from "./routes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {routes.map((r) => (
        <Route
          key={r.path}
          path={r.path}
          element={<PageLayout>{r.element}</PageLayout>}
        />
      ))}
    </Routes>
  );
}

export default App;
