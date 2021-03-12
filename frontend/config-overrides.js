const {
    override,
    addDecoratorsLegacy,
    disableEsLint,
    addBundleVisualizer,
    addWebpackAlias,
    adjustWorkbox,
    fixBabelImports,
    addLessLoader,
  } = require("customize-cra");
  const path = require("path");
  
  module.exports = override(
    // enable legacy decorators babel plugin
    addDecoratorsLegacy(),
  
    // disable eslint in webpack
    disableEsLint(),
  
    // add webpack bundle visualizer if BUNDLE_VISUALIZE flag is enabled
    process.env.BUNDLE_VISUALIZE == 1 && addBundleVisualizer(),
  
    // add an alias for "ag-grid-react" imports
    addWebpackAlias({
      ["ag-grid-react$"]: path.resolve(__dirname, "src/shared/agGridWrapper.js")
    }),

  
    // adjust the underlying workbox
    adjustWorkbox(wb =>
      Object.assign(wb, {
        skipWaiting: true,
        exclude: (wb.exclude || []).concat("index.html")
      })
    ),

    fixBabelImports("import", {
      libraryName: "antd-mobile", libraryDirectory: "es", style: true // change importing css to less
    }),
    addLessLoader({
      javascriptEnabled: true,
      // modifyVars: { "@primary-color": "#1DA57A" }
    })
  
  );