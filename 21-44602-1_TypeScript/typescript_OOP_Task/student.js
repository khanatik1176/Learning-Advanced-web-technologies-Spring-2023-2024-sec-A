"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.students = void 0;
var students = /** @class */ (function () {
    function students(student_id, student_name) {
        this.student_id = student_id;
        this.student_name = student_name;
        this.enrolledStudents = [];
        this.courseList = [];
    }
    students.prototype.enrollCourse = function (course, student) {
        course.enrollStudents(student, student);
        this.courseList.push(course);
    };
    students.prototype.fetchStudentData = function () {
        console.log("Student_id: " + this.student_id);
        console.log("Student Name: " + this.student_name);
    };
    students.prototype.showDetailsofStudent = function () {
        console.log("Student ID:", this.student_id);
        console.log("Student Name:", this.student_name);
        console.log();
    };
    return students;
}());
exports.students = students;
