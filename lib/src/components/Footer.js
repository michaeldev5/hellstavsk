"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_social_icons_1 = require("react-social-icons");
const HellstavLogo_1 = __importDefault(require("./HellstavLogo"));
const FACEBOOK = "https://www.facebook.com/pages/category/Construction-Company/HellStav-100723655427335/";
const INSTAGRAM = "https://www.instagram.com/hellstavsro/";
const Footer = ({ navigation }) => (react_1.default.createElement("div", { className: "pt-12" },
    react_1.default.createElement("footer", { id: "footer", className: "relative z-50 dark:bg-gray-900 pt-24" },
        react_1.default.createElement("div", { className: " border-t border-b border-gray-200 dark:border-gray-700 py-16" },
            react_1.default.createElement("div", { className: "mx-auto container px-4 xl:px-12 2xl:px-4" },
                react_1.default.createElement("div", { className: "lg:flex" },
                    react_1.default.createElement("div", { className: "w-full lg:w-1/2 mb-16 lg:mb-0 flex" },
                        react_1.default.createElement("div", { className: "w-full lg:w-1/2 px-6" },
                            react_1.default.createElement("ul", null, navigation.map(link => (react_1.default.createElement("li", { key: link.href },
                                react_1.default.createElement("a", { href: link.href, className: "text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50" }, link.name)))))),
                        react_1.default.createElement("div", { className: "w-full lg:w-1/2 px-6" },
                            react_1.default.createElement("ul", null,
                                react_1.default.createElement("li", null,
                                    react_1.default.createElement("a", { href: "/#", className: "text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50" },
                                        "Kontaktujte n\u00E1s od ",
                                        react_1.default.createElement("br", null),
                                        "Po - Pi",
                                        react_1.default.createElement("br", null),
                                        "8:00 - 20:00"))))),
                    react_1.default.createElement("div", { className: "w-full lg:w-1/2 flex" },
                        react_1.default.createElement("div", { className: "w-full lg:w-1/2 px-6" },
                            react_1.default.createElement("ul", null,
                                react_1.default.createElement("li", null,
                                    react_1.default.createElement("a", { href: "/#", className: "text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50" }, "Z\u00E1sady ochrany osobn\u00FDch \u00FAdajov")),
                                react_1.default.createElement("li", { className: "mt-6" },
                                    react_1.default.createElement("a", { href: "/#", className: "text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50" }, "Podmienky slu\u017Eby")))),
                        react_1.default.createElement("div", { className: "w-full lg:w-1/2 px-6 flex flex-col justify-between" },
                            react_1.default.createElement("div", { className: "flex items-center mb-6 space-x-2" },
                                react_1.default.createElement(react_social_icons_1.SocialIcon, { network: "facebook", url: FACEBOOK, bgColor: "#f6871f", target: "_blank" }),
                                react_1.default.createElement(react_social_icons_1.SocialIcon, { network: "instagram", url: INSTAGRAM, bgColor: "#f6871f", target: "_blank" }))))))),
        react_1.default.createElement("div", { className: "py-16 flex flex-col justify-center items-center" },
            react_1.default.createElement(HellstavLogo_1.default, { width: 200 }),
            react_1.default.createElement("p", { className: "mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50" }, "2021 Hellstav. V\u0161etky pr\u00E1va vyhraden\u00E9.")))));
exports.default = Footer;
