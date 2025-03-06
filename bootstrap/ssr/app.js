import { jsx } from "react/jsx-runtime";
import axios from "axios";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
window.axios = axios;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
const app = "";
async function resolvePageComponent(path, pages) {
  const page = pages[path];
  if (typeof page === "undefined") {
    throw new Error(`Page not found: ${path}`);
  }
  return typeof page === "function" ? page() : page;
}
const appName = "Laravel";
createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, /* @__PURE__ */ Object.assign({ "./Pages/About.jsx": () => import("./assets/About-19c52004.js"), "./Pages/Article.jsx": () => import("./assets/Article-1edb48ea.js"), "./Pages/Auth/ConfirmPassword.jsx": () => import("./assets/ConfirmPassword-c76b9fd8.js"), "./Pages/Auth/ForgotPassword.jsx": () => import("./assets/ForgotPassword-28408f67.js"), "./Pages/Auth/Login.jsx": () => import("./assets/Login-30afd120.js"), "./Pages/Auth/Register.jsx": () => import("./assets/Register-3d575597.js"), "./Pages/Auth/ResetPassword.jsx": () => import("./assets/ResetPassword-009b6f54.js"), "./Pages/Auth/VerifyEmail.jsx": () => import("./assets/VerifyEmail-fe538784.js"), "./Pages/Dashboard.jsx": () => import("./assets/Dashboard-bec94c4e.js"), "./Pages/EditArticles.jsx": () => import("./assets/EditArticles-2056ac5b.js"), "./Pages/Home.jsx": () => import("./assets/Home-0e43ca32.js"), "./Pages/Profile/Edit.jsx": () => import("./assets/Edit-82031f2c.js"), "./Pages/Profile/Partials/DeleteUserForm.jsx": () => import("./assets/DeleteUserForm-3af4367f.js"), "./Pages/Profile/Partials/UpdatePasswordForm.jsx": () => import("./assets/UpdatePasswordForm-f8211e2a.js"), "./Pages/Profile/Partials/UpdateProfileInformationForm.jsx": () => import("./assets/UpdateProfileInformationForm-37e27950.js"), "./Pages/Service.jsx": () => import("./assets/Service-e733989b.js") })),
  setup({ el, App, props }) {
    const root = createRoot(el);
    root.render(/* @__PURE__ */ jsx(App, { ...props }));
  },
  progress: {
    color: "#4B5563"
  }
});
