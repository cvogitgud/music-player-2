import { useState, useRef } from "react";
import tracks from "../data/tracks.js";
import SongInfo from "./SongInfo";
import Controls from "./Controls";

const Player = () => {
    const [currentTrack, setCurrentTrack] = useState(tracks[1]);

    const audioRef = useRef();
    return (
        <section className="bg-blue-500 w-2/5">
            <SongInfo currentTrack={currentTrack} />
            <Controls currentTrack={currentTrack} audioRef={audioRef} />
        </section>
    );
};

export default Player;
