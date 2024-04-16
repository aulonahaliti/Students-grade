function Student(ID, name, email, grades, attendance, enrollmentdate, major) {

    this.ID = ID;
    this.name = name;
    this.email = email;
    this.grades = grades;
    this.attendance = attendance;
    this.enrollmentdate = enrollmentdate;
    this.major = major;
}

Student.prototype.disoplayDetails = function() {
    console.log ("ID" + this.ID);
    console.log( "Emri" + this.name);
    console.log("Email" + this.email);
    console.log("Nota" + this.grades);
    console.log("Pjesemarrja" + this.attendance);
    console.log("Data e regjistrimit" + this.enrollmentdate);
    console.log("Drejtimi ne universitet" + this.major);
}

function Grade (TIK, Math){
    this.TIK = TIK;
    this.Math = Math;
}

Grade.prototype.displayGrades = function (){
 console.log("Nota ne TIK: " 
+ this.TIK);
console.log("Nota ne Matematike: " + this.Math);
}

function University() {
    this.Students = [];
    this.Grades = [];
} 

University.prototype.addStudent = function (Student) {
    this.Students.push(Student);
    }
    
    University.prototype.removeStudent = function (Student) {
        this.Students.pop(Student);
    }

University.prototype.addGrade = function (Grade) {
    this.Grades.push (Grade);
}

University.prototype.removeGrade = function (Grade) {
    this.Grades.pop (Grade);
}

University.prototype.displayStudents = function (){
    console.log("Studentet qe jane aktiv ne universitetin e Prishtines");
    for(var i = 0; i < this.Students.length; i++){
        console.log("Student" + (i + 1) + ":");
        this.Students[i].displayDetails;
    }
    }
    
    University.prototype.removeStudent = function (Student) {
        var index = this.Students.indexOf(Student);
        if (index !== -1) {
            this.Students.splice(index, 1);
        }
    }    

University.prototype.displayGrades = function (){
    console.log("Notat");
    for(var i = 0; i < this.Grades.length; i++){
        console.log("Nota" + (i + 1) + ":");
        this.Grades[i].displayGrades();
    }
    }
    
    University.prototype.removeGrade = function (Grade) {
        var index = this.Grades.indexOf(Grade);
        if (index !== -1) {
            this.Grades.splice(index, 1);
        }
    }

    var universiteti = new University();

    var Student1 = new Student ("123456789", "X-personi", "x_persoon@gmail.com", "", "", "", "01/09/2019", "Shkenca Politike");
    var Student2 = new Student ("123456789", "X-personi", "x_persoon@gmail.com", "", "", "", "01/09/2019", "Shkenca Politike");


    var Nota1 = new Grade ("10", "9");

universiteti.addStudent (Student1);
universiteti.addStudent(Student2);

universiteti.addGrade (Nota1);

universiteti.displayGrades();
universiteti.displayStudents();