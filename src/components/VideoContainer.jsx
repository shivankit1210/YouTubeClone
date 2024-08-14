import React, { useEffect, useState } from "react";
import axios from "axios";
import { YOUTUBE_VIDEO_API } from "../constants/youtube";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [video, setVideo] = useState([]);

  const fetchVideo = async () => {
    try {
      const res = await axios.get(`${YOUTUBE_VIDEO_API}`);
      console.log(res?.data?.items);
      setVideo(res?.data?.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchVideo();
  }, []);

  return (
    <div className="grid grid-cols-3 ">
      {video.map((item) => {
        return( 
          <Link to={`/watch?v=${item.id}`} key={item.id}>
          <VideoCard  item={item} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
