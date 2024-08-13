/** @type {import('next').NextConfig} */


const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
});

const nextConfig = {
  experimental: {
    scrollRestoration: true,
    
  },
  images: {
    remotePatterns: [
    //       Error: Invalid src prop (https://res.cloudinary.com/dylzaicv5/image/upload/v1705349866/bukse_copy_68a049a7ac.jpg) on `next/image`, hostname "res.cloudinary.com" is not configured under images in your `next.config.js`
    // See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host
    {
      protocol: "https",
      hostname: "res.cloudinary.com",
      port: "",
      pathname: "/dylzaicv5/image/upload/**"
    }, {
      protocol: "https",
      hostname: "assets.example.com",
      port: "",
      pathname: "/account123/**"
    }]
  }
};
module.exports = nextConfig;




// module.exports = withPWA({
//   reactStrictMode: true,
//   experimental: {
//     scrollRestoration: true,
//     ppr: true,

//   },
//   images: {
//     remotePatterns: [
//     //       Error: Invalid src prop (https://res.cloudinary.com/dylzaicv5/image/upload/v1705349866/bukse_copy_68a049a7ac.jpg) on `next/image`, hostname "res.cloudinary.com" is not configured under images in your `next.config.js`
//     // See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host
//     {
//       protocol: "https",
//       hostname: "res.cloudinary.com",
//       port: "",
//       pathname: "/dylzaicv5/image/upload/**"
//     }, {
//       protocol: "https",
//       hostname: "assets.example.com",
//       port: "",
//       pathname: "/account123/**"
//     }]
//   }
// });