import { projects } from "../../../projectData";

export default function handler(req, res) {
  const id = req.query.id;

  const project = projects.filter((project) => project.id === id);
  if (project.length > 0) {
    res.status(200).json(project[0]);
  } else {
    res.status(404).json("Project Not Found");
  }
}
