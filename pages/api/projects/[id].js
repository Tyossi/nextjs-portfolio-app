import { projectsFullData } from "../../../fullProjectData";

export default function handler(req, res) {
  const id = req.query.id;

  const project = projectsFullData.filter((project) => project.id === id);
  if (project.length > 0) {
    res.status(200).json(project[0]);
  } else {
    res.status(404).json("Project Not Found");
  }
}
