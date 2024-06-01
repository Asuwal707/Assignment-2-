/*********************************************************************************
*  WEB700 – Assignment 2
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: aashish suwal Student ID: 161760236 Date: 06/01/2024
*
********************************************************************************/

// Importing the collegeData module
const collegeData = require('./modules/collegeData');

collegeData.initialize() //initializing our function
    .then(() => {
        return collegeData.getAllStudents();
    })
    //retriving students 
    .then(students => {
        console.log(`Successfully retrieved ${students.length} students`); // using template literal
        return collegeData.getCourses();
    })
    //retriving course
    .then(courses => {
        console.log(`Successfully retrieved ${courses.length} courses`);
        return collegeData.getTAs();
    })
    //returining  tas
    .then(tas => {
        console.log(`Successfully retrieved ${tas.length} TAs`);
    })
    // error handling incase there are any promise that are rejected .
    .catch(err => {
        console.log(err);
    });