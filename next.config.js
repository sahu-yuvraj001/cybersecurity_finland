/** @type {import('next').NextConfig} */
const nextConfig = {
  // don't add experimental.serverActions here as a boolean — remove it
  // keep turbopack empty to silence Turbopack warnings (safe)
  turbopack: {},

  // remove custom webpack modifications (avoid providing a custom webpack function)
  // If you have plugin-added webpack config, delete it or keep it minimal.
  // Don't export a webpack: (config) => { ... } function here.
};

module.exports = nextConfig;
