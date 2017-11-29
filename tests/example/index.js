if (process.env.DEBUG) {
    require("babel-register"); 
}

const express = require('express');
const app = express();
const path = require("path");
const renderer = require("./express");

const evr = renderer.init();
app.use(evr);

app.get('/', function (req, res) {
    const vuefile = path.join(__dirname, "test2.vue")
    const data = {
        bar: true,
        fakehtml: "<p class=\"red\">FAKEHTML</p>"
    }

    const templateLiteral = `<!DOCTYPE html>
    <html lang="en">
        <head>
            <title>{{title}}</title>
            <style>{{css}}</style>
        </head>
        <body>
            <h1>FOOOOO</h1>
            <!--vue-ssr-outlet-->
        </body>
    </html>`
    const vueOptions = {
        title: "Test",
        template: templateLiteral
    };
    res.renderVue(vuefile, data, vueOptions); 
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})