import type {RouteObject} from "react-router-dom";

import App from "./pages/App";
import Login from "./pages/login";


function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app" element={<App />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
