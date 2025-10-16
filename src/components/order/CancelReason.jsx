import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const CancelReason = () => {
    const [Change, setChange] = useState('')
    const [submit, setSubmit] = useState(false)
      const navigate = useNavigate();
    const CancelReason = ['I want to change the service', 'Don’t want this service', 'Price dropped', 'I ordered wrong service', 'Other']
   
  useEffect(() => {
    if (submit) {
      navigate('/orderCancelled'); 
    }
  }, [submit, navigate]);


    const handleChange=(e)=>{
        setChange(e.target.value)
    }

    return (
        <>
            <div className="mx-auto w-[70vw] h-fit my-11 flex flex-col gap-4">
                <div className="reason flex flex-col gap-4">
                    <h1 className="text-[1.6rem] font-[500] mb-2 tracking-wide">Choose a Reason</h1>
                    {CancelReason.map((items, index) => (
                        <label key={index} htmlFor={items} className="flex gap-2 items-center justify-start w-fit">
                            <input type="checkbox" id={items} className="size-5" />
                            <span className="text-lg font-[600]">{items}</span>
                        </label>
                    ))}
                </div>
                <textarea onChange={handleChange} type="text" value={Change} className="h-[20vh] w-full my-4 border-[2px] placeholder:text-[#8d8d8c] placeholder:text-lg px-4 py-2" placeholder='Write a Reason'/>
            <div className="w-full flex justify-center items-center my-4">
            <button onClick={()=>setSubmit(true)} className="w-[200px] text-center py-4 bg-[#44bf69] text-white font-[500] rounded-lg">Submit</button>
            </div>
            </div>
        </>
    )
}

export default CancelReason