const { createProxyMiddleware } = require('http-proxy-middleware');


module.exports = function (app) {
    app.use(
        createProxyMiddleware('/fnk', {
            target: 'https://testproxymiddleware.herokuapp.com',
            changeOrigin: true,
        })
    );
};