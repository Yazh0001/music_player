import React from 'react'

export default function Track({setCurrentSong, object}) {

    const switchSongs = ()=>{
        setCurrentSong(object)
    }
    return (
        <div onClick={switchSongs} className='track'>
            <div>{object.title}</div>
            <div className='duration'>3:10</div>
        </div>
    )
}
