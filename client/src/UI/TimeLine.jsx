import React from "react";

export default function TimeLine() {
  return (
    <div className="bg-yellow-50/20 min-h-screen flex justify-center py-16">
      <ul className="timeline timeline-vertical w-full max-w-3xl px-6 space-y-8">
        <li>
          <div className="timeline-start timeline-box bg-yellow-100/50 border border-yellow-200 rounded-xl p-6">
            <h3 className="text-yellow-800 font-bold text-lg">Website Analysis</h3>
            <p className="text-yellow-900/80 text-sm mt-2">
              Review website structure, performance metrics, and analytics data.
            </p>
          </div>
          <hr className="border-yellow-200" />
        </li>

        <li>
          <hr className="border-yellow-200" />
          <div className="timeline-end timeline-box bg-yellow-100/50 border border-yellow-200 rounded-xl p-6">
            <h3 className="text-yellow-800 font-bold text-lg">SEO Audit</h3>
            <p className="text-yellow-900/80 text-sm mt-2">
              Check meta tags, headings, content optimization, and keyword performance.
            </p>
          </div>
        </li>

        <li>
          <hr className="border-yellow-200" />
          <div className="timeline-start timeline-box bg-yellow-100/50 border border-yellow-200 rounded-xl p-6">
            <h3 className="text-yellow-800 font-bold text-lg">Performance & Speed</h3>
            <p className="text-yellow-900/80 text-sm mt-2">
              Identify slow pages, large images, and other factors affecting load time.
            </p>
          </div>
          <hr className="border-yellow-200" />
        </li>

        <li>
          <hr className="border-yellow-200" />
          <div className="timeline-end timeline-box bg-yellow-100/50 border border-yellow-200 rounded-xl p-6">
            <h3 className="text-yellow-800 font-bold text-lg">Security Audit</h3>
            <p className="text-yellow-900/80 text-sm mt-2">
              Check SSL, vulnerabilities, and overall website security measures.
            </p>
          </div>
        </li>

        <li>
          <hr className="border-yellow-200" />
          <div className="timeline-start timeline-box bg-yellow-100/50 border border-yellow-200 rounded-xl p-6">
            <h3 className="text-yellow-800 font-bold text-lg">UX & Accessibility Review</h3>
            <p className="text-yellow-900/80 text-sm mt-2">
              Evaluate navigation, mobile responsiveness, and accessibility compliance.
            </p>
          </div>
          <hr className="border-yellow-200" />
        </li>

        <li>
          <hr className="border-yellow-200" />
          <div className="timeline-end timeline-box bg-yellow-100/50 border border-yellow-200 rounded-xl p-6">
            <h3 className="text-yellow-800 font-bold text-lg">Optimization & Reporting</h3>
            <p className="text-yellow-900/80 text-sm mt-2">
              Provide actionable recommendations and implementation plan for improvements.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
