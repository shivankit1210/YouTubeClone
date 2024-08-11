import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";


const SidebarItem = [
    {
        id: 1,
        title: "Home",
        icon:  <AiOutlineHome size={20} />

    },
    {
        id: 2,
        title: "Shorts",
        icon:  <SiYoutubeshorts size={20} />

    },
    {
        id: 3,
        title: "Subscription",
        icon:  <MdOutlineSubscriptions size={20} />

    },
    {
        id: 1,
        title: "Home",
        icon:  <AiOutlineHome size={20} />

    },
    {
        id: 2,
        title: "Shorts",
        icon:  <SiYoutubeshorts size={20} />

    },
    {
        id: 3,
        title: "Subscription",
        icon:  <MdOutlineSubscriptions size={20} />

    },
    {
        id: 1,
        title: "Home",
        icon:  <AiOutlineHome size={20} />

    },
    {
        id: 2,
        title: "Shorts",
        icon:  <SiYoutubeshorts size={20} />

    },
    {
        id: 3,
        title: "Subscription",
        icon:  <MdOutlineSubscriptions size={20} />

    },
    {
        id: 1,
        title: "Home",
        icon:  <AiOutlineHome size={20} />

    },
    {
        id: 2,
        title: "Shorts",
        icon:  <SiYoutubeshorts size={20} />

    },
    {
        id: 3,
        title: "Subscription",
        icon:  <MdOutlineSubscriptions size={20} />

    },
    {
        id: 1,
        title: "Home",
        icon:  <AiOutlineHome size={20} />

    },
    {
        id: 2,
        title: "Shorts",
        icon:  <SiYoutubeshorts size={20} />

    },
    {
        id: 3,
        title: "Subscription",
        icon:  <MdOutlineSubscriptions size={20} />

    },
    {
        id: 1,
        title: "Home",
        icon:  <AiOutlineHome size={20} />

    },
    {
        id: 2,
        title: "Shorts",
        icon:  <SiYoutubeshorts size={20} />

    },
    {
        id: 3,
        title: "Subscription",
        icon:  <MdOutlineSubscriptions size={20} />

    },
    {
        id: 1,
        title: "Home",
        icon:  <AiOutlineHome size={20} />

    },
    {
        id: 2,
        title: "Shorts",
        icon:  <SiYoutubeshorts size={20} />

    },
    {
        id: 3,
        title: "Subscription",
        icon:  <MdOutlineSubscriptions size={20} />

    },

]



const Sidebar = () => {
  return (
    <div className="mt-4 relative h-[calc(100vh-5.625rem)] overflow-y-scroll overflow-x-hidden w-[15%]">
        {
         SidebarItem.map((item,index)=>{
            return(
                <div key={index} className="flex  w-[70%] gap-x-5 ml-3 my-3 items-center">
            {item.icon}
            <p className="">{item.title}</p>
          </div>
            )
         })
        }
      
    </div>
  );
};

export default Sidebar;
