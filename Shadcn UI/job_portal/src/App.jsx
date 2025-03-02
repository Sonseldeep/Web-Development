import React from "react";
import { Button } from "./components/ui/button";
import { Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import LandingPage from "./pages/Landing";
import Onboarding from "./pages/Onboarding";
import JobListing from "./pages/JobListing";
import Job from "./pages/Job";
import PostJobs from "./pages/PostJobs";
import SavedJobs from "./pages/SavedJobs";
import { ThemeProvider } from "./components/ui/theme-provider";

const App = () => {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/jobs" element={<JobListing />} />
            <Route path="/job/:id" element={<Job />} />
            <Route path="/post-job" element={<PostJobs />} />
            <Route path="/saved-job" element={<SavedJobs />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
