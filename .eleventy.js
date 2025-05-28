const yaml = require('js-yaml');
const fs = require('fs');

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("*.js");
    eleventyConfig.addPassthroughCopy("*.css");

    // Add quotes data from YAML
    eleventyConfig.addGlobalData("quotes", yaml.load(fs.readFileSync('quotes.yaml', 'utf8')));

    return {
        dir: {
            input: ".",
            output: "_site",
            includes: "_includes",
            layouts: "_layouts"
        }
    };
};