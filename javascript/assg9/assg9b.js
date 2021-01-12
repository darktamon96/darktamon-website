/**********
Date: 12/01/2018
Author: Phu Vu
Class: CITW 165
Exercise: Exercise 9
**********/

if (window.localStorage) 
{
    var name = document.getElementById('name'); 
    var character = document.getElementById('character'); 

    name.value = localStorage.getItem('name'); 
    character.value=localStorage.getItem('character');

    name.addEventListener('input', function () {    
      localStorage.setItem('name', name.value);
    }, false); 

    character.addEventListener('input', function () {   
      localStorage.setItem('character', character.value);
    }, false);
}