import React from 'react';
// import './LeaderBoard.css';
import Link from 'next/link';
import { FaArrowCircleUp, FaRupeeSign } from 'react-icons/fa';
// import { useRouter } from 'next/router';



const card = (props: { name:string; price:string; amount:string }) => {

  return (
      <div className="border-t-2 w-full border-gray-400 border-opacity-20 flex justify-around align-middle items-center px-2 py-2 gap-2">
        <div className='w-1/3 hover:cursor-pointer'>{props.name}</div>
        <div className='w-1/3'>{props.price}</div>
        <div className='w-1/3'>{props.amount}</div>
      </div>
  )
}
 
export default card;