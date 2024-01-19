// index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Enable CORS for all routes



const app = express();




const PORT = process.env.PORT || 3001;


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const transactions = [];

app.get('/api/transactions', (req, res) => {
    res.json({
        transactions,
        totalIncome: app.get('totalIncome'),
        totalExpense: app.get('totalExpense'),
        remainingBalance: app.get('remainingBalance'),
      });
    
      console.log('Sending transactions data:', transactions);
}); 





app.post('/api/transactions', (req, res) => {
  const newTransaction = req.body;
  transactions.push(newTransaction);
  updateBalance();
  res.json(newTransaction);
});

function updateBalance() {
  const totalIncome = transactions
    .filter((transaction) => transaction.type === 'income')
    .reduce((sum, transaction) => sum + transaction.amount, 0);

  const totalExpense = transactions
    .filter((transaction) => transaction.type === 'expense')
    .reduce((sum, transaction) => sum + transaction.amount, 0);

  const remainingBalance = totalIncome - totalExpense;

  app.set('totalIncome', totalIncome);
  app.set('totalExpense', totalExpense);
  app.set('remainingBalance', remainingBalance);

  
}






  
  
  

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
