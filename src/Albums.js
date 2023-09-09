import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import axios from 'axios'

export default function Albums() {
  
  const [albumList] = useState([
    {
        "albumId": "899809e8-57db-455e-bef0-e7aef2747043",
        "name": "It Is What It Is",
        "artLink": "",
        "releaseDateTime": "1999-09-09T00:00:00+00:00",
        "songs": [],
        "artists": [
            {
                "id": "e117175a-7853-4193-badb-f59276ce88dd",
                "name": "Thundercat",
                "photoUrl": ""
            }
        ]
    }
])

  // axios.get('http://ec2-54-173-144-181.compute-1.amazonaws.com:5115/albums').then((res)=>{
  //   setAlbumList(res.data)
  // })

  return (
    <div className='collection'>
      {albumList.map((p) => <Album title={p.name} artist={p.artists[0]['name']} cover={p.artlink} />)}
    </div>
  )
}

function Album({ title, artist, cover }) {
  return (
    <Link className='linki' to={'/albums/' + title}>
      <div className='albumcard'>
        <img className='albumimg' src={cover} alt='Img' />
        <div className='albumtitle'>{title}</div>
        <div className='albumartist'>{artist}</div>
      </div>
    </Link>
  )
}
