import React from 'react';
import './LeaderBoard.css';
import Link from 'next/link';
import { FaArrowCircleUp, FaRupeeSign } from 'react-icons/fa';
// import { useRouter } from 'next/router';



const card = (props: { id:string; service: string }) => {

  return (
      <div className="card flex justify-between align-middle items-center card border-2 rounded-lg shadow-md shadow-gray-400 w-[23%] px-2 py-4">
        <div className='flex flex-col'>
            <div className='flex justify-between align-middle items-center text-lg '>
                <FaRupeeSign/>
                {props.id}
            </div>
            <div className='flex align-middle items-center gap-1 text-xs'>
                4%
                <FaArrowCircleUp/>
            </div>
        </div>
        <div className='text-lg'>
            {props.service}
        </div>
      </div>
  )
}
 
export default card;