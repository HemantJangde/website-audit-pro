const axios = require("axios");
const cheerio = require("cheerio");
const { performance } = require("perf_hooks");

exports.auditWebsite = async (req, res) => {
  try {
    let { url } = req.body;
    if (!url) return res.status(400).json({ error: "URL is required" });
    if (!url.startsWith("http")) url = "https://" + url;

    const start = performance.now();
    const response = await axios.get(url, { timeout: 15000 });
    const loadTime = (performance.now() - start).toFixed(2);

    const html = response.data;
    const $ = cheerio.load(html);

    // SEO Checks
    const title = $("title").text() || null;
    const description = $('meta[name="description"]').attr("content") || null;
    const h1Tags = $("h1").map((_, el) => $(el).text().trim()).get();
    const images = $("img");
    const missingAlts = [];
    images.each((i, el) => {
      if (!$(el).attr("alt")) {
        missingAlts.push($(el).attr("src"));
      }
    });

    const canonical = $('link[rel="canonical"]').attr("href") || null;
    const robotsTxt = await checkIfExists(url + "/robots.txt");
    const sitemapXml = await checkIfExists(url + "/sitemap.xml");

    const links = $("a")
      .map((_, el) => $(el).attr("href"))
      .get()
      .filter(Boolean);

    const internalLinks = links.filter((l) => l.startsWith("/") || l.includes(url));
    const externalLinks = links.filter((l) => l.startsWith("http") && !l.includes(url));

    // Build Report
    const report = {
      status: response.status,
      loadTime: loadTime + " ms",
      title: {
        text: title,
        length: title ? title.length : 0,
        recommendation: title && title.length >= 50 && title.length <= 60
          ? "✅ Good"
          : "⚠️ Should be 50–60 chars",
      },
      description: {
        text: description,
        length: description ? description.length : 0,
        recommendation: description && description.length >= 150 && description.length <= 160
          ? "✅ Good"
          : "⚠️ Should be 150–160 chars",
      },
      h1Tags,
      images: {
        total: images.length,
        missingAlts,
      },
      canonical,
      robotsTxt,
      sitemapXml,
      links: {
        total: links.length,
        internal: internalLinks.length,
        external: externalLinks.length,
      },
    };

    res.json(report);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Failed to audit website" });
  }
};

// helper function to check robots/sitemap
async function checkIfExists(url) {
  try {
    const res = await axios.head(url);
    return res.status === 200 ? "✅ Found" : "⚠️ Not Found";
  } catch {
    return "⚠️ Not Found";
  }
}
