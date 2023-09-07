import React from 'react'
import { useState } from 'react'
import thundercat from './thundercat.png'

export default function Artistview() {
    const [artist, setArtist] = useState(
        {
            "artistId": "d1b651fa-dff1-4a0c-9730-49acb3348aef",
            "name": "Thundercat",
            "bio": "Thundercat is the virtuoso bassist & singer Stephen Bruner, a mercurial talent and multi-GRAMMY award winner.",
            "photoLink": thundercat
        }
    )

    

  return (
    <div>
        <div className='banner'>
            <img className='bigimg' src={artist.photoLink} alt='Img' />
            <div>
                <h1 className='bigtitle'>{artist.name}</h1>
                <div className='artistbio'>{artist.bio}</div>
            </div>
        </div>
        <div className='collection'>
            <div className='albumcard'></div>
        </div>
    </div>
  )
}
