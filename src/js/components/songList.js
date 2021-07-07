import React from 'react';
const SongList = (props) => {
    function buttonAction(element, index) {
        if (props.currentSong.current.src !== element.url) {
            props.pickSong(index);
            props.setSongOn(index);
        }
        if (props.currentSong.current.paused) {
            props.playStop();
            props.setIsPlaying(true);
        } else {
            props.pauseSong();
            props.setIsPlaying(false);
        }
    }
    return (
        <>
            <ul className="list-group">
                <h3 className="h3 text-center my-0 py-3 px-0 bg-secondary rounded-top">NoiseLess Player</h3>
                <div className="overflow-auto ">
                    {/*utilizamos un map, para asignar valores y keys*/}
                    {props.songs.map((element, index) => {
                        return (
                            <li key={index}
                                className={"list-group-item bg-secondary " +
                                    (props.songOn === index && props.isPlaying ? "active" : "")}
                                onClick={(e) => {
                                    buttonAction(element, index);
                                }}>
                                <div className="row">
                                    <div className="col-1 songId me-4" onClick={() => { props.pickSong(index) }}>
                                        {element.id}
                                    </div>
                                    <div className="col-10 songName">{element.name}</div>
                                </div>
                            </li>
                        );
                    })}
                </div>
            </ul>
        </>
    );
};

export default SongList;