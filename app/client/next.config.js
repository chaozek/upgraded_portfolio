const withFonts = require("next-fonts");
module.exports = withFonts({
  publicRuntimeConfig: {
    // These variables are available on the client and server
    NEXT_PUBLIC_TEST: process.env.NEXT_PUBLIC_TEST,
  },
  ignoreDuringBuilds: [
    /recompose/,
    /react/,
    // add more regular expressions for warnings to ignore
  ],
});
