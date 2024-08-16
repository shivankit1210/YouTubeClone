import React from "react";
import Avatar from "react-avatar";

const ChatMessage = ({item}) => {
  return (
    <div className="flex items-center">
      <div className="flex">
        <Avatar
          src={
            "https://imgs.search.brave.com/tDxcO_6xSWtpwvBw2BIuSR268kyHOPrRSVU5jV7zamQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90cmlj/a3NjaXR5LmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNy8w/OS9BdHRpdHVkZS1E/UC5qcGc"
          }
          size={30}
          className="cursor-pointer"
          round="30px"
        />
      </div>

      <div className="flex text-sm p-2">
        <h1 className="font-semibold mr-2">{item.name}</h1>
        <p>{item.message}r</p>
      </div>
    </div>
  );
};

export default ChatMessage;
