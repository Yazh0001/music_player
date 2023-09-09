import React, { useState } from 'react'
import thundercat from './thundercat.png'
// import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Artists() {
  const [artistList] = useState([
    {
        "artistId": "d1b651fa-dff1-4a0c-9730-49acb3348aef",
        "name": "Thundercat",
        "bio": "Thundercat is the virtuoso bassist & singer Stephen Bruner, a mercurial talent and multi-GRAMMY award winner.",
        "photoLink": thundercat
    }
])

  // useEffect(() => {
  //   axios.get('http://ec2-54-173-144-181.compute-1.amazonaws.com:5115/artists').then((res)=>{
  //   setArtistList(res.data)
  //   
  // })
  // }, [])
  

  return (
    <div className='collection'>{artistList.map((p)=><Artist artistId={p.artistId} name={p.name} photoLink={p.photoLink}/>)}
    </div>
  )
}


function Artist({ artistId, name, photoLink }) {
  return (
    <Link className='linki' to={'/artists/' + artistId}>
    <div className='albumcard'>
      <img className='artistimg' src={photoLink} alt='Img' />
      <div className='albumtitle'>{name}</div>
    </div>
    </Link>
  )
}