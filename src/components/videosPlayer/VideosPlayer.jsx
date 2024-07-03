import React, { useRef } from 'react'
import "./videosPlayer.css"
import videos from "../../assets/Welcome to Cambridge!.mp4"

const VideosPlayer = ({play,setplay}) => {
    
const player=useRef(null)
const closePlayer=(e)=>{
    if(e.target===player.current){
        setplay(false)
        player.current.pause()
        player.current.currentTime=0
    }
}
  return (
    <div className={`videosPlayer ${play? "":"hide"}`} ref={player} onClick={closePlayer}>
        <video src={videos} autoPlay muted controls></video>
    </div>
  )
}

export default VideosPlayer