import React from 'react';
// import './LeaderBoard.css';
import Link from 'next/link';
import { FaArrowCircleUp, FaRupeeSign } from 'react-icons/fa';
// import { useRouter } from 'next/router';



const card = (props: { name:string; time: string; price:string; complete:string }) => {

  return (
      <div className="border-t-2 w-full border-gray-400 border-opacity-20 flex justify-around align-middle items-center px-2 py-2 gap-2">
        <div className='w-1/4 hover:cursor-pointer'>{props.name}</div>
        <div className='w-1/4'>{props.time}</div>
        <div className='w-1/4'>{props.price}</div>
        <div className='w-1/4'>{props.complete}</div>
      </div>
  )
}
 
export default card;