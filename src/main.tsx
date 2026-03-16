import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";

import AboutPage from "./pages/AboutPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import ServicePage from "./pages/ServicePage.tsx";
import Api from "./pages/Api.tsx";
import SignUpPage from "./pages/SignUpPage.tsx";
import ProductPage from "./pages/ProductPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import SettingsPage from "./pages/SettingsPage.tsx";
import DashboardPage from "./pages/DashboardPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";

import "./App.css";
import ProtectedRoute from "./middlewares/ProtectedRoute.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/service",
        element: <ServicePage />,
      },
    ],
  },
  {
    path: "/api",
    element: <Api />,
  },
  {
    path: "signup",
    element: <SignUpPage />,
  },
  {
    path: "/product/:productId",
    element: <ProductPage />,
  },
  {
    path: "/profile",
    element: (
      <ProtectedRoute>
        <ProfilePage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/settings",
    element: (
      <ProtectedRoute>
        <SettingsPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
