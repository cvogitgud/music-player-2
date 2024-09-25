import no_album_cover from "../data/img/no_album_cover.jpg";

const SongInfo = ({ currentTrack }) => {
    return (
        <div className="flex justify-center mt-7">
            <div>
                {currentTrack.thumbnail ? (
                    <img
                        src={currentTrack.thumbnail}
                        alt="Current track album cover"
                        className="size-96 object-cover shadow-xl rounded"
                    />
                ) : (
                    <img
                        src={no_album_cover}
                        alt="Missing album art"
                        className="size-96 object-cover shadow-xl rounded"
                    />
                )}

                <p className="mt-5">
                    {currentTrack.artist} - {currentTrack.title}
                </p>
            </div>
        </div>
    );
};

export default SongInfo;
