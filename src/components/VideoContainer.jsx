import React, { useEffect } from "react";
import axios from "axios";
import { YOUTUBE_VIDEO_API } from "../constants/youtube";
import { API_KEY } from "../constants/youtube";

const VideoContainer = () => {
  const fetchVideo = async () => {
    try {
      const res = await axios.get(YOUTUBE_VIDEO_API + API_KEY);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchVideo();
  }, []);

  return <div></div>;
};

export default VideoContainer;
