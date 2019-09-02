const fs = require('fs');
const path = require('path');

const SERVER_PATH = path.resolve(__dirname, '../');
const router = require('koa-router')();


const controller = () => {
  const files = fs.readdirSync(`${SERVER_PATH}/controllers`);
  const jsFiles = files.filter(f => f.endsWith('.js'));
  // 处理每个js文件:
  for (const f of jsFiles) {
    console.log(`process controller: ${f}...`);
    // 导入js文件:
    const mapping = require(`${SERVER_PATH}/controllers/${f}`);
    for (const url in mapping) {
      if (url.startsWith('GET ')) {
        // 如果url类似"GET xxx":
        const pathUrl = url.substring(4);
        // router.get(pathUrl, mapping[url]);
        router.get(pathUrl, async (ctx, next) => {
          await mapping[url](ctx).then((data) => {
            console.log(data.getState())
            ctx.render(data);
            next();
          });
        });
        console.log(`register URL mapping: GET ${pathUrl}`);
      } else if (url.startsWith('POST ')) {
        // 如果url类似"POST xxx":
        const pathUrl = url.substring(5);
        // router.post(pathUrl, mapping[url]);
        router.post(pathUrl, (ctx, next) => {
          ctx.render(mapping[url]);
          next();
        });
        console.log(`register URL mapping: POST ${pathUrl}`);
      } else {
        // 无效的URL:
        console.log(`invalid URL: ${url}`);
      }
    }
  }
  return router;
};

module.exports = controller;
