"use client";
import React from "react";
import { useState } from 'react';
import { FaBell, FaCommentDots, FaDropbox, FaHamburger, FaPlus, FaRupeeSign, FaSearch, FaUser } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import Card from '@/components/cards/card1';
import Card2 from '@/components/cards/card2';
import Card3 from '@/components/cards/card3';

export default function leaderBoard() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const [isOpen2, setIsOpen2] = useState(false);

    const toggleDropdown2 = () => {
        setIsOpen2(!isOpen2);
    };

    return (
        <main className="flex flex-col w-full">
            <div>
                *This is just a static page for assignment purpose! Open in laptop for best experience.*<br/>
            </div>
            <div className="flex justify-between align-middle items-center w-full mb-6 mt-4">
                <div className="flex gap-4 align-middle items-center">
                    <img src="./menu.png" alt="menu" className="h-10 w-10"/>
                    <p className="font-bold text-4xl ">DashBoard</p>
                </div>
                <div className="flex gap-4 text-xl align-middle items-center">
                    <FaBell />
                    <FaMessage />
                    <div className="rounded-lg px-2 flex gap-2 align-middle items-center">
                        <FaUser />
                        <p>
                            Hello, <b>Divyansh</b>
                        </p>
                    </div>
                </div>
            </div>
            <main className="w-[97%]">
                <div className="flex justify-between align-middle items-center mb-6">
                    <div className="border-1 border-solid border-black bg-gray-200 flex px-2 py-2 rounded-xl gap-3 items-center align-middle  hover:bg-gray-300 ">
                        <button className="p-1"><FaSearch className="text-white" /></button>
                        <input type="text" placeholder="Search here..." className="bg-inherit outline-none border-none" />
                    </div>
                    <button className=" text-white flex items-center gap-2 border-1 bg-violet-500 hover:bg-violet-600 py-2 px-4">
                        <div><FaPlus /></div>
                        Add new stocks
                    </button>
                </div>
                <div className="flex gap-4 p-1 align-middle justify-center hover:cursor-pointer mb-6">
                    <Card id="xxxx" service="BANK NIFTY" />
                    <Card id="xxxx" service="NIFTY50" />
                    <Card id="xxxx" service="FINNIFTY" />
                    <Card id="xxxx" service="SENSEX" />
                </div>
                <div className="flex p-4 gap-6">
                    <div className="flex flex-col border-2 shadow-lg shadow-gray-400 w-1/2 p-4">
                        <div className="flex justify-between items-center w-full">
                            <div className="flex flex-col justify-between">
                                <p className="text-xl font-bold">Market Overview</p>
                                <p className="text-xs opacity-50">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <div className="relative inline-block text-left">
                                <div>
                                    <button
                                        type="button"
                                        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-2 py-1 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        onClick={toggleDropdown}
                                    >
                                        March 2020
                                        <svg
                                            className="-mr-1 ml-2 h-5 w-5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </div>

                                {isOpen && (
                                    <div
                                        className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                        role="menu"
                                        aria-orientation="vertical"
                                        aria-labelledby="menu-button"
                                    >
                                        <div className="py-1 flex flex-col" role="none">
                                            <a href="/">April 2020</a>
                                            <a href="/">May 2020</a>
                                            <a href="/">June 2020</a>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                            <div>

                            </div>
                            <div className="flex items-center gap-2">
                                <p className="opacity-60 text-sm">Average</p> <p className="text-lg font-semibold">45%</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center p-4">
                            Graph will come here
                        </div>
                    </div>
                    <div className="border-2 flex flex-col items-center p-4 w-1/2 shadow-lg shadow-gray-400">
                        <div className="flex justify-between items-center w-full">
                            <div className="flex flex-col justify-between">
                                <p className="text-lg font-bold">Card</p>
                                <p className="text-xs opacity-50">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <div className="relative inline-block text-left">
                                <div>
                                    <button
                                        type="button"
                                        className="inline-flex items-center gap-1 justify-center w-full rounded-md border border-gray-300 shadow-sm px-2 py-1 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        onClick={toggleDropdown2}
                                    >
                                        Settings
                                        <FaDropbox />
                                    </button>
                                </div>

                                {isOpen2 && (
                                    <div
                                        className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                        role="menu"
                                        aria-orientation="vertical"
                                        aria-labelledby="menu-button"
                                    >
                                        <div className="py-1 flex flex-col" role="none">
                                            <a href="/">Lorem</a>
                                            <a href="/">Ipsum</a>
                                            <a href="/">Donor</a>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="flex flex-col mt-6 w-1/2 align-middle rounded-lg p-4 bg-pink-500 text-white shadow-md shadow-pink-400">
                            <div className="flex justify-between items-center w-full">
                                <div className="text-lg font-semibold">
                                    Visa
                                </div>
                                <div className="text-sm">
                                    **** **** **** 1234
                                </div>
                            </div>
                            <div className="text-sm mt-2">
                                Main Balance :
                            </div>
                            <div className="flex items-center text-3xl mt-2">
                                <FaRupeeSign />1,23,456
                            </div>
                            <div className="flex text-sm mt-4 gap-4 mb-2">
                                <div>
                                    <div className="opacity-50">VALID THRU.</div>
                                    <div className="opacity-90">08/12</div>
                                </div>
                                <div >
                                    <div className="opacity-50">CARD HOLDER</div>
                                    <div className="opacity-90">DIVYANSH</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-around w-full mt-4">
                            <div className="flex items-center">Limit: <FaRupeeSign />80,000</div>
                            <a href="/" className="text-blue-600 underline hover:text-blue-800">View details</a>
                        </div>
                    </div>
                </div>
                <div className="flex p-2 gap-4">
                    <div className="w-1/2 shadow-lg shadow-gray-400 p-4">
                        <div className="flex justify-between items-center mb-4">
                            <div>
                                <div className="font-bold text-xl">
                                    Recent trading activities
                                </div>
                                <p className="opacity-50 text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <div>
                                <button className="py-2 px-4 bg-violet-600">
                                    Weekly
                                </button>
                                <button className="py-2 px-4 bg-gray-200">
                                    Monthly
                                </button>
                                <button className="py-2 px-4 bg-gray-200">
                                    Yearly
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col border-b-2 border-gray-400 border-opacity-20 ">
                            <Card2 name="Zomato" time="12.00.00" price="+4.44" complete="Completed" />
                            <Card2 name="ABC" time="14.50.00" price="+128.34" complete="Completed" />
                            <Card2 name="PNB" time="08.39.20" price="+1.34" complete="Pending" />
                        </div>
                    </div>
                    <div className="w-1/2 flex gap-2">
                        <div className="w-1/2 shadow-lg shadow-gray-400 p-4">
                            <div className="flex justify-between items-center mb-4">
                                <div>
                                    <div className="font-bold text-xl">
                                        Sell Order
                                    </div>
                                    <p className="opacity-50 text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                            <div className="flex flex-col border-b-2 border-gray-400 border-opacity-20 ">
                                <Card3 name="Stock" price="Price" amount="Total" />
                                <Card3 name="Zomato" price="100" amount="2000" />
                                <Card3 name="Zomato" price="100" amount="2000" />
                                <Card3 name="Zomato" price="100" amount="2000" />
                            </div>

                        </div>
                        <div className="w-1/2 shadow-lg shadow-gray-400 p-4">
                            <div className="flex justify-between items-center mb-4">
                                <div>
                                    <div className="font-bold text-xl">
                                        Buy Orders
                                    </div>
                                    <p className="opacity-50 text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                            <div className="flex flex-col border-b-2 border-gray-400 border-opacity-20 ">
                                <Card3 name="Stock" price="Price" amount="Total" />
                                <Card3 name="Zomato" price="100" amount="2000" />
                                <Card3 name="Zomato" price="100" amount="2000" />
                                <Card3 name="Zomato" price="100" amount="2000" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </main>
    )
};