import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "list_internships",
  title: "List internships",
  description: "Returns Janagabalan's internship experience with company, role, and dates.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: JSON.stringify(
          [
            {
              company: "NSIC, Chennai",
              role: "IoT Training",
              duration: "1 week",
              date: "August 2024",
              description:
                "Gained hands-on experience in IoT technologies and industrial applications.",
            },
            {
              company: "ALAS Robotech Solution, Salem",
              role: "Robotics and IoT",
              duration: "10 days",
              date: "February 2025",
              description: "Advanced training in robotics integration with IoT systems.",
            },
          ],
          null,
          2,
        ),
      },
    ],
  }),
});
