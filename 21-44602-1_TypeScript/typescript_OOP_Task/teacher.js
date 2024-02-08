"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teachers = void 0;
var course_1 = require("./course");
var Teachers = /** @class */ (function () {
    function Teachers(teacher_id, teacher_name) {
        this.teacher_id = teacher_id;
        this.teacher_name = teacher_name;
        this.enrolledStudents = [];
        this.courseList = [];
    }
    Teachers.prototype.createCourse = function (course_id, course_name, teacher_name, teacher_id) {
        var courseAdder = new course_1.Courses(course_id, course_name, teacher_name, teacher_id);
        return courseAdder;
    };
    Teachers.prototype.studentDetails = function () {
        for (var _i = 0, _a = this.enrolledStudents; _i < _a.length; _i++) {
            var checker = _a[_i];
            checker.showDetailsofStudent();
        }
    };
    Teachers.prototype.teacherDetails = function () {
        console.log("Teacher Id is: " + this.teacher_id);
        console.log("Teacher Name is: " + this.teacher_name);
    };
    Teachers.prototype.courseDetails = function () {
        for (var _i = 0, _a = this.courseList; _i < _a.length; _i++) {
            var checker = _a[_i];
            checker.showCourseDetails();
        }
    };
    return Teachers;
}());
exports.Teachers = Teachers;
