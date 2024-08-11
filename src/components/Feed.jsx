import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const Feed = () => {
  return (
    <div className="flex flex-col ml-5">
      <div>
        <ButtonList />
      </div>

      <div>
        <VideoContainer />
      </div>
    </div>
  );
};

export default Feed;
