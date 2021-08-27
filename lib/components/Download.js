"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const SectionHeader_1 = __importDefault(require("./SectionHeader"));
const Button_1 = __importDefault(require("./Button"));
const Download = () => (react_1.default.createElement("div", { className: "text-center mb-12 v", id: "sluzby" },
    react_1.default.createElement(SectionHeader_1.default, { title: "Slu\u017Eby", description: "Presnej\u0161ie inform\u00E1cie o nami pon\u00FAkan\u00FDch slu\u017Eb\u00E1ch n\u00E1jdete v na\u0161om CENN\u00CDKU ktor\u00FD si m\u00F4\u017Eete stiahnu\u0165 v PDF s\u00FAbore, alebo po\u017Eiada\u0165 o  aktu\u00E1lnu cenov\u00FA ponuku cez n\u00E1\u0161 kontaktn\u00FD formul\u00E1r." }),
    react_1.default.createElement(Button_1.default, { label: "Stiahnu\u0165 PDF", Icon: react_1.default.createElement("svg", { className: "fill-current w-4 h-4 mr-2", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" },
            react_1.default.createElement("path", { d: "M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" })), href: "/hellstavsro.pdf" })));
exports.default = Download;
