import { ReactNode } from "react";

interface Props
{
    name: string;
    email: string;
    address: string;
    dob: string;
    blood: string;

}

function Details({name,email,address,dob,blood}:Props)
{
    return(
    <>

        <div className="details">
            <h1>Personal Details:</h1>
            <p>Name : {name}</p>
            <p>Email : {email}</p>
            <p>Address : {address}</p>
            <p>Date of Birth : {dob}</p>
            <p>Blood Group : {blood}</p>
            </div>
            </>
    )
}

export default Details