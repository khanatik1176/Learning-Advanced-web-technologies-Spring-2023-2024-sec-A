'use client'
import {React,useEffect,useState} from 'react'
import Image from 'next/image'
import Button from '@/app/components/Button'
import docLogo from '../../../../public/Assets/Logo.png'
import Link from 'next/link'




const page = () => {

  const [isloaded, setIsloaded] = useState(false);

  useEffect(()=>
  {
    setIsloaded(true);
  
  },[]);

  if (!isloaded) return null;


  return (
    <>
    
    <div className="service-area h-screen bg-gray flex justify-center items-center">

      <div className='login-form-area bg-indigo-400 flex justify-center rounded-2xl' style={{ height: '48rem', width:"36rem" }}>
      <form action="" method="post" className='flex flex-col'>
          <div className='login-img flex justify-center'>
          <Link href="/">  
          <Image src={docLogo} alt='logo' width={80} height={80} className='mt-5'></Image></Link>
          </div>
          <label htmlFor="" className='pb-3 pt-3 text-center text-black text-3xl'>Sign Up Form</label>
          <input type="text" placeholder="Full Name" name='Full-Name' className='w-72 h-10 rounded text-black bg-white mb-5 pl-3'/>
          <input type="text" placeholder="Email" name='Email' className='w-72 h-10 rounded text-black bg-white mb-5 pl-3'/>
          <input type="date" placeholder="DOB" name='DOB' className='w-72 h-10 rounded text-black bg-white mb-5 pl-3'/>
          <input type="text" placeholder="Address" name='Address' className='w-72 h-10 rounded text-black bg-white mb-5 pl-3'/>
          <input type="text" placeholder="Phone Number" name='PhoneNumber'   className='w-72 h-10 rounded text-black bg-white mb-5 pl-3'/>
          <input type="text" placeholder="NID Number" name='NIDNumber' className='w-72 h-10 rounded text-black bg-white mb-5 pl-3'/>
          <input type="password" placeholder="Password" name='Password' className='w-72 h-10 rounded text-black bg-white mb-2 pl-3'/>
          <input type="password" placeholder="Confirm Password" name='CPassword' className='w-72 h-10 rounded text-black bg-white mb-2 pl-3 mt-2 mb-1'/>
          <Link href='/login' className='text-center text-white hover:text-black mt-2'>Already Have An Account??</Link>
          <Button
          type = "submit"
          title='Sign Up'
          />
        </form>

      </div>

    </div>
    </>
  )
}

export default page
