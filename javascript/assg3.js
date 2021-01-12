/**********
Date: 09/19/2018
Author: Phu Vu
Class: CITW 165
Exercise: Exercise 3
**********/

//Create variables for the message
var a = 'This is';
var b = ' Phu Vu';
var c = ' average grade in CITW 165:';

//Concatenate the three variables above to create the message
var result = a + b + c;

var myGrade = document.getElementById('message');
myGrade.textContent = result;

//Create variables 
var homework = 100;
var project = 96;
var quizzes = 94;
var exams = 93;
var finalExam = 92;
var weightedAverage = (homework + project + quizzes + exams + finalExam) / 5;

//Get the element that has an id of homework then update its contents
var myHomework = document.getElementById('homework');
myHomework.textContent = homework;

//Get the element that has an id of project then update its contents
var myProject = document.getElementById('project');
myProject.textContent = project;

//Get the element that has an id of quizzes then update its contents
var myQuizzes = document.getElementById('quizzes');
myQuizzes.textContent = quizzes;

//Get the element that has an id of exams then update its contents
var myExams = document.getElementById('exams');
myExams.textContent = exams;

//Get the element that has an id of finalexam then update its contents
var myFinalExam = document.getElementById('finalexam');
myFinalExam.textContent = finalExam;

//Get the element that has an id of weightedaverage then update its contents
var myWeightedAverage = document.getElementById('weightedaverage');
myWeightedAverage.textContent = weightedAverage;