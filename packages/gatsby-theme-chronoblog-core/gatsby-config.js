const path = require('path');
const remarkUnwrapImages = require('remark-unwrap-images');
const remarkSlug = require('remark-slug');

module.exports = (options) => {
  //
  const {
    feedItemsLimit = 50,
    yearSeparator = true,
    uiText = {
      feedShowMoreButton: '↓ show more ↓',
      feedSearchPlaceholder: 'search',
      cardReadMoreButton: 'read more →',
      allTagsButton: 'all tags'
    }
  } = options;
  const {
    feedShowMoreButton = '↓ show more ↓',
    feedSearchPlaceholder = 'search',
    cardReadMoreButton = 'read more →',
    allTagsButton = 'all tags'
  } = uiText;
  //
  return {
    siteMetadata: {
      siteTitle: 'Chronoblog - Theme for Gatsby js',
      siteDescription: 'Gatsby Theme Chronoblog',
      siteImage: '/banner.png', // main image of the site for meta tags
      siteUrl: 'http://localhost:8000', // http://localhost:8000
      pathPrefix: '/', // '/' - default, example - '/someprefix'
      siteLanguage: 'en',
      ogLanguage: `en_US`,
      author: 'Name Placeholder',
      twitter: '',
      uiText: {
        feedShowMoreButton,
        feedSearchPlaceholder,
        cardReadMoreButton,
        allTagsButton
      },
      feedItemsLimit,
      yearSeparator
    },
    plugins: [
      `gatsby-transformer-sharp`,
      {
        resolve: `gatsby-plugin-sharp`,
        options: {
          defaultQuality: 90
        }
      },
      'gatsby-plugin-theme-ui',
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-emotion',
      {
        resolve: 'gatsby-redirect-from',
        options: {
          query: 'allMdx'
        }
      },
      'gatsby-plugin-meta-redirect',
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'pages',
          path: path.resolve('src/pages')
        }
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'posts',
          path: path.resolve('content/posts')
        }
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'links',
          path: path.resolve('content/links')
        }
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'notes',
          path: path.resolve('content/notes')
        }
      },
      {
        resolve: `gatsby-plugin-page-creator`,
        options: {
          path: path.join(__dirname, `src`, `pages`)
        }
      },
      {
        resolve: 'gatsby-plugin-mdx',
        options: {
          extensions: ['.mdx', '.md'],
          remarkPlugins: [remarkSlug, remarkUnwrapImages],
          defaultLayouts: {
            pages: require.resolve('./src/components/page')
          },
          gatsbyRemarkPlugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 820,
                quality: 90,
                linkImagesToOriginal: false,
                backgroundColor: 'transparent'
              }
            },
            'gatsby-remark-responsive-iframe'
          ],
          plugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 820,
                quality: 90,
                linkImagesToOriginal: false,
                backgroundColor: 'transparent'
              }
            },
            'gatsby-remark-responsive-iframe'
          ]
        }
      }
    ]
  };
};