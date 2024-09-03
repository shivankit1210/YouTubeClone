import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCategory } from "../utils/appSlice";

const buttonList = [
  {
    id: 1,
    title: "All",
  },
  {
    id: 2,
    title: "ReactJs",
  },
  {
    id: 3,
    title: "Firebase",
  },
  {
    id: 4,
    title: "Tailwind CSS",
  },
  {
    id: 5,
    title: "Front-end",
  },
  {
    id: 6,
    title: "ExpressJs",
  },
  {
    id: 7,
    title: "Bootstrap",
  },
  {
    id: 8,
    title: "NodeJs",
  },
  {
    id: 9,
    title: "MongoDB",
  },
  {
    id: 10,
    title: "Web Development",
  },
  {
    id: 11,
    title: "Kedarnath",
  },
  {
    id: 12,
    title: "Vlog",
  },
  {
    id: 13,
    title: "ESports",
  },
  {
    id: 14,
    title: "Movies",
  },
  {
    id: 15,
    title: "Songs",
  },
  {
    id: 16,
    title: "Cartoons",
  },
  {
    id: 17,
    title: "Bhajan",
  },

];

const ButtonList = () => {
const [active,setActive]=useState("All");

const dispatch= useDispatch();

const videoByTag =(tag) =>{
if(active!=tag){
  dispatch(setCategory(tag))
  setActive(tag);
}
}

  return (
    <div className="flex w-full overflow-x-scroll no-scrollbar ">
      {buttonList.map((buttonName) => {
        return (
         <div>
            <button onClick={()=>{videoByTag(buttonName)}}
            key={buttonList.id}
            className={`${active==buttonName ? "bg-black text-white":"bg-gray-200 text-gray-900"}   rounded-lg px-1 py-1 m-1 text-sm font-semibold`}
          >
            <span className="whitespace-nowrap">{buttonName.title}</span>
            
          </button>
         </div>
          
        );
      })}
    </div>
  );
};

export default ButtonList;
