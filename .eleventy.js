const rssPlugin = require("@11ty/eleventy-plugin-rss")

// Filters
const dateFilter = require("./src/filters/date-filter.js")
const w3DateFilter = require("./src/filters/w3-date-filter.js")

// Transforms
const htmlMinTransform = require("./src/transforms/html-min-transform.js")

// Markdown syntax highlighting
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight")

// Create a helpful production flag
const isProduction = process.env.NODE_ENV === "production"

module.exports = (config) => {
  if (isProduction) {
    config.addTransform("htmlmin", htmlMinTransform)
  }
  // Set directories to pass through to the dist folder
  config.addPassthroughCopy("./src/images/")
  config.addPassthroughCopy("./src/css/")

  // Add filters
  config.addFilter("dateFilter", dateFilter)
  config.addFilter("w3DateFilter", w3DateFilter)

  // Plugins
  config.addPlugin(rssPlugin)
  config.addPlugin(syntaxHighlight)

  // Returns a collection of blog posts in reverse date order
  config.addCollection("blogposts", (collection) => {
    return [...collection.getFilteredByGlob("./src/blogposts/*.md")].reverse()
  })

  // Use nunjucks (https://mozilla.github.io/nunjucks/)
  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",

    dir: {
      input: "src",
      output: "dist",
    },
  }
}
