module.exports = {
  cleanDistDir: true,
  distDir: '.next',
  eslint: {
    dirs: ['src'],
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'next/core-web-vitals',
    'prettier'
  ],
  reactStrictMode: true,
};
