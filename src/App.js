
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Console from './Console';
import Albums from './Albums.js'
import Artists from './Artists.js'
import Playlists from './Playlists.js'
import Navbar from './Navbar';
import Albumview from './Albumview'
import Artistview from './Artistview';

import pixel from './Pixel Rain.mp3'
import churches from './CHVRCHES - The Mother We Share.mp3'
import dayglow from './Dayglow - Close to You.mp3'

import { useState, useRef, useEffect } from 'react';

function App() {
  
  const [songs] = useState([{'title': 'Pixel Rain', 'url': pixel}, {'title': 'mother', 'url': churches }, {'title': 'close', 'url': dayglow}]);
  const [isplaying, setisplaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songs[0]);


  const audioElem = useRef();

  useEffect(() => {
    if (isplaying) {
      audioElem.current.play();
    }
    else {
      audioElem.current.pause();
    }
  }, [isplaying, currentSong])

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;

    setCurrentSong({ ...currentSong, "progress": ct / duration * 100, "length": duration })

  }

  return (
    <div className='main-contain'>
      <audio src={currentSong.url} ref={audioElem} onTimeUpdate={onPlaying}/>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Albums />} />
          <Route path='/albums/:albumid' element={<Albumview setCurrentSong={setCurrentSong}/>} />
          <Route path='/artists/:artistid' element={<Artistview />} />
          <Route path='/artists' element={<Artists />} />
          <Route path='/playlists' element={<Playlists />} />
        </Routes>
      </BrowserRouter>
      <Console audioElem={audioElem} currentSong={currentSong} setCurrentSong={setCurrentSong} songs={songs} isplaying={isplaying} 
      setisplaying={setisplaying}/>
    </div>
  );
}

export default App;
