import React from 'react'
import { useNavigate } from 'react-router-dom'

function Settings() {
  const navigate = useNavigate();
  return (
    <div>
      <div className='flex flex-col gap-3'>
        <div>
            <h1 className='text-2xl '>Settings</h1>
        </div>
         <div  onClick={()=>{navigate("/about")}} className='w-full text-md border bg-gray-50 hover:bg-slate-200 transition-all duration-300 rounded-sm p-3'>
            <h1>About Us</h1>
        </div>
         <div  onClick={()=>{navigate("/profile/orders")}} className='w-full text-md border bg-gray-50 hover:bg-slate-200 transition-all duration-300 rounded-sm p-3'>
            <h1>Orders</h1>
        </div>
         <div  onClick={()=>{navigate("/reset-password")}} className='w-full text-md border bg-gray-50 hover:bg-slate-200 transition-all duration-300 rounded-sm p-3'>
            <h1>Reset Password</h1>
        </div>
         <div  onClick={()=>{navigate("/Chat")}} className='w-full text-md border bg-gray-50 hover:bg-slate-200 transition-all duration-300 rounded-sm p-3'>
            <h1>Chat</h1>
        </div>
          <div  onClick={()=>{navigate("/help-support")}} className='w-full text-md border bg-gray-50 hover:bg-slate-200 transition-all duration-300 rounded-sm p-3'>
            <h1>Help & Support</h1>
        </div>
         <div  onClick={()=>{navigate("/privacy")}} className='w-full text-md border bg-gray-50 hover:bg-slate-200 transition-all duration-300 rounded-sm p-3'>
            <h1>Privacy Policy</h1>
        </div>
      </div>
    </div>
  )
}

export default Settings
