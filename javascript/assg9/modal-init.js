/**********
Date: 12/01/2018
Author: Phu Vu
Class: CITW 165
Exercise: Exercise 9
**********/

(function() {
    var $content = $('#download-options').detach();

    $('#download').on('click', function() {
        modal.open({content: $content, width:340, height:300});
    });
}());
