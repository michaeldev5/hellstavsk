module.exports = {
  siteMetadata: {
    title: `Hellstav - Moderné kreatívne riešenia`,
    description: `Ponúkame kvalitné murárske práce a stavebnú činnosť so zodpovedným prístupom. Spoločnosť Hellstav, s.r.o. bola založená 16. mája 2020. Od začiatku svojho vzniku sa venuje murárskym prácam a stavebnej činnosti či už v exteriéri, alebo interiéri. Ponúka však nie len to. S využitím kvalitných materiálov Vám poskytne služby ktoré budú nie len estetické, ale aj odolné voči zubu času.`,
    author: `@hellstav`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#fb923c`,
        theme_color: `#fb923c`,
        display: `minimal-ui`,
        icon: `src/assets/icon.png`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
  ],
}
