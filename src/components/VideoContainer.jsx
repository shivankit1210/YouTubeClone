import React, { useEffect } from "react";
import axios from "axios";
import { YOUTUBE_VIDEO_API } from "../constants/youtube";
import VideoCard from "./VideoCard";

const VideoContainer = () => {

  const fetchVideo = async () => {
    try {
      const res = await axios.get(`${YOUTUBE_VIDEO_API}`);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchVideo();
  }, []);

  return (
    <div>
      <VideoCard/>
    </div>
  )
};

export default VideoContainer;
