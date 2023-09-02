import React, { useState } from 'react'
import obama from './Obama.png'
import trump from './trump.png'
import biden from './biden.png'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Albums() {
  
  const [albumList, setAlbumList] = useState([
    { title: 'Album 1 ', artist: 'Barak Obama', cover: "https://musicplayer-s3b.s3.us-east-1.amazonaws.com/musicplayer/songs/Obama.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCWV1LXdlc3QtMyJGMEQCIFN29uN%2FFcO7BIhSc8Oi6ijOmBVxL3jCJHIF%2FbIUc72aAiB90WE%2BX5f994B1UMKNIRVUBOJrSkdty57xktaw%2FZNVCyrkAggcEAAaDDM2MTE5NTEwNDk4NSIMV4ce97CvIc2gm26PKsECZqFD3RdZApEpxMNb%2Bt1zP2OJbSBPJgsJSl%2BeIwd39gZbyG9Rnp3Vsby5wiWwpn7NnPxEz9JvKghFrU9i2PDWGYKvShMCZOs5ehlxM25lQmRWpOwUuYCq9DOwfcfOGszjou5xHnGEHUOMdDZjtWjminIgI7u1fH3Nn8UnAYr4ezd0bm1eVl%2FhRU1E54ykw7ifjUszjN%2BXiVp0rcPrIx7wfUuQMf8ORQu%2FcCCRONmQnDZZzlQewBANYwAFfOP18idfxxsoEK6ptWnsLQ5g%2B%2F9uhQcI1fyaKLq76aDvMKK7C66SSAJZTPwdZ6TOaelgk7WhU%2B16HqbnRj8osANIZ1b8d%2FjcW4%2BW%2FnKM3MomYdoOx2L7k5NeYXZ1Jkv0fQlkZZaml%2FZq3fMJFT%2FYODk87Y%2FsDC6TpxMHtRJIxs3dhW4i0O1cMKH7zacGOrQC4vGesN760Nl3RDRq08kLNxovtFZU6suOQu7iXhvfK%2FD4KgcBqLosXE57eK9yH%2BUvOQhni3N4AnPKkQfvUfdNeXNhS6nckH1bR1VQpbJRYNjubhb%2B9z8ITqlKSjL5sGFJTCwXZbgiJVhTyV8qZJES2drsegLHUUTcIuXh8GqBld94rPludECwwPSMY4O7XnDdWR9jyWPslLHwszZbGZlantzBs2qmMcMtQzo4VHTg3ydLYMf3KEe3EtFFEU9xGeAS7%2FbCOUNCpF06f9%2BW8WfIBiC0oHMKYOzpjPqfEgdShIxU9oMa5VLxBukqsxfMDzdqBzoiMCfOnT9yCIHGwNKzxwajytgNyI1H4aBjSH3uSzqvffVHYVasgVU2M3dwl%2BaYf4CW8tcd0%2F88M%2B7CYXpG2Xlywfo%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T182727Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAVIGHH5LM5UCHVSUE%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ac577ee4459ad5877e73a4f0bede84c5278f73678554725a2eccd3893859776c" },
    { title: 'Album 2 ', artist: 'Donald Trump', cover: trump },
    { title: 'Album 3 ', artist: 'Joe Biden', cover: biden }])

  axios.get('http://ec2-54-173-144-181.compute-1.amazonaws.com:5115/').then((res)=>{console.log([res.data])})

  return (
    <div className='collection'>
      {albumList.map((p) => <Album title={p.title} artist={p.artist} cover={p.cover} />)}
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
