import { useState, useRef } from "react";
import tracks from "../data/tracks.js";
import SongInfo from "./SongInfo";
import Controls from "./Controls";

const Player = () => {
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const numTracks = tracks.length;
    const [currentTrack, setCurrentTrack] = useState(tracks[currentTrackIndex]);

    const audioRef = useRef(0);
    return (
        <section className="bg-blue-500 w-2/5">
            <SongInfo currentTrack={currentTrack} />
            <Controls
                tracks={tracks}
                currentTrack={currentTrack}
                setCurrentTrack={setCurrentTrack}
                currentTrackIndex={currentTrackIndex}
                setCurrentTrackIndex={setCurrentTrackIndex}
                numTracks={numTracks}
                audioRef={audioRef}
            />
        </section>
    );
};

export default Player;
