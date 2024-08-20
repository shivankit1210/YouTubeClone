import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setMessage } from "../utils/chatsSlice";
import { generateRandomMessage } from "../utils/helper";
import { generateRandomName } from "../utils/helper";

const LiveChats = () => {
  const message = useSelector((store) => store.chat.message);
  const dispatch=useDispatch();

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(setMessage({ 
        name:generateRandomName(),
        message:generateRandomMessage(16),
      })) 
    }, 1000)

    return(()=>{
    clearInterval(timer)
    })
  }, []);

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
