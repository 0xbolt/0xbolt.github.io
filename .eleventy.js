const yaml = require('js-yaml');
const fs = require('fs');

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("*.js");
    eleventyConfig.addPassthroughCopy("*.css");

    eleventyConfig.addGlobalData("quotes", yaml.load(fs.readFileSync('quotes.yaml', 'utf8')));

    eleventyConfig.addCollection("articles", function(collection) {
        const articles = collection.getFilteredByGlob("articles/*.md")
            .sort((a, b) => new Date(b.data.date) - new Date(a.data.date));
        if (process.env.ELEVENTY_ENV === 'development') {
            return articles;
        }
        return articles.filter(a => a.data.show);
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
