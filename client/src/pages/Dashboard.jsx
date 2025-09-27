import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Dashboard() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAudit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch("http://localhost:5000/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
      setResult({ error: "Something went wrong while auditing" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex flex-col items-center min-h-screen bg-gradient-to-tr from-yellow-50 via-yellow-100 to-yellow-200 p-10 overflow-hidden">
      {/* Floating shapes */}
      <motion.div
        className="absolute w-72 h-72 bg-yellow-200 rounded-full opacity-20 top-[-50px] left-[-50px]"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />
      <motion.div
        className="absolute w-64 h-64 bg-yellow-300 rounded-full opacity-15 bottom-[-40px] right-[-40px]"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
      />

      {/* Dashboard card */}
      <motion.div
        initial={{ opacity: 0, y: -30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative bg-white shadow-2xl rounded-2xl p-8 w-full max-w-lg z-10"
      >
        <h1 className="text-3xl font-bold text-yellow-700 mb-6 text-center">
          Website Audit Dashboard
        </h1>

        <form onSubmit={handleAudit} className="flex gap-2">
          <input
            type="text"
            placeholder="Enter website URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="input input-bordered w-full border-yellow-300 focus:border-yellow-500 text-yellow-900"
            required
          />
          <motion.button
            type="submit"
            className="btn bg-yellow-500 hover:bg-yellow-600 text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Audit
          </motion.button>
        </form>

        {loading && <p className="mt-4 text-yellow-700">Auditing...</p>}

        {result && (
          <div className="mt-6 bg-yellow-50 p-4 rounded-lg shadow-inner">
            {result.error ? (
              <p className="text-red-500">{result.error}</p>
            ) : (
              <>
                <h2 className="text-xl font-semibold text-yellow-700 mb-2">
                  SEO Audit Report
                </h2>
                <ul className="list-disc list-inside text-yellow-900 space-y-2">
                  <li><strong>Status:</strong> {result.status}</li>
                  <li><strong>Load Time:</strong> {result.loadTime}</li>
                  <li>
                    <strong>Title:</strong> {result.title.text || "N/A"}  
                    ({result.title.length} chars) → {result.title.recommendation}
                  </li>
                  <li>
                    <strong>Description:</strong> {result.description.text || "N/A"}  
                    ({result.description.length} chars) → {result.description.recommendation}
                  </li>
                  <li><strong>H1 Tags:</strong> {result.h1Tags.join(", ") || "None"}</li>
                  <li><strong>Images:</strong> {result.images.total} total,  
                    Missing alts: {result.images.missingAlts.length}
                  </li>
                  <li><strong>Canonical:</strong> {result.canonical || "N/A"}</li>
                  <li><strong>Robots.txt:</strong> {result.robotsTxt}</li>
                  <li><strong>Sitemap.xml:</strong> {result.sitemapXml}</li>
                  <li>
                    <strong>Links:</strong> {result.links.total}  
                    (Internal: {result.links.internal}, External: {result.links.external})
                  </li>
                </ul>
              </>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
}
