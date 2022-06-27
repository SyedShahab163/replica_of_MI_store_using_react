import React from 'react'
import "../styles/VideoCard.css"



// const playButton = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"></svg>
// fill="#000000"><path d="M0 0h24v24H0z"fill='none'/><path="M8 5v14111-7z"/></svg>         
const VideoCard = ({image,name,index}) => {
  return (
    <div className='video' style={{blckgroundImage:'url(${image})'}} >
     <a href='#/'>{playButton}</a> 
     <p>{name}</p>
    </div>
  )
} 

export default VideoCard
