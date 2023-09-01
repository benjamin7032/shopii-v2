const registerRouter = require('./auth/register');
const homeRouter = require('./home');
const loginRouter = require('./auth/login');
const adminRouter = require('./admin');

function routes(app){
    app.use('/login', loginRouter)
    app.use('/register', registerRouter)
    app.use('/', homeRouter)
    app.use('/admin', adminRouter)
}

module.exports = routes