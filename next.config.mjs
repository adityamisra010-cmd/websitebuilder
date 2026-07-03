/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // `EXPORT=1 npm run build` emits a fully static `out/` folder that can be
  // hosted on any static host. A normal build stays SSR/ISR-capable.
  ...(process.env.EXPORT ? { output: "export", images: { unoptimized: true } } : {}),
};

export default nextConfig;
