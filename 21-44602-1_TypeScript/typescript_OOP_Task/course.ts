import {students}  from "./student";
import { Teachers } from "./teacher";

export class Courses
{
    private course_id: string;
    private course_name: string;
    private enrolledStudents: students[];
    private teacher_name: string;
    private teacher_id: string;

    constructor(course_id: string, course_name: string, teacher_name: string,teacher_id: string)
    {
        this.course_id = course_id;
        this.course_name = course_name;
        this.teacher_name = teacher_name;
        this.teacher_id = teacher_id;
        this.enrolledStudents = [];
    }


    enrollStudents(student_id:students,student_name:students) : void
    {
        this.enrolledStudents.push(student_id,student_name);

    }



    showCourseDetails():void
    {
        console.log("Course id is: ", this.course_id);
        console.log("Course Name is:", this.course_name);
        console.log("Course Created by:",this.teacher_name);
        for (let tracker of this.enrolledStudents)
        {
            tracker.fetchStudentData();
        }
        console.log();
        
    }



}