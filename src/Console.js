import React, { useState } from 'react'
import { useRef } from 'react'
import Volume from './Volume';

import thundercat from './thundercat.png'
export default function Console({audioElem, currentSong, setCurrentSong, songs, isplaying, setisplaying}) {
  const clickRef = useRef();
  const [volume, setVolume] = useState();

  const handleVolumeChange = (newVolume) => {
    
    setVolume(newVolume);
    console.log(audioElem.volume)
    
    audioElem.current.volume = newVolume / 100;
  };

  const checkWidth = (e)=>
  {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const divprogress = offset / width * 100;
    audioElem.current.currentTime = divprogress / 100 * currentSong.length;

  }


  const playpause = ()=>{
    setisplaying(!isplaying)
  }

  const skiptoNext = ()=>
  {
    const index = songs.findIndex(x=>x.title === currentSong.title);

    if (index === songs.length-1)
    {
      setCurrentSong(songs[0])
    }
    else
    {
      setCurrentSong(songs[index + 1])
    }
    audioElem.current.currentTime = 0;

    
  }

  const skipBack = ()=>
  {
    const index = songs.findIndex(x=>x.title === currentSong.title);
    if (index === 0)
    {
      setCurrentSong(songs[songs.length - 1])
    }
    else
    {
      setCurrentSong(songs[index - 1])
    }
    audioElem.current.currentTime = 0;
    
  }

  const prettytime = (time)=>{
    if(isNaN(time)){
      return '-:--'
    }
    const minutes = Math.floor(time/60)
    const seconds = Math.floor(time%60)

    if(seconds < 10){
      return minutes+':0'+seconds
    }
    return minutes+":"+seconds
  }

  return (
    <div className='console'>
      <div className='consoleblock'>
        <img className='lilimg' src={currentSong.photoLink} alt="img"/>
        <div>{currentSong.title}</div>
        <div>{currentSong.artist}</div>
        </div>

      <div className='consoleblock'>
        <button onClick={skipBack}>Previous</button>
        {isplaying? <button onClick={playpause}>Pause</button> : <button onClick={playpause}>Play</button>}
        <button onClick={skiptoNext}>Next</button>

        <div className="navigation">
          <div>{prettytime((currentSong.progress/100)*currentSong.length)}</div>
          <div className="navigation_wrapper" onMouseUp={checkWidth} ref={clickRef}>
            <div className="seek_bar" style={{width: `${currentSong.progress+"%"}`}}></div>
          </div>
          <div>{prettytime(currentSong.length)}</div>
        </div>
        
      </div>

      <div className='consoleblock'><Volume volume={volume} onVolumeChange={handleVolumeChange}/></div>
    </div>
  )
}
