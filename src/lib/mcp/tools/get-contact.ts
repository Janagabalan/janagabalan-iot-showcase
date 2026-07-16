import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_contact",
  title: "Get contact info",
  description: "Returns public contact information for Janagabalan R.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: JSON.stringify(
          {
            email: "janagabalanr@gmail.com",
            phone: "+91 8610453552",
            location: "Tittakudi, Cuddalore District, Tamil Nadu, India",
            linkedin: "https://www.linkedin.com/in/janagabalan-r-a72499281",
            portfolio: "https://janagabalan.netlify.app",
          },
          null,
          2,
        ),
      },
    ],
  }),
});
