const env = require('dotenv');

env.config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Legal Adviser',
    titleTemplate: '%s. www.tandtlegal.com.vn',
    description: 'We provide excellent legal documents',
    author: '@david.pham',
    siteUrl: 'https://gatsby-tandt.herokuapp.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-theme-material-ui',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-eslint',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'T&T E-Documents',
        short_name: 'TANDT.LEGAL',
        start_url: '/',
        background_color: '#A1FBA1',
        theme_color: '#A1FBA1',
        display: 'minimal-ui',
        icon: 'src/images/fourPentals.svg', // Relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
