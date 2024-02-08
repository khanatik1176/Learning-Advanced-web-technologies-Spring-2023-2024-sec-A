"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Courses = void 0;
var Courses = /** @class */ (function () {
    function Courses(course_id, course_name, teacher_name, teacher_id) {
        this.course_id = course_id;
        this.course_name = course_name;
        this.teacher_name = teacher_name;
        this.teacher_id = teacher_id;
        this.enrolledStudents = [];
    }
    Courses.prototype.enrollStudents = function (student_id, student_name) {
        this.enrolledStudents.push(student_id, student_name);
    };
    Courses.prototype.showCourseDetails = function () {
        console.log("Course id is: ", this.course_id);
        console.log("Course Name is:", this.course_name);
        console.log("Course Created by:", this.teacher_name);
        for (var _i = 0, _a = this.enrolledStudents; _i < _a.length; _i++) {
            var tracker = _a[_i];
            tracker.fetchStudentData();
        }
        console.log();
    };
    return Courses;
}());
exports.Courses = Courses;
