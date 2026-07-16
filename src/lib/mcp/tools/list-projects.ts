import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const projects = [
  {
    id: "smart-home-gemini",
    title: "Smart Home Automation with Gemini",
    description:
      "Voice-controlled appliances using Gemini AI and Google Home integration for seamless home automation.",
    category: "major",
    tech: ["ESP8266", "Google Home", "Gemini AI", "Blynk IoT"],
    status: "Completed",
    link: "https://www.linkedin.com/posts/janagabalan-r-a72499281_iot-smarthome-googleassistant-activity-7341707262932963329-ULRI",
  },
  {
    id: "smart-door-lock",
    title: "Smart Door Lock with RFID & Remote Control",
    description:
      "Advanced RFID security system with admin override capabilities and remote access control.",
    category: "major",
    tech: ["Arduino", "RFID", "ESP8266", "Mobile App"],
    status: "Completed",
  },
  {
    id: "radar-ultrasonic",
    title: "Radar System using Ultrasonic Sensor",
    description:
      "Object detection and tracking system with servo motor integration for automated surveillance.",
    category: "major",
    tech: ["Arduino", "Ultrasonic Sensor", "Servo Motor", "Processing"],
    status: "Completed",
  },
  {
    id: "fire-detection",
    title: "Fire Detection System",
    description:
      "Smoke sensor-based alert system with immediate notification capabilities for fire safety.",
    category: "minor",
    tech: ["Arduino", "Smoke Sensor", "Buzzer", "LED Indicators"],
    status: "Completed",
  },
  {
    id: "temperature-monitoring",
    title: "Temperature Monitoring System",
    description:
      "Real-time environmental monitoring with cloud data logging and analytics dashboard.",
    category: "minor",
    tech: ["ESP8266", "DHT22", "Blynk IoT", "Data Analytics"],
    status: "Completed",
  },
  {
    id: "plant-stress-health",
    title: "IoT Framework for Plant Stress & Health",
    description:
      "Real-time monitoring of plant health with a health score displayed on OLED display and Blynk app for remote tracking.",
    category: "major",
    tech: ["ESP8266", "Sensors", "OLED Display", "Blynk IoT"],
    status: "Completed",
    link: "https://www.linkedin.com/posts/janagabalan-r-a72499281_iot-framework-for-decoding-plant-stress-activity-7396017845630877696-hS4o",
  },
];

export default defineTool({
  name: "list_projects",
  title: "List projects",
  description:
    "Lists Janagabalan's IoT projects. Optionally filter by category ('major' or 'minor').",
  inputSchema: {
    category: z
      .enum(["major", "minor"])
      .optional()
      .describe("Optional filter: 'major' or 'minor' projects only."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ category }) => {
    const filtered = category ? projects.filter((p) => p.category === category) : projects;
    return {
      content: [{ type: "text", text: JSON.stringify(filtered, null, 2) }],
    };
  },
});
