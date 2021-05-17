export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60a27385b4a0fc0f5a88f544",
                  title: "Sanity Studio",
                  name: "sanity-senior-projects-studio",
                  apiId: "ea4bd8f1-fa23-4f60-b9bd-f51be3931766",
                },
                {
                  buildHookId: "60a2738515fead10667420d5",
                  title: "Blog Website",
                  name: "sanity-senior-projects",
                  apiId: "2fc41445-ae12-4849-8200-124f85dc9252",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/arcee30/sanity-senior-projects",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-senior-projects.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
