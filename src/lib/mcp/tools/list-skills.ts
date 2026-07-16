import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "list_skills",
  title: "List skills",
  description: "Returns Janagabalan's technical and professional skills grouped by category.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: JSON.stringify(
          {
            "Programming & Development": [
              "Arduino IDE Programming",
              "Basic Python",
              "C Programming",
              "Circuit Debugging",
            ],
            "IoT & Hardware": [
              "ESP8266 Development",
              "Hardware Troubleshooting",
              "Sensor Integration",
              "RFID Systems",
            ],
            "Cloud Platforms": [
              "Blynk IoT",
              "Sinric Pro",
              "Google Home Integration",
              "Data Analytics",
            ],
            "Professional Skills": [
              "Project Documentation",
              "Presentation Skills",
              "Excel Data Entry",
              "Problem Solving",
            ],
          },
          null,
          2,
        ),
      },
    ],
  }),
});
