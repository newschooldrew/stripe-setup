const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/create-payment-intent", "/public-key"],
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
};