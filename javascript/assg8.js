/**********
Date: 11/07/2018
Author: Phu Vu
Class: CITW 165
Exercise: Exercise 8
**********/

$(function()
{
    //setup
    var $charList, $newCharForm, $newCharButton;
    var name = '';
    $charList = $('ul');
    $newCharForm = $('#newCharForm');
    $newCharButton = $('#newCharButton');

    $('li').hide().each(function(index)
    {
        $(this).delay(450 * index).fadeIn(1600);
    });

    //item counter
    function updateCount()
    {
        var names = $('li[class!=complete]').length;
        $('#counter').text(names);
    }
    updateCount();

    //setup form for new items
    $newCharButton.show();
    $newCharForm.hide();
    $('#showForm').on('click', function()
    {
        $newCharButton.hide();
        $newCharForm.show();
    });

    //adding a new list item
    $newCharForm.on('submit', function(e)
    {
        e.preventDefault();
        var text = $('input:text').val();
        $charList.append('<li>' + text + '</li>');
        $('input:text').val('');
        updateCount();
    });

    //click handling - uses delegation on <ul> element
    $charList.on('click', 'li', function()
    {
        var $this = $(this);
        var complete = $this.hasClass('complete');
        
        if (complete === true)
        {
            $this.animate(
            {
                opacity: 0.0, paddingLeft: '+=180'
            }, 500, 'swing', 
                
                function()
                {
                    $this.remove();
                }
            );               
        }
        else 
        {
            name = $this.text();
            $this.remove();
            $charList
                .append('<li class=\"complete\">' + name + '</li>')
                .hide().fadeIn(300);
            updateCount();
        }    
    });
});