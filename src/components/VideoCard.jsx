import React from "react";
import Avatar from "react-avatar";
import { BsThreeDotsVertical } from "react-icons/bs";

const VideoCart = ({item}) => {


  // Function to convert views into K and M format
  const count =item.statistics.viewCount;
  const viewConvert=(count)=>{
    if (count >= 1_000_000) {
      return (count / 1_000_000).toFixed(1) + 'M';
    } else if (count >= 1_000) {
      return (count / 1_000).toFixed(1) + 'K';
    } else {
      return count.toString();
    }
  }

  function TimeAgo (datestring){
    const now = new Date();
    const VideoDate= new Date(datestring);
    const diffInTime = now- VideoDate;

    const diffInDay = Math.floor(diffInTime/(1000*3600*24));

    if (diffInDay === 0) {
      return "Today";
    } else if (diffInDay === 1) {
      return "1 day ago";
    } else {
      return `${diffInDay} days ago`;
    }
  }

  const uploadDate = `${item.snippet.publishedAt}`;
  const uploadTime = TimeAgo(uploadDate);


  const FinalView=viewConvert(count);

  return (
    <div className="cursor-pointer">
      <div className="mt-2 my-4">
        {/* video thumbnail start here */}
        <div className="w-[22rem] h-56 ">
          <img
            className="  w-full h-full rounded-lg object-fill"
            src={item.snippet.thumbnails.medium.url}
            alt="Video Thumbnail"
            
          />
        </div>

        {/* video title,dp and 3 dot start here */}

        <div className="flex w-[22rem] pt-2 gap-x-2">
          {/* profile shown here */}
          <div>
            <Avatar
              src="https://imgs.search.brave.com/1FmtjnWK4l-_bQNovpqgP4nYDpT1Hy7CVgzmGq34Tkc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzQ2Lzg1Lzg0/LzM2MF9GXzY0Njg1/ODQ0Ml81SkZlNDZk/OVRveVhuNldYbE1I/YWl0TXVnVDdaek9l/QS5qcGc"
              size={30}
              className="cursor-pointer"
              round="30px"
            />
          </div>

          {/* Title shown here  */}
          <div className="font-semibold ">
            {item.snippet.localized.title}
          </div>

          {/* 3 dot shown here */}
          <div>
            <BsThreeDotsVertical size={22} />
          </div>
        </div>

        {/* subscriber button start here  */}

        <div className="text-xs text-gray-500 font-semibold pl-9">
          <p>{item.snippet.channelTitle}</p>
        </div>
        <div className="text-xs text-gray-500 font-semibold pl-9">
          <p>{FinalView} Views * {uploadTime}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCart;
