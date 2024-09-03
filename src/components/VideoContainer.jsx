import React, { useEffect, useState } from "react";
import axios from "axios";
import { YOUTUBE_VIDEO_API } from "../constants/youtube";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { API_KEY } from "../constants/youtube";
import { useDispatch } from "react-redux";
import { setHomeVideo } from "../utils/appSlice";

const VideoContainer = () => {
  const [video, setVideo] = useState([]);

  const dispatch= useDispatch();

  const fetchVideo = async () => {
    try {
      const res = await axios.get(`${YOUTUBE_VIDEO_API}`);
      setVideo(res?.data?.items);
      dispatch(setHomeVideo(res?.data?.items))
    } catch (error) {
      console.log(error);
    }
  };

  const fetchVideoByCategory = async ()=> {

    try {
      const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=YOURKEYWORD&type=video&key=${API_KEY}`)

    } catch (error) {
      
    }

  }

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
