// Function to create a new expense item
function createExpenseItem(expense, amount) {
    const li = document.createElement('li');
    li.textContent = `Expense: ${expense}, Amount: $${amount}`;
  
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => {
      // Perform edit functionality here
      const newExpense = prompt('Enter new expense:');
      const newAmount = prompt('Enter new amount:');
      li.textContent = `Expense: ${newExpense}, Amount: $${newAmount}`;
    });
  
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      // Perform delete functionality here
      li.remove();
    });
  
    li.appendChild(editButton);
    li.appendChild(deleteButton);
  
    return li;
  }
  
  // Function to handle form submission
  function handleFormSubmit(event) {
    event.preventDefault();
  
    const expenseInput = document.getElementById('expense-input');
    const amountInput = document.getElementById('amount-input');
    const expense = expenseInput.value;
    const amount = amountInput.value;
  
    const expenseItem = createExpenseItem(expense, amount);
  
    const expenseList = document.getElementById('expense-list');
    expenseList.appendChild(expenseItem);
  
    // Clear input fields
    expenseInput.value = '';
    amountInput.value = '';
  }
  
  // Add event listener to the form
  const expenseForm = document.getElementById('expense-form');
  expenseForm.addEventListener('submit', handleFormSubmit);
  