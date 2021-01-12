/**********
Date: 12/04/2018
Author: Phu Vu
Class: CITW 165
Exercise: Exercise 10
**********/

$().ready(function(){
    $("#email_form").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            email_confirm: {
                required: true,
                equalTo: "#email"
            },
            first_name: "required",
            last_name: "required",
            zip: {
                required: true,
                minlength: 5,
                maxlength: 5,
                digits: true
            },

            messages: {
                email: "Please enter a valid email address", 
                email_confirm: {
                    required: "Please provide a valid email address",
                    equalTo: "Please enter the same email as above"
                }, 
                firstname: "Please enter your first name",
                lastname: "Please enter your last name",
                zip: {
                    required: "Please provide a zip code",
                    minlength: "Zip code must be 5 digit numbers",
                    maxlength: "Zip code must be 5 digit numbers",
                    digits: "Zip code must be 5 digit numbers"
                },                                       
            }
        }
    });
});