import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_profile",
  title: "Get profile",
  description: "Returns Janagabalan R's profile: name, title, location, education, and short bio.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: JSON.stringify(
          {
            name: "Janagabalan R",
            title: "IoT Enthusiast & ECE Student",
            tagline: "Building Smart Solutions for a Smarter World",
            location: "Tittakudi, Cuddalore District, Tamil Nadu, India",
            education: {
              degree: "B.E. Electronics and Communication Engineering",
              institution: "Dhanalakshmi Srinivasan Engineering College (Autonomous), Perambalur",
              period: "2022 - 2026",
              status: "Currently Pursuing",
            },
            schooling: {
              school: "Sathya Saai Public School CBSE, Pasar",
              grades: "4th - 12th",
            },
            focus: [
              "IoT (Internet of Things)",
              "Arduino / ESP8266 development",
              "Home automation",
              "Cloud platforms: Blynk IoT, Sinric Pro, Google Home",
            ],
          },
          null,
          2,
        ),
      },
    ],
  }),
});
