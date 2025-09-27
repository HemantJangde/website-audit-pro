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
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-tr from-blue-50 via-blue-100 to-blue-200 p-10">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-lg"
      >
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          Website Audit Dashboard
        </h1>

        <form onSubmit={handleAudit} className="flex gap-2">
          <input
            type="text"
            placeholder="Enter website URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="input input-bordered w-full border-blue-300 focus:border-blue-500 text-blue-900"
            required
          />
          <motion.button
            type="submit"
            className="btn bg-blue-500 hover:bg-blue-600 text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Audit
          </motion.button>
        </form>

        {loading && <p className="mt-4 text-blue-600">Auditing...</p>}

        {result && (
          <div className="mt-6 bg-gray-50 p-4 rounded-lg shadow-inner">
            {result.error ? (
              <p className="text-red-500">{result.error}</p>
            ) : (
              <>
                <h2 className="text-xl font-semibold text-blue-700 mb-2">Audit Result:</h2>
                <ul className="list-disc list-inside text-gray-700">
                  <li><strong>Title:</strong> {result.title || "N/A"}</li>
                  <li><strong>Description:</strong> {result.description || "N/A"}</li>
                  <li><strong>Status:</strong> {result.status || "Unknown"}</li>
                  <li><strong>Links Found:</strong> {result.linksCount}</li>
                </ul>
              </>
            )}
          </div>
        )}
      </motion.div>
      {result && (
  <div className="mt-6 bg-gray-50 p-4 rounded-lg shadow-inner">
    {result.error ? (
      <p className="text-red-500">{result.error}</p>
    ) : (
      <>
        <h2 className="text-xl font-semibold text-blue-700 mb-2">
          SEO Audit Report
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
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

    </div>
  );
}
