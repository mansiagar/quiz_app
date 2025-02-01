import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import AuthContext from "./AuthContext.jsx";
import { HashRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <AuthContext>
      <App />
    </AuthContext>
  </HashRouter>
);
