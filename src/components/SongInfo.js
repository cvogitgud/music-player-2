const SongInfo = ({ currentTrack }) => {
    return (
        <div className="flex justify-center mt-7">
            <div>
                <img
                    src={currentTrack.thumbnail}
                    alt=""
                    className="size-96 object-cover shadow-xl rounded"
                />
                <p>
                    {currentTrack.artist} - {currentTrack.title}
                </p>
            </div>
        </div>
    );
};

export default SongInfo;
