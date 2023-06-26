module.exports = {
  reactStrictMode: true,
  env: {
    EMAIL_TO: process.env.EMAIL_TO,
    EMAIL_FROM: process.env.EMAIL_FROM,
    EMAIL_SUBJECT: process.env.EMAIL_SUBJECT,
    SMTP_SERVICE: process.env.SMTP_SERVICE,
    SMTP_AUTH_USER: process.env.SMTP_AUTH_USER,
    SMTP_AUTH_PASS: process.env.SMTP_AUTH_PASS,
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/landing-page/landing-page-with-components",
      }
    ];
  },
  redirects() {
    const sourcesRequiringAuthToken = [
      "/", "/landing-page/:slug*", "/blog/:path*"
    ]

    return process.env.NEXT_PUBLIC_BUTTER_CMS_API_KEY ? [
      {
        source: "/missing-token",
        destination: "/",
        permanent: false
      }
    ] : sourcesRequiringAuthToken.map(source => ({
      source: source,
      destination: "/missing-token",
      permanent: false
    })
    )
  },
  images: {
    domains: ["cdn.buttercms.com", "lh3.googleusercontent.com"],
  },
};

