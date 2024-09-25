import { useState, useRef, useCallback, useEffect } from "react";
import { Slider } from "@mui/material/";

const ProgressBar = ({ isPlaying, audioRef }) => {
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [progress, setProgress] = useState(0);

    // dynamic progress bar
    const playAnimationRef = useRef();
    const progressBarRef = useRef();

    const repeat = useCallback(() => {
        const currentTime = audioRef.current.currentTime;
        setCurrentTime(currentTime);
        progressBarRef.current.value = progress;
        //console.log(progress);
        playAnimationRef.current = requestAnimationFrame(repeat);
    }, [audioRef, progress]);

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
        playAnimationRef.current = requestAnimationFrame(repeat);
    }, [isPlaying, audioRef, repeat]);

    const handleProgressChange = (event, value) => {
        console.log(value);
        setProgress(value);
        audioRef.current.currentTime =
            (progress / 100) * audioRef.current.duration;
        setCurrentTime(audioRef.current.currentTime);
    };

    const formatTime = (time) => {
        if (time && !isNaN(time)) {
            const minutes = Math.floor(time / 60);
            const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
            const seconds = Math.floor(time % 60);
            const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
            return `${formatMinutes}:${formatSeconds}`;
        }
        return "00:00";
    };

    return (
        <div>
            <Slider
                size="small"
                defaultValue={0}
                ref={progressBarRef}
                onChange={handleProgressChange}
                className="w-96 flex justify-center flex-col"
            />

            <div className="time-display flex justify-between">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(audioRef.current.duration)}</span>
            </div>
        </div>
    );
};

export default ProgressBar;
