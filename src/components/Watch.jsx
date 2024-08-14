import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { API_KEY } from "../constants/youtube";
import Avatar from "react-avatar";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { PiShareFatThin } from "react-icons/pi";
import { TfiDownload } from "react-icons/tfi";




const Watch = () => {
  const [singleVideo, setSingleVideo] = useState(null);

  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

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

  console.log(singleVideo);

  return (
    <div className="ml-4">
      <div className=" w-[47rem] ">
        <iframe
          

          width="750"
          height="400"
          src={`https://www.youtube.com/embed/${videoId}?&autoplay=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <h1 className="font-bold text-lg mt-2 w-[100%] ">
          {singleVideo?.snippet?.title}
        </h1>

        <div className="flex items-center justify-between w-[100%] ">
          <div className="flex  items-center ">
            <div className="flex place-content-start items-center mt-2">
              <Avatar
                src="https://imgs.search.brave.com/1FmtjnWK4l-_bQNovpqgP4nYDpT1Hy7CVgzmGq34Tkc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzQ2Lzg1Lzg0/LzM2MF9GXzY0Njg1/ODQ0Ml81SkZlNDZk/OVRveVhuNldYbE1I/YWl0TXVnVDdaek9l/QS5qcGc"
                size={38}
                className="cursor-pointer"
                round="30px"
              />
              <div className="flex flex-col ml-2">
                <h1 className="font-semibold text-black">{singleVideo?.snippet?.channelTitle}</h1>
                <p className="text-xs text-gray-500">565k subscriber</p>
              </div>
            </div>
            <button className="px-4 ml-6 h-8  py-1 font-semibold bg-black text-white rounded-full">
              Subscribe
            </button>
          </div>

          {/* like share and download button start here */}
          <div className="flex justify-between items-center w-[50%]">
           <div className="flex w-[30%] justify-between px-3 py-1 rounded-full bg-gray-200 ">
           <BiLike className=" " size={25} />
           <BiDislike className="" size={25} />


           </div>
           <div className=" flex w-[30%] justify-between px-3 py-1 rounded-full bg-gray-200">
            <PiShareFatThin size={26}/>Share
           </div>
           <div className="flex w-[35%] justify-between px-3 py-1 rounded-full bg-gray-200">
            <TfiDownload size={21}/>Download
           </div>
          </div>

        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Watch;
