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
                    "628c1158541fa30fc785c576",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-dcu83x8t",
                  apiId: "1372b241-990c-4984-9196-4ca64d4704b8",
                },
                {
                  buildHookId: "628c1159fc7c7f102f4a09e4",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-yxk4njhb",
                  apiId: "263bb35d-3040-4edc-9b61-c697b15fefc2",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/kingsmen-david/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-yxk4njhb.netlify.app",
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
