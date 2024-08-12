import React from "react";
import Avatar from "react-avatar";
import { BsThreeDotsVertical } from "react-icons/bs";



const VideoCart = () => {
  return (
    <div className="mt-2">
      {/* video thumbnail start here */}
      <div className="w-80 h-56 border-2 border-gray-500 rounded-lg">
        <img className=" bg-red-500 object-none" src="https://imgs.search.brave.com/yeOytXLZqHVJrVJvBZWBeSQc1Ki4bVKtKtUgzEoOdjs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk0yTTBNRFU1/TnpndE5UQXhOUzAw/TnpoaExUbGlNakF0/WTJJNFpUQTVZMlUx/WWpKaFhrRXlYa0Zx/Y0dkZVFYVnlOVGs1/T0RnNE5EQUAuanBn" alt="" />
      </div>

      {/* video title,dp and 3 dot start here */}

      <div className="flex w-80 pt-2 gap-x-2">
        {/* profile shown here */}
        <div>
        <Avatar
        //   src="https://drive.google.com/file/d/1BsOSAOD7S7J9bWuT65Z0oKjdNIK5Xk1r/view?usp=drive_link"
          src="https://imgs.search.brave.com/1FmtjnWK4l-_bQNovpqgP4nYDpT1Hy7CVgzmGq34Tkc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzQ2Lzg1Lzg0/LzM2MF9GXzY0Njg1/ODQ0Ml81SkZlNDZk/OVRveVhuNldYbE1I/YWl0TXVnVDdaek9l/QS5qcGc"
          size={30}xx className="cursor-pointer"
          round="30px"
        />
        </div>

        {/* Title shown here  */}
        <div>
          I am shivankit Agarwal. This is designed by Me. 
        </div>

        {/* 3 dot shown here */}
        <div>
        <BsThreeDotsVertical size={24} />

        </div>
      </div>

      {/* subscriber button start here  */}

      <div></div>
    </div>
  );
};

export default VideoCart;
