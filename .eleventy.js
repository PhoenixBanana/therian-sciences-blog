module.exports = function (eleventyConfig) {
  // Define a collection named 'post' from files in /posts/
  eleventyConfig.addCollection("post", function (collectionApi) {
    return collectionApi.getFilteredByGlob("posts/*.md");
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site",
    },
  };
};
