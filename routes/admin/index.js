const express = require('express');
const router = express.Router();

const authRouter = require('./auth');
const addRouter = require('./add');
const deleteRouter = require('./delete');
const updateRouter = require('./update');

router.use('/', authRouter);
router.use('/add', addRouter);
router.use('/delete', deleteRouter);
router.use('/update', updateRouter);

module.exports = router;