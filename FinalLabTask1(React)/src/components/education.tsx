import { ReactNode } from "react";

interface Props
{
    University: string;
    College: string;
    cgpa: string;
    gpa: string;
    dept:string;
    fact:string;

}

function Education({University,College,cgpa,gpa,dept,fact}:Props)
{
    return(
    <>

        <div className="details">
            <h1>Educational Details:</h1>
            <p>University : {University}</p>
            <p>CGPA : {cgpa}</p>
            <p>Department : {dept}</p>
            <p>College : {College}</p>
            <p>GPA : {gpa}</p>
            <p>Faculty : {fact}</p>
            
            </div>
            </>
    )
}

export default Education