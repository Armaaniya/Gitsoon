// Using querySelector
var secondItem=document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor='green';
 //var thirdItem=document.querySelector('.list-group-item:nth-child(3)');
//thirdItem.style.display='none';
// Using querySelectorAll
var odd =document.querySelectorAll('li:nth-child(odd)');
var even =document.querySelectorAll('li:nth-child(even)');
console.log(odd);
for(var i=0; i <odd.length; i++)
{
    odd[i].style.backgroundColor='green';
    odd[i].style.color='black';
    even[i].style.backgroundColor='white';
    even[i].style.color='green';

}
