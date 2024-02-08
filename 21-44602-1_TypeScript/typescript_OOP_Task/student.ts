import { Courses } from "./course";

export class students
{
    private student_id: string;
    private student_name: string; 
    private enrolledStudents: students[];
    private courseList : Courses[];

    constructor(student_id: string, student_name: string)
    {
        this.student_id = student_id;
        this.student_name = student_name;
        this.enrolledStudents = [];
        this.courseList = [];


    }

    enrollCourse(course: Courses, student:students):void
    {
        course.enrollStudents(student,student);
        this.courseList.push(course);
    }

    fetchStudentData():void
    {
        console.log("Student_id: "+this.student_id);
        console.log("Student Name: "+this.student_name);
    }

    showDetailsofStudent(): void
    {
        console.log("Student ID:",this.student_id);
        console.log("Student Name:", this.student_name);
        console.log();
        
        
        
    }

}