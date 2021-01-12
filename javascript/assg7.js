/**********
Date: 10/29/2018
Author: Phu Vu
Class: CITW 165
Exercise: Exercise 7
**********/

var textInput, textName, textSearch, btn; //Declare variables
textInput = document.getElementById('textInput');
textName = document.getElementById('textName');

function writeLabel(e) //Declare function
{
    if(!e)
    {
        e = window.event;
    }
    btn = e.btn || e.srcElement; //Get target of event
    textSearch = btn.value; //Value of that element
    textName.textContent = textSearch; //Update note text
}

//This is where the record / pause controls and functions go

if (document.addEventListener) //If event listener supported
{
    document.addEventListener('click', function(e) //For any click document
    {
        recorderControls(e); //Call recorderControls()
    }, false); //Capture during bubble phase

    //If input event fires on noteInput, call writeLabel()
    textInput.addEventListener('input', writeLabel, false);
}
else 
{
    document.attachEvent('onclick', function(e)
    {
        recorderControls(e);
    });

    //If keyup event fires on noteInput, call writeLabel()
    textInput.attachEvent('onkeyup', writeLabel);
}

function recorderControls(e)
{
    if (!e)
    {
        e = window.event;
    }
    btn = e.btn || e.srcElement;

    if (e.prevenDefault)
    {
        e.prevenDefault();
    }
    else 
    {
        e.returnValue = false;
    }


    switch(btn.getAttribute('data-state'))
    {
        case 'record':
            record(btn);
            break;
        case 'stop':
            stop(btn);
            break;
    }
}

function record(btn)
{
    btn.setAttribute('data-state', 'stop');
    btn.textContent = 'stop';
}

function stop(btn)
{
    btn.setAttribute('data-state', 'record');
    btn.textContent = 'record';
}