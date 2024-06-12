module.exports = function(eleventyConfig){
    
    // addPassThroughCopy method creates a file/folder copy in the output directory
    eleventyConfig.addPassthroughCopy("src/assets/css");
    eleventyConfig.addPassthroughCopy("src/assets/img");
    eleventyConfig.addPassthroughCopy("src/assets/js");
    
    return {
    // markdown files, data files and html files will be processed by Nunjucks
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',  
    
    // overriding default directories
    dir: {
        input: "src",
        layouts: '_layouts'
      }
    };
  };