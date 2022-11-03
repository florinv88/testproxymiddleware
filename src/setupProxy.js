const { createProxyMiddleware } = require('http-proxy-middleware');


module.exports = function (app) {
    app.use(
        createProxyMiddleware('/fnk', {
            target: 'http://localhost:3001',
            changeOrigin: true,
        })
    );
};