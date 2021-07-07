import { useEffect, useRef, useState } from 'react';
import Player from './js/components/player.js';
import SongList from './js/components/songList.js';

function App() {
    const [songs, setSongs] = useState([]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [songOn, setSongOn] = useState(0);
    let songPlayer = useRef(null);
    let getFetch = () => {
        fetch("https://assets.breatheco.de/apis/sound/songs")
            .then((result) => {
                return result.json();
            }).then((data) => {
                setSongs((data));
            }).catch((error) => {
                console.error(error);
            });
    };
    useEffect(() => {
        getFetch()
    });
    let pickSong = (index) => {
        songPlayer.current.src = `https://assets.breatheco.de/apis/sound/${songs[index].url}`;
    };
    let playStop = () => {
        songPlayer.current.play();
    }
    let pauseSong = () => {
        songPlayer.current.pause();
    }
    return (
        <>
            <div className="row">
                <div className="col-md-5 col-sm-7 m-auto px-0 mediaplayer">
                    <SongList
                        songs={songs}
                        currentSong={songPlayer}
                        playStop={playStop}
                        pickSong={pickSong}
                        pauseSong={pauseSong}
                        isPlaying={isPlaying}
                        setIsPlaying={setIsPlaying}
                        setSongOn={setSongOn}
                        songOn={songOn} />
                    <Player
                        songs={songs}
                        playStop={playStop}
                        currentSong={songPlayer}
                        pauseSong={pauseSong}
                        isPlaying={isPlaying}
                        setIsPlaying={setIsPlaying}
                        pickSong={pickSong}
                        setSongOn={setSongOn}
                        songOn={songOn} />
                </div>
            </div>
            <audio src={(songs[0] !== null && songs[0] !== undefined) ?
                "https://assets.breatheco.de/apis/sound/" + songs[0].url :
                ""}
                ref={songPlayer}>

            </audio>
        </>
    );
}

export default App;
