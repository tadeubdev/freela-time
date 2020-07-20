const openInEditor = require("launch-editor-middleware");

module.exports = {
  pwa: {
    name: 'Freela Time',
    themeColor: '#235BBC',
    msTileColor: '#FFFFFF',
    manifestOptions: {
      background_color: '#FFFFFF'
    }
  },
  configureWebpack: {
    devServer: {
      before(app) {
        app.use("/__open-in-editor", openInEditor("code"));
      }
    }
  },
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        args[0].title = 'Freela Time';
        return args;
      });
  },
}
