import React from "react";
import { ErrorBoundary } from "react-error-boundary";

import About from "../components/about";
import Contact from "../components/contact";
import Experience from "../components/experience";
import Intro from "../components/intro";
// import Projects from "@/components/projects";
import SectionDivider from "../components/section-divider";
import Skills from "../components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      {/* <Projects /> */}
      <Skills />
      <Experience />
      <ErrorBoundary
        fallback={
          <div className="mb-10 text-center">
            <p>There was an error submitting the form.</p>

            <p>
              Please contact me directly at{" "}
              <a
                className="underline"
                href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
              >
                {process.env.NEXT_PUBLIC_EMAIL}
              </a>
              .
            </p>
          </div>
        }
      >
        <Contact />
      </ErrorBoundary>
    </main>
  );
}
