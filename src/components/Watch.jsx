import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const Watch = () => {

  const [singleVideo,setSingleVideo]= useState("");

  const[searchParams]= useSearchParams();
  const videoId = searchParams.get('v')

  const getSingleVideo= async ()=>{
    try {
      const res = await axios.get();
      const  resdata= await res.json();
    } catch (error) {
      
    }
  }


  return (
    <div className='ml-4'>
      <div>
      <iframe  className='rounded-md'
     width="700" 
     height="400" 
     src={`https://www.youtube.com/embed/${videoId}?si=bdwYtj6QKxOcL2r2`}
     title="YouTube video player" 
     frameborder="0" 
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
     allowfullscreen>
     </iframe>
     <h1 className='font-bold text-lg '>Title</h1>
      </div>

      <div>

      </div>
     
    </div>
  )
}

export default Watch