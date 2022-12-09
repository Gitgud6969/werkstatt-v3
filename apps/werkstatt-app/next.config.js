//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
};

module.exports = withPlugins([
  [
    withNx,
    {
      nextConfig,
    },
  ],
  [
    optimizedImages,
    {
      nextConfig,
    },
  ],
]);
