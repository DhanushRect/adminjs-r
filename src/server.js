const express = require('express');
const {default:AdminBro} = require('admin-bro');
const options = require('./admin.options');
const buildAdminRouter = require('./admin.router');


const app = express();
const port = process.env.PORT || 3000;

const run = async ()=> {
  const admin = new AdminBro(options);
  const router = buildAdminRouter(admin);
  app.use(admin.options.rootPath,router);
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      });
};
 
module.exports = run; 