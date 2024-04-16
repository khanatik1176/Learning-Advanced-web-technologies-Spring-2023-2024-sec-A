import Details from "./details";
import Education from "./education";
import {useState} from 'react';
function DetailsInfo()
{

    const [count,setCount] = useState(0);

    function addCount()
    {
        setCount(count+1);
    }
   
    
        return(
        <>
     
        <div>
        <Details name = "Khan Atik Faisal" email = "khanatik1176@gmail.com" address = "Uttara" dob ="14-10-2002" blood = "A+"  ></Details> 
        <Education University="American International University-Bangladesh (AIUB)"cgpa="3.95" dept="CSE" College="Milestone College" gpa="5.00" fact="Science" ></Education>
        <button onClick={addCount}>Submit</button>
        <h1>Total Submited: {count}</h1>     
        </div>
        </>
    )


}

export default DetailsInfo