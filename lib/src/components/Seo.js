"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const gatsby_1 = require("gatsby");
const react_helmet_1 = __importDefault(require("react-helmet"));
const Seo = ({ description = "", lang = "en", meta = [], title, }) => {
    const { site } = (0, gatsby_1.useStaticQuery)((0, gatsby_1.graphql) `
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `);
    const metaDescription = description || site.siteMetadata.description;
    const defaultTitle = site.siteMetadata?.title;
    return (react_1.default.createElement(react_helmet_1.default, { htmlAttributes: {
            lang,
        }, title: title ?? defaultTitle, meta: [
            {
                name: `description`,
                content: metaDescription,
            },
            {
                property: `og:title`,
                content: title,
            },
            {
                property: `og:description`,
                content: metaDescription,
            },
            {
                property: `og:type`,
                content: `website`,
            },
            {
                name: `twitter:card`,
                content: `summary`,
            },
            {
                name: `twitter:creator`,
                content: site.siteMetadata?.author || ``,
            },
            {
                name: `twitter:title`,
                content: title,
            },
            {
                name: `twitter:description`,
                content: metaDescription,
            },
        ].concat(meta) }));
};
exports.default = Seo;
