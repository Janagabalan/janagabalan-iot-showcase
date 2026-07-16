import { defineMcp } from "@lovable.dev/mcp-js";
import getProfile from "./tools/get-profile";
import listProjects from "./tools/list-projects";
import listSkills from "./tools/list-skills";
import listServices from "./tools/list-services";
import getContact from "./tools/get-contact";
import listInternships from "./tools/list-internships";

export default defineMcp({
  name: "janagabalan-portfolio-mcp",
  title: "Janagabalan Portfolio MCP",
  version: "0.1.0",
  instructions:
    "Public MCP server for Janagabalan R's IoT portfolio. Use these tools to look up his profile, IoT projects, skills, services offered, internship experience, and public contact info.",
  tools: [getProfile, listProjects, listSkills, listServices, getContact, listInternships],
});
