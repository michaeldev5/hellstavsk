"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const SectionHeader_1 = __importDefault(require("./SectionHeader"));
const TeamMember_1 = __importDefault(require("./TeamMember"));
const Team = () => {
    return (react_1.default.createElement("div", { className: "px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20" },
        react_1.default.createElement(SectionHeader_1.default, { title: "N\u00E1\u0161 t\u00EDm", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut ante laoreet, gravida turpis nec, porta erat. Sed feugiat neque vel maximus tristique. Quisque iaculis turpis ut elit pretium, non porta augue faucibus. \n        " }),
        react_1.default.createElement("div", { className: "grid gap-10 mx-auto lg:grid-cols-3" },
            react_1.default.createElement(TeamMember_1.default, { name: "Stanislav Helmanovsk\u00FD", desc: "Product Manager", phone: "0907278857", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" }),
            react_1.default.createElement(TeamMember_1.default, { name: "Vladim\u00EDr Helmanovsk\u00FD", desc: "Design Team", phone: "0910144856", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" }),
            react_1.default.createElement(TeamMember_1.default, { name: "J\u00E1n Helmanovsk\u00FD", desc: "Human resources", phone: "0911846157", imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" }))));
};
exports.default = Team;
