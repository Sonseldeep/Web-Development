import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
const Landing = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20  ">
      <section className="text-center">
        <h1 className="flex flex-col items-center justify-center gradient-title text-4xl font-extrabold sm:text-6xl lg:text-8xl py-4 tracking-tighter">
          Find Your Dream Job{" "}
          <span className="flex items-center gap-2 sm:gap-6">
            and get <img className="h-14 sm:h-24 lg:h-32" src="/logo.png" />{" "}
          </span>
        </h1>
        <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
          Explore thousands of job listings or find the perfect canidate
        </p>
      </section>
      <div className="flex gap-6 justify-center">
        {/* buttons */}
        <Link to="/jobs">
          <Button variant="blue" size="xl">
            Find Jobs
          </Button>
        </Link>

        <Link to="/post-job">
          <Button variant="destructive" size="xl">
            Post a Job
          </Button>
        </Link>
        {/* carousel */}
      </div>
      {/* banner */}
      <section>{/* cards */}</section>
      {/* Accordion */}
    </main>
  );
};

export default Landing;
