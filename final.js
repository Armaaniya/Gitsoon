// Select the ul element
const itemList = document.getElementsByClassName('list-group')[0];

// Create a new li element
const newListItem = document.createElement('li');

// Add content to the new li element
newListItem.textContent = 'Item 5';
// Append the new li element to the ul element
itemList.appendChild(newListItem);
// Editing
newListItem.style.fontWeight ='bold';


