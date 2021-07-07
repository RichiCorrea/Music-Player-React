import React from 'react';
import { IoPause, IoPlay, IoPlaySkipBack, IoPlaySkipForward } from 'react-icons/io5'
const Player = (props) => {
    function skipBack() {
        if (props.songs[props.songOn - 1] !== undefined) {
            props.pickSong(props.songOn - 1);
            props.playStop();
            props.setSongOn(props.songOn - 1);
            props.setIsPlaying(true);
        } else if (props.songs[props.songOn - 1] === undefined) {
            props.pickSong(props.songs.length - 1);
            props.playStop();
            props.setSongOn(props.songs.length - 1);
            props.setIsPlaying(true);
        }
    }
    function skipForward() {
        if (props.songs[props.songOn + 1] !== undefined) {
            props.pickSong(props.songOn + 1);
            props.playStop();
            props.setSongOn(props.songOn + 1);
        } else if (props.songs[props.songOn + 1] === undefined) {
            props.pickSong(0);
            props.playStop();
            props.setSongOn(0);
        }
    }
    function playPause() {
        if (props.currentSong.current.paused) {
            props.playStop();
            props.setIsPlaying(true);
        } else {
            props.pauseSong();
            props.setIsPlaying(false);
        }
    }
    return (
        <div className="player d-flex justify-content-center bg-secondary fs-1 rounded-bottom pb-3">
            <div onClick={() => { skipBack(); }}>
                <IoPlaySkipBack />
            </div>
            <div onClick={() => { playPause(); }}>
                {!props.isPlaying ? (<IoPlay />) : (<IoPause />)}
            </div>
            <div onClick={() => { skipForward(); }}>
                <IoPlaySkipForward />
            </div>
        </div>
    );
}
export default Player;