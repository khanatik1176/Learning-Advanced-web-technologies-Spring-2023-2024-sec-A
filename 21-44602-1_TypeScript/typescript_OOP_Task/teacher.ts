import {students}  from "./student";
import { Courses } from "./course";


export class Teachers
{
    private teacher_id: string;
    private teacher_name: string;
    private enrolledStudents: students[];
    private courseList: Courses[];
    constructor(teacher_id:string, teacher_name:string)
    {   
        this.teacher_id = teacher_id;
        this.teacher_name = teacher_name 
        this.enrolledStudents = []; 
        this.courseList = [];  
    }

    createCourse(course_id: string, course_name: string, teacher_name: string,teacher_id: string): Courses
    {   
        let courseAdder = new Courses(course_id, course_name, teacher_name, teacher_id);
        return courseAdder;
        
    }

    studentDetails():void
    {
        for (let checker of this.enrolledStudents)
        {
            checker.showDetailsofStudent();
        }
    }

    teacherDetails():void
    {
        console.log("Teacher Id is: "+this.teacher_id);
        console.log("Teacher Name is: "+this.teacher_name);
        
    }

    courseDetails():void
    {
        for(let checker of this.courseList)
        {
            checker.showCourseDetails();
            
        }
    }


}

