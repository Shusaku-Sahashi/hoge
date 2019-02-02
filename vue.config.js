const backend = require("./build/dev-server");

module.exports = {
  configureWebpack: {
    devtool: "source-map"
  },
  devServer: {
    before: backend,
    proxy: {
      // apiを呼び出す場合にInterseptして開発サーバーにリクエストを行う様に設定可能。
      "/api": {
        // '/api'から始まるリクエストを'api.yourservice.com'にプロキシする。
        target: "http://api.yourservice.com",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
