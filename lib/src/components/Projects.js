"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ProjectItem_1 = __importDefault(require("./ProjectItem"));
const SectionHeader_1 = __importDefault(require("./SectionHeader"));
const projects_json_1 = __importDefault(require("../../content/projects.json"));
const Projects = () => (react_1.default.createElement("section", { className: "text-gray-600 body-font", id: "projekty" },
    react_1.default.createElement("div", { className: "container px-5 py-24 mx-auto" },
        react_1.default.createElement(SectionHeader_1.default, { title: "Posledn\u00E9 projekty" }),
        react_1.default.createElement("div", { className: "flex flex-wrap -m-4" }, projects_json_1.default.all.map(project => (react_1.default.createElement(ProjectItem_1.default, { key: project.name, project: project, imagesPath: projects_json_1.default.imagesPath })))))));
exports.default = Projects;
