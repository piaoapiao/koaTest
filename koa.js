const Koa = require('koa');
const app = new Koa();


app.use(function *(){
  this.body = 'Hello World';
});


// app.use((ctx, next) => {
//   const start = new Date();
//   return next().then(() => {
//     const ms = new Date() - start;
//     var  res = `${ctx.method} ${ctx.url} - ${ms}ms`;
//     console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
//     ctx.body = res ;
//   });
// });


// // response
// app.use(ctx => {
//   ctx.body = 'Hello Koa';
// });



// app.use(async (ctx, next) => {
//   const start = new Date();
//   await next();
//   const ms = new Date() - start;
//   console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
//   var  res = `${ctx.method} ${ctx.url} - ${ms}ms`;
//   ctx.body = res;
// });

app.listen(3000);

