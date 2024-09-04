import React, { useEffect, useState } from "react";
import Avatar from "react-avatar";
import { BsThreeDotsVertical } from "react-icons/bs";
import { API_KEY } from "../constants/youtube";
import axios from "axios";

const VideoCart = ({ item }) => {
  const [ytIcon, setYtIcon] = useState("");

  const getYoutubeChannel = async () => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${item.snippet.channelId}&key=${API_KEY}` );
      setYtIcon(res?.data?.items[0]?.snippet?.thumbnails?.high?.url);
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getYoutubeChannel();
  }, []);

  // Function to convert views into K and M format
  const count = item?.statistics?.viewCount ||0 ;
  const viewConvert = (count) => {
    if (count >= 1_000_000) {
      return (count / 1_000_000).toFixed(1) + "M";
    } else if (count >= 1_000) {
      return (count / 1_000).toFixed(1) + "K";
    } else {
      return count.toString();
    }
  };

  function TimeAgo(datestring) {
    const now = new Date();
    const VideoDate = new Date(datestring);
    const diffInTime = now - VideoDate;

    const diffInDay = Math.floor(diffInTime / (1000 * 3600 * 24));

    if (diffInDay === 0) {
      return "Today";
    } else if (diffInDay === 1) {
      return "1 day ago";
    } else if(diffInDay<=30) {
      return `${diffInDay} days ago`;
    }
    else if(diffInDay>32 && diffInDay<=365){
      return `${Math.floor(diffInDay/30)} months ago`;
    }
    else
    return `${Math.floor(diffInDay/365)} Year ago`
  }

  const uploadDate = `${item?.snippet?.publishedAt}`;
  const uploadTime = TimeAgo(uploadDate);

  const FinalView = viewConvert(count);

  return (
    <div className="cursor-pointer">
      <div className="mt-2 my-4">
        {/* video thumbnail start here */}
        <div className="w-[22rem] h-56 ">
          <img
            className="  w-full h-full rounded-lg object-fill"
            src={item?.snippet?.thumbnails?.medium?.url}
            alt="Video Thumbnail"
          />
        </div>

        {/* video title,dp and 3 dot start here */}

        <div className="flex w-[22rem] pt-2 gap-x-2">
          {/* profile shown here */}
          <div>
            <Avatar
              src={ytIcon}
              size={30}
              className="cursor-pointer"
              round="30px"
            />
          </div>

          {/* Title shown here  */}
          <div className="font-semibold ">{item?.snippet?.title}</div>

          {/* 3 dot shown here */}
          <div>
            <BsThreeDotsVertical size={22} />
          </div>
        </div>

        {/* subscriber button start here  */}
        <div className="">
          <div className="text-xs text-gray-500 font-semibold pl-9">
            <p>{item?.snippet?.channelTitle}</p>
          </div>
          <div className="text-xs text-gray-500 font-semibold pl-9">
            <p>
              {FinalView} Views ({uploadTime})
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCart;
