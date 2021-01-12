/**********
Date: 10/16/2018
Author: Phu Vu
Class: CITW 165
Exercise: Exercise 6
**********/

//Adding items to start and end of list
var list = document.getElementsByTagName('ul')[0]; //get the <ul> element

//Add new item start of list
var firstItem = document.createElement('li'); //Create element
var firstText = document.createTextNode('October 5, 2018: Venom') //Create text node
firstItem.appendChild(firstText); //Add text node to element
list.insertBefore(firstItem, list.firstChild); //Add element to list

//Add new item to end of list
var lastItem = document.createElement('li'); //Create element
var lastText = document.createTextNode('March 8, 2019: Captain Marvel') //Create text node
lastItem.appendChild(lastText); //Add text node to element
list.appendChild(lastItem); //Add element end of list

var listItems = document.querySelectorAll('li'); //Add <li> elements

//Add a class of cool to all list items
var i;
for (i = 0; i < listItems.length; i++) 
{
    listItems[i].className = 'cool';   
}

//Add number of items in the list to the heading
var headingTwo = document.querySelector('h2'); //h2 element
var headingTwoText = headingTwo.firstChild.nodeValue; //h2 text
var allItems = listItems.length; //No. of <li> element
var newHeadingTwo = headingTwoText + '<span>' + allItems + '</span>'; //Content
headingTwo.innerHTML = newHeadingTwo; //Update h2