import { register } from 'module';
import Link from 'next/link';
import Logo from '../../../public/images/logo.jpg';
import Image from 'next/image';



const NavBar = () => 
    {
        return (
            <div className="nav">
            
            <div className="nav-logo">
                <Image src={Logo} alt="logo" width={50} height={50} />
            </div>
           
           <div className="nav-linker">
            <ul>
                <li className="nav-links"><Link href='./register'></Link> Register</li>
                <li className="nav-links"><Link href='./login'></Link> Login</li>
            </ul>
            </div>
            

            </div>
        )
    }

    export default NavBar;