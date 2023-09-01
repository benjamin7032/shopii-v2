//khởi tạo ứng dụng express
const express = require('express');
const app = express();
const port = 3000;

//kết nối với db tại /config
const db = require('./config')
db.connect()

//kết nối với tệp tin tĩnh /public
app.use(express.static('./public'))

//để dùng reg.body
app.use(express.urlencoded({
    extended: true
}))

//sử dụng template engine handlebars tại tệp /views
const handlebars = require('express-handlebars');
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    helpers: {
      sum: (a,b) => a+b
    }
}))
app.set('view engine', 'hbs')
app.set('views', './views');

//kết nối tới các route
const route = require('./routes');
route(app)

//lắng nghe cổng 3000
app.listen(port, (req, res) => {
    console.log('listening on port ' + port);
});