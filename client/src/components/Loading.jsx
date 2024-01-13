import React from "react";
import loadingGif from "../assets/media/gifs/loading.gif";

export default function Loading({width}) {
  return (
    
    <div className="">
        <img width={width} className="mx-auto" src={loadingGif} alt="" />
    </div>
    
    
  );
}
