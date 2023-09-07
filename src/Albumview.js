import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Track from './Track';

import thundercat from './thundercat.png'
import pixel from './Pixel Rain.mp3'
import churches from './CHVRCHES - The Mother We Share.mp3'
import dayglow from './Dayglow - Close to You.mp3'

export default function Albumview({setCurrentSong}) {
    const { albumid } = useParams(); // can be used later to call API

    const [artistName] = useState("Artist Name")
    const [duration] = useState("3:27")

    const [tracklist] = useState([
    {'title': 'Pixel Rain', 'url': pixel, 'artist': "thundercat", 'photoLink': thundercat}, 
    {'title': 'mother', 'url': churches }, 
    {'title': 'close', 'url': dayglow}])

    return (
        <div className='tracklist'>
            {tracklist.map((p)=><Track setCurrentSong={setCurrentSong} object={p} />)}
        </div>
    )
}
