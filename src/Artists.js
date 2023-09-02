import React, { useState } from 'react'

export default function Artists() {
  const [artistList] = useState(['Artist 1 ', 'Artist 2 ', 'Artist 3'])

  return (
    <div className='collection'>{artistList}</div>
  )
}
