// const { addExpense, getExpense, deleteExpense } = require('../controllers/expense');
const { addIncome } = require('../controllers/income');

const router = require('express').Router();

// router.get('/', (req,res)=>{
//     res.send('Hello World')
// })
router.post('/add-income', addIncome)
//     .get('/get-incomes', getIncomes)
//     .delete('/delete-income/:id', deleteIncome)
//     .post('/add-expense', addExpense)
//     .get('/get-expenses', getExpense)
//     .delete('/delete-expense/:id', deleteExpense)

module.exports = router