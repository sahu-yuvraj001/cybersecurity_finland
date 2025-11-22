import React from "react";

function AllResource() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">

        {/* PAGE TITLE */}
        <h1 className="text-4xl font-bold text-slate-900">
          All Resources
        </h1>

        {/* SUBTEXT */}
        <p className="mt-4 text-lg text-slate-600">
          The comprehensive resources list has moved. View updated resources on the main resources page.
        </p>

        {/* CARD BOX */}
        <div className="mt-10 bg-slate-50 border border-slate-200 rounded-2xl p-10 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-800">
            Looking for something?
          </h2>

          <p className="mt-3 text-slate-600">
            All downloadable guides, compliance documents, and cyber resources
            are now available on the main resources hub.
          </p>

          <div className="mt-6">
            <a
              href="/resources"
              className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow hover:bg-indigo-700 transition"
            >
              Go to Resources
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AllResource;
