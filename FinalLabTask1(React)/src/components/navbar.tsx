import { ReactNode } from "react";

interface Props
{
    Home: string;
    Projects: string;
    Skils: string;
    Contact: string;
    
}

function Navbar({Home,Projects,Skils,Contact}:Props)
{
    return(
    <>

        <div className="navbar">
            <ul>
            <li><p className="para">{Home}</p></li>
            <li><p className="para">{Projects}</p></li>
            <li> <p className="para">{Skils}</p></li>
            <li> <p className="para">{Contact}</p></li>
            </ul>
            
            </div>
            </>
    )
}

export default Navbar