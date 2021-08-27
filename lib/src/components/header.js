"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const gatsby_1 = require("gatsby");
const Header = ({ siteTitle = "" }) => (React.createElement("header", { style: {
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
    } },
    React.createElement("div", { style: {
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.45rem 1.0875rem`,
        } },
        React.createElement("h1", { style: { margin: 0 } },
            React.createElement(gatsby_1.Link, { to: "/", style: {
                    color: `white`,
                    textDecoration: `none`,
                } }, siteTitle)))));
exports.default = Header;
