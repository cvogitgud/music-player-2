import { useState } from "react";
import { Button, Stack } from "@mui/material/";
import {
    SkipNext,
    SkipPrevious,
    PlayArrow,
    Pause,
    Shuffle,
    ShuffleOn,
    Repeat,
    RepeatOn,
} from "@mui/icons-material";

const Controls = ({ currentTrack, audioRef }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [shuffleOn, setShuffleOn] = useState(false);
    const [repeatOn, setRepeatOn] = useState(false);

    // Toggles
    const togglePlayPause = () => {
        setIsPlaying((prev) => !prev);
    };

    const toggleShuffle = () => {
        setShuffleOn((prev) => !prev);
    };

    const toggleRepeat = () => {
        setRepeatOn((prev) => !prev);
    };

    return (
        <div className="flex justify-center gap-2">
            <audio src={currentTrack.src} />
            <Stack className="w-96">
                Progress bar
                <div className="buttons flex justify-between mt-3">
                    <Button className="text-gray-50" onClick={toggleShuffle}>
                        {shuffleOn ? <ShuffleOn /> : <Shuffle />}
                    </Button>
                    <Button>
                        <SkipPrevious />
                    </Button>
                    <Button onClick={togglePlayPause}>
                        {isPlaying ? <Pause /> : <PlayArrow />}
                    </Button>
                    <Button>
                        <SkipNext />
                    </Button>
                    <Button onClick={toggleRepeat}>
                        {repeatOn ? <RepeatOn /> : <Repeat />}
                    </Button>
                </div>
            </Stack>
        </div>
    );
};

export default Controls;
