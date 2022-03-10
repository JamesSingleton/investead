module.exports = {
  productionBrowserSourceMaps: true,
  swcMinify: true,
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["images.unsplash.com", "images.ctfassets.net"],
  },
};
