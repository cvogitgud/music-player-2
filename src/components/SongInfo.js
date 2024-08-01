import placeholder from "../data/img/thegardenofwords.jpg";

const SongInfo = () => {
    return (
        <div className="flex justify-center mt-7">
            <div>
                <img
                    src={placeholder}
                    alt=""
                    className="size-96 object-cover shadow-xl rounded"
                />
                <p>this is the song info</p>
            </div>
        </div>
    );
};

export default SongInfo;
