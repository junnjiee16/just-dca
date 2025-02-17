import { Routes, Route } from "react-router";

import { UserInputProvider } from "@/contexts/user-input/provider";

import { RootLayout } from "@/views/root-layout/RootLayout";
import { DashboardPage } from "@/views/dashboard/DashboardPage";
import { AboutPage } from "@/views/static/about";
import { PageNotFound } from "@/views/fallbacks/error";

export function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RootLayout>
            <UserInputProvider>
              <DashboardPage />
            </UserInputProvider>
          </RootLayout>
        }
      />
      <Route
        path="/about"
        element={
          <RootLayout>
            <AboutPage />
          </RootLayout>
        }
      />
      <Route
        path="*"
        element={
          <RootLayout>
            <PageNotFound />
          </RootLayout>
        }
      />
    </Routes>
  );
}
