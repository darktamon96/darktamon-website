/**********
Date: 10/10/2018
Author: Phu Vu
Class: CITW 165
Exercise: Exercise 5
**********/

function calc(){
        var entry = parseInt(document.getElementById("score").value);
        var letterGrade;
        //write the if statements in this area below, leaving the last curly brace at the end of the script.
        if (entry >= 90 && entry <= 100)
        {
                letterGrade = "A";
        }
        else if (entry >= 80 && entry <= 89)
        {
                letterGrade = "B";
        }
        else if (entry >= 68 && entry <= 79)
        {
                letterGrade = "C";
        }
        else if (entry >= 60 && entry <= 67)
        {
                letterGrade = "D";
        }
        else if (entry >= 0 && entry <= 59)
        {
                letterGrade = "F";
        }
        else 
        {
                letterGrade = "Invalid score";
        }
        alert("Number grade: " + entry + "\nLetter grade: " + letterGrade);

}//don't remove this line