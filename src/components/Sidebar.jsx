import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { useSelector } from "react-redux";

const SidebarItem = [
  {
    id: 1,
    title: "Home",
    icon: <AiOutlineHome size={20} />,
  },
  {
    id: 2,
    title: "Shorts",
    icon: <SiYoutubeshorts size={20} />,
  },
  {
    id: 3,
    title: "Subscription",
    icon: <MdOutlineSubscriptions size={20} />,
  },
  {
    id: 1,
    title: "Home",
    icon: <AiOutlineHome size={20} />,
  },
  {
    id: 2,
    title: "Shorts",
    icon: <SiYoutubeshorts size={20} />,
  },
  {
    id: 3,
    title: "Subscription",
    icon: <MdOutlineSubscriptions size={20} />,
  },
  {
    id: 1,
    title: "Home",
    icon: <AiOutlineHome size={20} />,
  },
  {
    id: 2,
    title: "Shorts",
    icon: <SiYoutubeshorts size={20} />,
  },
  {
    id: 3,
    title: "Subscription",
    icon: <MdOutlineSubscriptions size={20} />,
  },
  {
    id: 1,
    title: "Home",
    icon: <AiOutlineHome size={20} />,
  },
  {
    id: 2,
    title: "Shorts",
    icon: <SiYoutubeshorts size={20} />,
  },
  {
    id: 3,
    title: "Subscription",
    icon: <MdOutlineSubscriptions size={20} />,
  },
  {
    id: 1,
    title: "Home",
    icon: <AiOutlineHome size={20} />,
  },
  {
    id: 2,
    title: "Shorts",
    icon: <SiYoutubeshorts size={20} />,
  },
  {
    id: 3,
    title: "Subscription",
    icon: <MdOutlineSubscriptions size={20} />,
  },
  {
    id: 1,
    title: "Home",
    icon: <AiOutlineHome size={20} />,
  },
  {
    id: 2,
    title: "Shorts",
    icon: <SiYoutubeshorts size={20} />,
  },
  {
    id: 3,
    title: "Subscription",
    icon: <MdOutlineSubscriptions size={20} />,
  },
  {
    id: 1,
    title: "Home",
    icon: <AiOutlineHome size={20} />,
  },
  {
    id: 2,
    title: "Shorts",
    icon: <SiYoutubeshorts size={20} />,
  },
  {
    id: 3,
    title: "Subscription",
    icon: <MdOutlineSubscriptions size={20} />,
  },
];

const Sidebar = () => {
  const open = useSelector((store) => store.app.open);
  console.log(open);

  return (
    <div className={` left-0 ${open?"w-[15%]":"w-[5%]"} h-[calc(100vh-5.625rem)] pr-5 overflow-y-scroll overflow-x-hidden w-[15%]`}>
      {SidebarItem.map((item, index) => {
        return (
          <div
            key={index}
            className="flex   ml-3 my-3 items-center"
          >
            {item.icon}
            <p className={` ml-5 ${open ? "" : 'hidden'}`}>{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
