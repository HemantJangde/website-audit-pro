import React from "react";

export default function FQA() {
  return (
    <div className="w-full flex justify-center mt-10 px-4">
      <div className="w-full flex flex-col gap-4 bg-yellow-50/30 p-6 rounded-xl">
        <div
          tabIndex={0}
          className="collapse collapse-plus bg-yellow-100/50 border border-yellow-200 rounded-lg"
        >
          <div className="collapse-title font-semibold text-yellow-800">
            What is a web audit?
          </div>
          <div className="collapse-content text-yellow-900 text-sm">
            A web audit is a comprehensive analysis of your website’s performance, SEO, security, and user experience to identify areas of improvement.
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse collapse-plus bg-yellow-100/50 border border-yellow-200 rounded-lg"
        >
          <div className="collapse-title font-semibold text-yellow-800">
            Why is website speed important?
          </div>
          <div className="collapse-content text-yellow-900 text-sm">
            Fast-loading websites improve user experience, reduce bounce rates, and positively impact search engine rankings.
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse collapse-plus bg-yellow-100/50 border border-yellow-200 rounded-lg"
        >
          <div className="collapse-title font-semibold text-yellow-800">
            How do I improve SEO?
          </div>
          <div className="collapse-content text-yellow-900 text-sm">
            Optimizing meta tags, headings, URL structure, image alt texts, and internal linking can significantly enhance your SEO performance.
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse collapse-plus bg-yellow-100/50 border border-yellow-200 rounded-lg"
        >
          <div className="collapse-title font-semibold text-yellow-800">
            What is a security audit?
          </div>
          <div className="collapse-content text-yellow-900 text-sm">
            A security audit checks your website for vulnerabilities, ensures secure connections, and protects against potential cyber threats.
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse collapse-plus bg-yellow-100/50 border border-yellow-200 rounded-lg"
        >
          <div className="collapse-title font-semibold text-yellow-800">
            How can I improve user experience?
          </div>
          <div className="collapse-content text-yellow-900 text-sm">
            Improving navigation, layout, accessibility, mobile responsiveness, and reducing load times all enhance overall user experience.
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse collapse-plus bg-yellow-100/50 border border-yellow-200 rounded-lg"
        >
          <div className="collapse-title font-semibold text-yellow-800">
            How often should I conduct a web audit?
          </div>
          <div className="collapse-content text-yellow-900 text-sm">
            Regular audits every 3–6 months are recommended to stay up-to-date with SEO changes, security updates, and performance improvements.
          </div>
        </div>
      </div>
    </div>
  );
}
