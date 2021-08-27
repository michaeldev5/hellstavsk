import { FC } from "react";
import { TProject } from "../types/TProject";
declare type Props = {
    pageContext: {
        images: string[];
        project: TProject;
    };
};
declare const ProjectPage: FC<Props>;
export default ProjectPage;
