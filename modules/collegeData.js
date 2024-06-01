const fs = require('fs'); //built in file system


// this is our data class  with 2 parameters  
class Data {
    constructor(students, courses) {
        this.students = students;
        this.courses = courses;
    }
}

 dataCollection = null; // assigning it a null value

 // reading json files with our initilize funtion with an arrow function

 function initialize() {
    return new Promise((resolve, reject) => {
        fs.readFile('./data/students.json', 'utf8', (err, studentDataFromFile) => {
            if (err) {
                reject("unable to read students.json"); 
                return;
            }
            const students = JSON.parse(studentDataFromFile); // prasing the contents into students vairable
            fs.readFile('./data/courses.json', 'utf8', (err, courseDataFromFile) => {
                if (err) {
                    reject("unable to read courses.json");
                    return;
                }
                const courses = JSON.parse(courseDataFromFile); 

// Create a new Data object with the students and courses data
                dataCollection = new Data(students, courses);
                resolve();
            });
        });
    });
}
// creating 3 functions getallstudents, gettas and get course that return a promise when resolved 
// or reject it with an error msg


// geiting all the array of objects using the resolve method 

function getAllStudents() {
    return new Promise((resolve, reject) => {
    // checking it datacollection has any students
        if (dataCollection && dataCollection.students.length > 0) {
            resolve(dataCollection.students);
        } else {
            reject("no results returned");
        }
    });
}
// funtion to filter students with teachin assistant role
function getTAs() {
    return new Promise((resolve, reject) => {
        const tas = dataCollection.students.filter(student => student.TA === true);
        if (tas.length > 0) {
            resolve(tas);
        } else {
            reject("no results returned");
        }
    });
}
// function to get course 
function getCourses() {
    return new Promise((resolve, reject) => {
        if (dataCollection && dataCollection.courses.length > 0) {
            resolve(dataCollection.courses);
        } else {
            reject("no results returned");
        }
    });
}

// exporting our functions by using .exports 
module.exports = { initialize, getAllStudents, getTAs, getCourses };
