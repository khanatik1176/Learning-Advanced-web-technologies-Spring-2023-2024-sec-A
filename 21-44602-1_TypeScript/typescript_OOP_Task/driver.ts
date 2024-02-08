import { students } from "./student";
import { Teachers } from "./teacher";
import { Courses } from "./course";

let course1 = new Courses('A12B','Algebra','Rafid','T22');
let student1 = new students('2','Omor');
let teacher1 = new Teachers('12','Rana');

course1.showCourseDetails();
course1.enrollStudents(student1,student1);


student1.showDetailsofStudent();
student1.enrollCourse(course1,student1);

 teacher1.studentDetails();
 teacher1.teacherDetails();
 teacher1.createCourse('AB123','Arabic2','Ismail','T123');
 teacher1.courseDetails();
 

