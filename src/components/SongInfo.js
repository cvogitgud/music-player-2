import tracks from "../data/tracks.js";

const SongInfo = () => {
    return (
        <div className="flex justify-center mt-7">
            <div>
                <img
                    src={tracks[1].thumbnail}
                    alt=""
                    className="size-96 object-cover shadow-xl rounded"
                />
                <p>
                    {tracks[1].artist} - {tracks[1].title}
                </p>
            </div>
        </div>
    );
};

export default SongInfo;
