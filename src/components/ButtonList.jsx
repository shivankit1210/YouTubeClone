import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCategory } from "../utils/appSlice";

const buttonList = ["All","Coding","vlogs","esports","Adventure","Treking","Javasript","Leetcode","Competitive Programmming","DSA","javascript","Songs","TailwindCSS","japan Life","Games","News","English songs","Viral Songs"];

const ButtonList = () => {
const [active,setActive]=useState("All");

const dispatch= useDispatch();

const videoByTag =(tag) =>{
if(active!==tag){
  dispatch(setCategory(tag));
  setActive(tag);
}
}

  return (
    <div className="flex w-full overflow-x-scroll no-scrollbar ">
      {buttonList.map((buttonName,index) => {
        return (
         <div key={index}>
            <button onClick={()=>{videoByTag(buttonName)}}
            
            className={`${active==buttonName ? "bg-black text-white":"bg-gray-200 text-gray-900"}   rounded-lg px-1 py-1 m-1 text-sm font-semibold`}
          >
            <span className="whitespace-nowrap">{buttonName}</span>
            
          </button>
         </div>
          
        );
      })}
    </div>
  );
};

export default ButtonList;
