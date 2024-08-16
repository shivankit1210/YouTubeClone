import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setMessage } from "../utils/chatsSlice";

const LiveChats = () => {
  const message = useSelector((store) => store.chat.message);
  const dispatch=useDispatch();

  // useEffect(() => {
  //   setInterval(() => {
  //     dispatch(setMessage({ 
  //       name:"shivankit agarwal",
  //       message:"heyyy",
  //     }))
  //   }, 1000);
  // }, []);

  return (
    <div className="px-2 py-4">
      <div>
        {message.map((item, index) => {
          return <ChatMessage key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default LiveChats;
