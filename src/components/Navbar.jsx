import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosNotifications } from "react-icons/io";
import { IoVideocamOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

import Avatar from "react-avatar";
import { useDispatch } from "react-redux";
import { togglesidebar } from "../utils/appSlice";

const Navbar = () => {

  const dispatch =useDispatch();
  const toggleHandler = () =>{
  dispatch(togglesidebar());
  }

  return (
    <div className="flex place-content-center items-center justify-between p-3 fixed w-[100%] bg-white top-0 ">
      {/* Navbar Left side */}

      <div className="flex gap-x-4">
        <RxHamburgerMenu onClick={toggleHandler} size={24} className="cursor-pointer" />
        <img
          className="  h-6 w-30"
          src="https://imgs.search.brave.com/LMIgWnxdxD-4HQZT9LNLqoBmzJIh-N9Uwe51hi53Plk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/bG9nb3BuZy5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTY1NjUwMTI1/NXlvdXR1YmUtbG9n/by1wbmcucG5n"
          alt=""
        />
      </div>

      {/* Navbar center */}

      <div className="flex  w-[40%]  items-center ">
        <div className="w-[100%] border rounded-3xl border-gray-400 p-1 rounded-r-none">
        <input placeholder="Search" type="text" className="w-full " />

        </div>
        <button className="border rounded-3xl border-gray-400 p-1 rounded-l-none border-l-0 bg-gray-100 px-4"><CiSearch size={24} /></button>
      </div>

      {/* Navbar right side */}

      <div className="flex gap-x-8 items-center">
        <IoIosNotifications size={24}xx className="cursor-pointer" />
        <IoVideocamOutline size={24}xx className="cursor-pointer" />
        <Avatar
          src="https://imgs.search.brave.com/1FmtjnWK4l-_bQNovpqgP4nYDpT1Hy7CVgzmGq34Tkc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzQ2Lzg1Lzg0/LzM2MF9GXzY0Njg1/ODQ0Ml81SkZlNDZk/OVRveVhuNldYbE1I/YWl0TXVnVDdaek9l/QS5qcGc"
          size={30}xx className="cursor-pointer"
          round="30px"
        />
      </div>
    </div>
  );
};

export default Navbar;
