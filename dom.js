// Change the title of the webpage 
console.log(document.title);
document.title="Shapener";
// Examine DOM
console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.head);
console.log(document.all);
console.log(document.doctype);
var items=document.getElementsByClassName('list-group-item');
console.log(items[1]);
items[1].style.fontWeight='bold';
items[1].style.color='navy';
// GetElementById Making Title Black Border
var headerTitle=document.getElementById('header-title');
headerTitle.style.borderBottom ='solid 3px #000';
// Make ADD ITEM bold & change the font color to green
var input=document.querySelector('input');
input.value='Hello To Git Hub';
input.style.fontWeight='bold';
input.style.color='green';
var Title=document.getElementById('main');
Title.style.color='green';
Title.style.fontWeight='bold';


