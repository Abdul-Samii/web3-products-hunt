import { useState } from 'react';
import { Link } from 'react-router-dom';

const Auth = () => {
  const [authType, setAuthType] = useState('signup')
  const handleAuthType = (type: string) => setAuthType(type);
  const isSignup = () => authType === 'signup';

  return (
    <div className='flex justify-center h-full items-center'>
      <div className={`md:shadow-lg md:border-[1px] md:bg-white flex flex-col md:w-[32rem] p-12 space-y-4 ${isSignup() ? 'md:h-[45rem]' : 'md:h-[40rem]'}`}>
        <div className='flex space-x-4 mb-8'>
          <h2 onClick={() => handleAuthType('signup')} className={`text-xl cursor-pointer ${isSignup() && 'text-primarydark border-b-2 border-primarydark'}`}>Sign Up</h2>
          <h2 onClick={() => handleAuthType('login')} className={`text-xl cursor-pointer ${!isSignup() && 'text-primarydark border-b-2 border-primarydark'}`}>Login</h2>
        </div>
        { isSignup() && 
          <div>
            <p className='text-sm'>Your Full name</p>
            <input placeholder='Enter you full name' type='email' className='outline-none border-[1px] p-2 rounded-md w-full text-gray-500' />
          </div>
        }
        <div>
          <p className='text-sm'>Your email</p>
          <input placeholder='Enter you email' type='email' className='outline-none border-[1px] p-2 rounded-md w-full text-gray-500' />
        </div>
        <div>
          <label className='text-sm'>Password</label>
          <input id='password' type='password' name='password' placeholder='Enter you password' className='outline-none border-[1px] p-2 rounded-md w-full text-gray-500' />
          { !isSignup() && <Link to='forgot-password' className='justify-end text-xs flex text-gray-500 p-1'>Forgot password?</Link> }
        </div>
        { isSignup() &&
          <div>
            <label className='text-sm'>Confirm Password</label>
            <input id='password' type='password' name='password' placeholder='Enter you password' className='outline-none border-[1px] p-2 rounded-md w-full text-gray-500' />
          </div>
        }
        <div className='space-y-6'>
          <button className='w-full mt-8 p-2 bg-primarydark text-white rounded-md'>{isSignup() ? 'Sign up' : 'Login'}</button>
          <div className='flex relative w-full'>
            <div className='border-b-[1px] absolute w-[45%] border-black right-0 bottom-[40%]' />
            <p className='mt-1 m-auto'>or</p>
            <div className='border-b-[1px] absolute w-[45%] border-black left-0 bottom-[40%]' />
          </div>
          <button className='w-full p-2 border-[0.1px] text-primarydark border-primarydark rounded-md'>{isSignup() ? 'Login' : 'Sign up'}</button>
        </div>
      </div>
    </div>
  )
}
export default Auth
