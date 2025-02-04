import React from "react";
import { MdFastfood } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { RiShoppingCart2Fill } from "react-icons/ri";

function Nav() {
    return (
        <div className="w-full h-24 flex justify-between items-center px-8">
            <div className="w-[60px] h-[60px] bg-slate-50 flex justify-center items-center text-3xl text-green-600 rounded-lg shadow-xl">
                <MdFastfood />
            </div>
            <form className="w-[80%] h-[60px] bg-white flex items-center gap-5 px-4 rounded-lg shadow-xl">
                <CiSearch className="text-green-500 font-bold text-xl " />
                <input className="w-[100%] outline-none" type="text" placeholder="Search Items. . ." />
            </form>
            <div className="w-[60px] h-[60px] bg-slate-50 flex justify-center items-center  rounded-lg shadow-xl relative">
                <RiShoppingCart2Fill className="text-3xl text-green-600"/>
                <span className="absolute top-0 right-2 text-green-600  font-medium">0</span>
            </div>
        </div>
    )
}

export default Nav