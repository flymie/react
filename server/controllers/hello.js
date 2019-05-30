const fnHello = async (ctx, next) => {
  const { name } = ctx.params;
  ctx.response.body = `<h1>Hello, ${name}!</h1>`;
};

module.exports = {
  'GET /hello/:name': fnHello,
};
