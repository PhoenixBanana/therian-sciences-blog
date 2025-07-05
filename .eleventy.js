module.exports = function (eleventyConfig) {
  // Define a collection for blog posts in the "posts" folder
  eleventyConfig.addCollection("post", function (collectionApi) {
    return collectionApi.getFilteredByGlob("posts/*.md");
  });

  return {
    // This ensures URLs are generated correctly when hosted at a sub-path
    pathPrefix: "/therian-sciences-blog/",
    dir: {
      input: ".",           // source files root
      includes: "_includes", // layout templates
      output: "_site",       // build output folder
    },
  };
};
