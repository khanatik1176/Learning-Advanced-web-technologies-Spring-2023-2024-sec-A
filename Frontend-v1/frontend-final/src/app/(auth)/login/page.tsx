'use client'
import React, { useEffect, useState } from 'react'
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

      <div className='login-form-area bg-indigo-400 w-96 flex justify-center rounded-2xl' style={{ height: '30rem' }}>
        <form action="" method="post" className='flex flex-col'>
          <div className='login-img flex justify-center'>
          <Link href="/">  
          <Image src={docLogo} alt='logo' width={80} height={80} className='mt-5'></Image></Link>
          </div>
          <label htmlFor="" className='pb-3 pt-3 text-center text-black text-3xl'>Login Form</label>
          <input type="text" placeholder="Email" name='email' className='w-72 h-10 rounded text-black bg-white mb-5 pl-3'/>
          <input type="password" placeholder="Password" name='password' className='w-72 h-10 rounded text-black bg-white mb-2 pl-3'/>
          <Link href='/' className='text-center text-white hover:text-black mt-2'>Forgot Passowrd??</Link>
          <label htmlFor="remember" className='ml-1 text-white hover:text-black'  >
          <input type="checkbox" name="remember" id="remember" className='mr-2 mt-4' />
          Remember Me
          </label>
          <Button
          type = "submit"
          title='Log in'
          />
        </form>

      </div>

    </div>
    </>
  )
}

export default page
