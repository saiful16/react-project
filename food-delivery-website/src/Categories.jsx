import { TiThSmallOutline } from "react-icons/ti";
import { MdFreeBreakfast } from "react-icons/md";
import { TbSoupFilled } from "react-icons/tb";
import { FaPastafarianism } from "react-icons/fa";
import { MdFoodBank } from "react-icons/md";
import { FaPizzaSlice } from "react-icons/fa";
import { GiHamburger } from "react-icons/gi";






export const Categories=[
    {
        id:1,
        name: "All",
        icon: <TiThSmallOutline className="h-14 w-14 text-green-500"/>

    },

    {
        id:2,
        name: "Breakfast",
        icon: <MdFreeBreakfast className="h-14 w-14 text-green-500" />

    },

    {
        id:3,
        name: "Soups",
        icon: <TbSoupFilled  className="h-14 w-14 text-green-500"/>


    },

    {
        id:4,
        name: "Pasta",
        icon: <FaPastafarianism className="h-14 w-14 text-green-500" />


    },

    {
        id:5,
        name: "Main_course",
        icon: <MdFoodBank className="h-14 w-14 text-green-500"/>

    },

    {
        id:6,
        name: "Pizza",
        icon: <FaPizzaSlice className="h-14 w-14 text-green-500"/>

    },

    {
        id:7,
        name: "Burger",
        icon: <GiHamburger className="h-14 w-14 text-green-500"/>

    }
]

export default Categories