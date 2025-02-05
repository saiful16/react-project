import React from "react";
import image1 from "../assets/image1.avif";
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";



function Card({ name, image, id, price, type }) {
    return (
        <div className="w-[300px] h-[350px] bg-slate-50 p-3 rounded-xl space-y-2">
            <div className="w-full rounded-xl h-[60%] overflow-hidden "><img className="object-cover rounded-xl" src={image} alt="" /></div>

            <div className="text-xl font-bold text-green-500">
                {name}
            </div>

            <div className="flex justify-between text-green-500 font-medium">
                <div>${price}</div>
                <div className="flex justify-center items-center gap-2"> {type === "veg" ? <LuLeafyGreen /> : <GiChickenOven />
                }<span>{type}</span></div>
            </div>
            <div className="text-center p-2 bg-green-500 rounded-xl hover:bg-green-200 transition-all"><button className="btn font-medium text-gray-900">Add to Dish</button></div>
        </div>
    )
}

export default Card;