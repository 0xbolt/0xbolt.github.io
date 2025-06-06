const yaml = require('js-yaml');
const fs = require('fs');

// Add MathJax support
// eleventyConfig.addPassthroughCopy({
//     "node_modules/mathjax/es5": "mathjax"
// });

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("*.js");
    eleventyConfig.addPassthroughCopy("*.css");

    // Add quotes data from YAML
    eleventyConfig.addGlobalData("quotes", yaml.load(fs.readFileSync('quotes.yaml', 'utf8')));

    // Configure articles collection
    eleventyConfig.addCollection("articles", function(collection) {
        return collection.getFilteredByGlob("articles/*.md");
    });

    return {
        dir: {
            input: ".",
            output: "_site",
            includes: "_includes",
            layouts: "_layouts"
        }
    };
};