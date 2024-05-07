import logo from './logo.svg';
import './App.css';
import React, { useRef, useState, useEffect } from 'react';

function App() {
  const starTrekLogo = process.env.PUBLIC_URL + '/photos/star-trek-logo.png';
  const audioRef = useRef();
  const [navOpen, setNavOpen] = useState(false);
  const [volume, setVolume] = useState(.1);
  const handleLogoClick = () => {
    audioRef.current.play();
    setNavOpen(!navOpen);
  }
  const handleVolumeChange = (event) => {
    const volume = event.target.value;
    audioRef.current.volume = volume;
    setVolume(volume);
  }
  useEffect(() => {
    audioRef.current.volume = volume;
  } , [volume]);
  return (
    <div className="App">
      <div className='logo-nav'>
        <img
          className='starTrekLogo'
          src={starTrekLogo}
          alt="Star Trek logo"
          onClick={handleLogoClick}
        />
        <input
          className='volume-slider'
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
        <nav className={navOpen ? 'nav-open' : 'nav-closed'}>
          {/* Add your navigation links here */}
        </nav>
      </div>

      <header className="App-header">
        <h1>Welcome to my website</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <audio ref={audioRef} src='https://www.trekcore.com/audio/communicator/tng_chirp3_clean.mp3'/>
        <p>
          I am a software engineer and I am looking for a job.
        </p>
        <p>
        Click on the communicator to open the navigation menu.
        </p>
      </header>
    </div>
  );
}

export default App;
