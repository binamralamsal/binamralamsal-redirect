/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://github.com/binamralamsal",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
