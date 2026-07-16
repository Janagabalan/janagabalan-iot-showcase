import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "list_services",
  title: "List services",
  description: "Returns the IoT services and solutions Janagabalan offers.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: JSON.stringify(
          [
            {
              title: "Home Automation Systems",
              description:
                "Smart home solutions with voice control using Google Home and Gemini AI.",
              features: ["Voice Control", "Remote Access", "Energy Monitoring", "Custom Scheduling"],
            },
            {
              title: "Smart Security Systems",
              description:
                "RFID-based security systems with admin controls and remote monitoring.",
              features: ["RFID Access Control", "Admin Override", "Remote Monitoring", "Alert Systems"],
            },
            {
              title: "Sensor-Based Alerting",
              description: "Ultrasonic and radar systems for object detection and tracking.",
              features: ["Object Detection", "Real-time Tracking", "Automated Alerts", "Data Logging"],
            },
            {
              title: "Environmental Monitoring",
              description: "Real-time temperature and environmental monitoring with cloud integration.",
              features: ["Real-time Monitoring", "Cloud Integration", "Data Analytics", "Historical Trends"],
            },
            {
              title: "Safety & Fire Detection",
              description: "Smoke sensor-based fire detection with immediate alert capabilities.",
              features: ["Smoke Detection", "Immediate Alerts", "Emergency Protocols", "Multi-sensor Integration"],
            },
            {
              title: "Project Consulting",
              description: "IoT consultation and prototyping services for custom solutions.",
              features: ["Custom Solutions", "Rapid Prototyping", "Technical Consultation", "Implementation Support"],
            },
          ],
          null,
          2,
        ),
      },
    ],
  }),
});
