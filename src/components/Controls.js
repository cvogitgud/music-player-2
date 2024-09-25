import { useState, useEffect } from "react";
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
import ProgressBar from "./ProgressBar";

const Controls = ({
    tracks,
    currentTrack,
    audioRef,
    setCurrentTrack,
    currentTrackIndex,
    setCurrentTrackIndex,
    numTracks,
}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [shuffleOn, setShuffleOn] = useState(false);
    const [repeatOn, setRepeatOn] = useState(false);

    // controls
    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying, audioRef]);

    const onLoadedMetadata = () => {
        // set duration?
        if (isPlaying) {
            audioRef.current.play();
        }
    };

    const onEnded = () => {
        if (!repeatOn) {
            //handleNext();
        } else {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        }
    };

    const togglePlayPause = () => {
        setIsPlaying((prev) => !prev);
    };

    const toggleShuffle = () => {
        setShuffleOn((prev) => !prev);
    };

    const toggleRepeat = () => {
        setRepeatOn((prev) => !prev);
    };

    const skipNext = () => {
        if (currentTrackIndex === numTracks - 1) {
            setCurrentTrackIndex(0);
            setCurrentTrack(tracks[0]);
        } else {
            setCurrentTrackIndex((prev) => prev + 1);
            setCurrentTrack(tracks[currentTrackIndex + 1]);
        }

        setIsPlaying(true);
    };

    const skipPrev = () => {
        if (currentTrackIndex === 0) {
            setCurrentTrackIndex(numTracks - 1);
        } else {
            setCurrentTrackIndex((prev) => prev - 1);
            setCurrentTrack(tracks[currentTrackIndex - 1]);
        }
        setIsPlaying(true);
    };

    return (
        <div className="flex justify-center gap-2 mb-5">
            <audio
                src={currentTrack.src}
                ref={audioRef}
                onLoadedMetadata={onLoadedMetadata}
                onEnded={onEnded}
            />
            <Stack className="w-96">
                <ProgressBar isPlaying={isPlaying} audioRef={audioRef} />
                <div className="buttons flex justify-between mt-3">
                    <Button className="text-gray-50" onClick={toggleShuffle}>
                        {shuffleOn ? <ShuffleOn /> : <Shuffle />}
                    </Button>
                    <Button onClick={skipPrev}>
                        <SkipPrevious />
                    </Button>
                    <Button onClick={togglePlayPause}>
                        {isPlaying ? <Pause /> : <PlayArrow />}
                    </Button>
                    <Button onClick={skipNext}>
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
