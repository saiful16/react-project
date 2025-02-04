import React from "react";
import Nav from "../components/Nav";
import Categories from "../../categories";

function Home() {
  return (
    <div className="w-full bg-slate-200 min-h-[100vh] ">
      <Nav />
      <div className="flex flex-wrap justify-evenly items-center gap-5 w-full">
        {Categories.map((item) => {
          return <div className="w-[140px] h-[150px] bg-slate-50 flex flex-col items-center gap-5  justify-center
          text-xl font-bold
           text-gray-600 rounded-lg shadow-xl hover:bg-green-200
           cursor-pointer transition-all duration-300 ">
            {item.icon}
            {item.name}
          </div>
        }

        )}
      </div>
    </div>
  )
}

export default Home