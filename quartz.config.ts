import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "d-floe's docs",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    baseUrl: "docs.d-floe.com",
    ignorePatterns: ["!private", "templates"],
    defaultDateType: "modified",
    theme: {
      typography: {
        header: "Signika Negative",
        body: "Exo 2",
        code: "Source Code Pro",
      },
      colors: {
        lightMode: {
          light: "#faf8f8",
          lightgray: "#577498",
          gray: "#3e3e3e",
          darkgray: "#202e4f",
          dark: "#202e4f",
          secondary: "#044d7c",
          tertiary: "#427af1",
          highlight: "rgba(143, 159, 169, 0.15)",
        },
        darkMode: {
          light: "rgb(30, 30, 30)",
          lightgray: "rgb(173, 173, 173)",
          gray: "#ebebeb",
          darkgray: "rgb(241, 244, 244)",
          dark: "rgb(241, 244, 244)",
          secondary: "#f88c85",
          tertiary: "rgb(255, 174, 168)",
          highlight: "rgba(143, 159, 169, 0.15)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.TableOfContents(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"], // you can add 'git' here for last modified from Git but this makes the build slower
      }),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: true }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources({ fontOrigin: "googleFonts" }),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
