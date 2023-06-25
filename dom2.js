// Showing Parent Element
var itemList=document.querySelector('#items');
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor='#f4f4f4';
console.log(itemList.parentElement.parentElement);
//Showing lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent='Hello 4';
//Showing lastChild
console.log(itemList.lastChild);
//create Child
console.log(itemList.childNodes);
//Showing FirstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='Hello 1';
//Create firstChild
console.log(itemList.firstChild);
//Showing Next Sibling
console.log(itemList.nextSibling);
//Showing Next Element Sibiling
console.log(itemList.nextElementSibling);
//Showing Previous Sibling
console.log(itemList.previousSibling);
//Showing Previous Element Sibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='navy';
//Create New Element
var newDiv=document.createElement('div');
newDiv.className='Hello yr';
newDiv.id='Hello Js';
//Set Attribute
newDiv.setAttribute('title','Hello Div');
console.log(newDiv);
//Create Text Node
var newDivText=document.createTextNode('Hello World');
//Add Text to (Append Chid)
newDiv.appendChild(newDivText);
newDiv.style.fontSize='39px';
newDiv.style.fontWeight='bold';
newDiv.style.color='navy';
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
container.insertBefore(newDiv,h1);




