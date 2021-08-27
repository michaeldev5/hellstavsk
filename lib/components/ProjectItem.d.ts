import { FC } from "react";
import { TProject } from "../types/TProject";
declare type Props = {
    project: TProject;
    imagesPath: string;
};
declare const ProjectItem: FC<Props>;
export default ProjectItem;
