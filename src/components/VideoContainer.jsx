import React, { useEffect, useState } from "react";
import axios from "axios";
import { YOUTUBE_VIDEO_API } from "../constants/youtube";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { API_KEY } from "../constants/youtube";
import { useDispatch, useSelector } from "react-redux";
import { setHomeVideo } from "../utils/appSlice";

const VideoContainer = () => {
  const {video,category}= useSelector((store)=>store.app);

  const dispatch= useDispatch();

  const fetchVideo = async () => {
    try {
      const res = await axios.get(`${YOUTUBE_VIDEO_API}`);
      dispatch(setHomeVideo(res?.data?.items))
    } catch (error) {
      console.log(error);
    }
  };

  const fetchVideoByCategory = async (category)=> {

    try {
      const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${category}&type=video&key=${API_KEY}`)
       dispatch(setHomeVideo(res?.data?.items))
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    if(category==="All"){
      fetchVideo();

    }
    else{
      fetchVideoByCategory(category);

    }
  }, [category]);

  return (
    <div className="grid grid-cols-3 ">
      {video.map((item) => {
        return( 
          <Link to={`/watch?v=${item.id}`} key={typeof item.id === 'object' ? item.id.videoId : video.id }>
          <VideoCard  item={item} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
