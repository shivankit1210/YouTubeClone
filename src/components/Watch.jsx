import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { API_KEY } from "../constants/youtube";
import Avatar from "react-avatar";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { PiShareFatThin } from "react-icons/pi";
import { TfiDownload } from "react-icons/tfi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdSend } from "react-icons/md";
import LiveChats from "./LiveChats";
import { useDispatch } from "react-redux";
import { setMessage } from "../utils/chatsSlice";

const Watch = () => {
  const [singleVideo, setSingleVideo] = useState(null);
  const [input,setInput]=useState("");

  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const [url,setUrl]=useState("");

    axios.get(`https://robohash.org/shu`)
    .then((response)=>{
    const url =
    })
    setUrl(url)
  

  const dispatch =useDispatch();

  const getSingleVideo = async () => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
      );
      setSingleVideo(res?.data?.items[0]);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleVideo();
  }, []);

  const sendMessage= ()=>{
        dispatch(setMessage({ 
      name:"shivankit agarwal",
      message:input,
    }))
    setInput("");
  }

  return (
    <div className="ml-4 flex">
      <div className=" w-[47rem] ">
        <iframe
          width="750"
          height="400"
          src={`https://www.youtube.com/embed/${videoId}?&autoplay=1`}
          title="YouTube video player"
          allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <h1 className="font-bold text-lg mt-2 w-[100%] ">
          {singleVideo?.snippet?.title}
        </h1>

        <div className="flex items-center justify-between w-[100%] ">
          <div className="flex  items-center w-[40%] ">
            <div className="flex place-content-start items-center mt-2">
              <Avatar
                src="https://imgs.search.brave.com/1FmtjnWK4l-_bQNovpqgP4nYDpT1Hy7CVgzmGq34Tkc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzQ2Lzg1Lzg0/LzM2MF9GXzY0Njg1/ODQ0Ml81SkZlNDZk/OVRveVhuNldYbE1I/YWl0TXVnVDdaek9l/QS5qcGc"
                size={38}
                className="cursor-pointer"
                round="30px"
              />
              <div className="flex flex-col ml-2">
                <h1 className="font-semibold text-black text-sm">
                  {singleVideo?.snippet?.channelTitle}
                </h1>
                {/* <p className="text-xs text-gray-500">565k subscriber</p> */}
              </div>
            </div>
            <button className="px-4 ml-6 h-8  py-1 font-semibold bg-black text-sm text-white rounded-full">
              Subscribe
            </button>
          </div>

          {/* like share and download button start here */}
          <div className="flex justify-between items-center w-[40%]">
            <div className="flex w-[27%] justify-between px-3 py-1 rounded-full bg-gray-200 ">
              <BiLike className=" cursor-pointer " size={22} />
              <BiDislike className="cursor-pointer" size={22} />
            </div>
            <div className=" cursor-pointer flex items-center w-[27%] justify-between px-3 py-1 rounded-full bg-gray-200 text-sm">
              <PiShareFatThin size={18} />
              Share
            </div>
            <div className="cursor-pointer flex items-center w-[35%] justify-between px-3 py-1 rounded-full bg-gray-200 text-sm">
              <TfiDownload size={14} />
              Download
            </div>
          </div>
        </div>
      </div>

      <div className="border border-gray-200 w-80 h-[80vh]  ml-10 p-2 rounded-lg">
        <div className="">
          <div className="flex place-content-center items-center justify-between ">
            <h1>Top Chats</h1>
            <BsThreeDotsVertical />
          </div>

          <div className="overflow-y-auto h-[26rem] flex flex-col-reverse">
            <LiveChats/>
          </div>

          <div className="flex   border-t-2  ">
            <div className="flex items-center justify-between w-[100%] mt-2">
            <Avatar
              src="https://imgs.search.brave.com/1FmtjnWK4l-_bQNovpqgP4nYDpT1Hy7CVgzmGq34Tkc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzQ2Lzg1Lzg0/LzM2MF9GXzY0Njg1/ODQ0Ml81SkZlNDZk/OVRveVhuNldYbE1I/YWl0TXVnVDdaek9l/QS5qcGc"
              size={30}
              className="cursor-pointer"
              round="30px"
            />
            <input
            value={input}
            onChange={(e)=>setInput(e.target.value)}
              className="  border-b-2 w-52  border-gray-200  outline-none"
              type="text"
              placeholder="Send Chat...."
            />
            <MdSend
            onClick={sendMessage}
              className="bg-gray-300 cursor-pointer p-1 rounded-full"
              size={26}
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;
