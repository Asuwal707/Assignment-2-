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
            const students = JSON.parse(studentDataFromFile); // prasing the contents into srudents vairable
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