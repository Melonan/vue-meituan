//第一步 在vue.config.js中添加


// module.exports = {
//     devServer: {
//       proxy: {
//         '/api': {
//           target: 'http://localhost:8080',
//           changeOrigin: true,
//           pathRewrite: {
//             '^/api': '/mock'
//           }
//         }
//       }
//     }
//   }


const express = require("express");
const goods = require("./public/mock/01-商品页(点菜).json");
const ratings = require("./public/mock/02-商品页(评价).json");
const seller = require("./public/mock/03-商品页(商家).json");

const app = express();
var apiRoutes = express.Router();
//中间件
app.use("/api", apiRoutes);


module.exports = {
  // 第二步：在module.exports中找到devServer,在里面加上before（）方法，如果没有devServer,自己添加
  devServer: {
    port: 8080,
    before(app) {

        
        // 通过get请求方式获取数据
        app.get('/api/goods',(req,res) => {
            // 返回数据给客户端, 返回json数据
            res.json({
              errno: 0,
              data: goods
            });
        });

        app.get('/api/ratings',(req,res) => {
            // 返回数据给客户端, 返回json数据
            res.json({
              errno: 0,
              data: ratings
            });
        });

        app.get('/api/seller',(req,res) => {
            // 返回数据给客户端, 返回json数据
            res.json(seller);
        });


        
    },
  },
};
