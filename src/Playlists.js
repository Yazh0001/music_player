import React, { useState } from 'react'

export default function Playlists() {
  const [playlistList] = useState(['Playlist 1 ', 'Playlist 2 ', 'Playlist 3'])

  return (
    <div className='collection'>{playlistList}</div>
  )
}
