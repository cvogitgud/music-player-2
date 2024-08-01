import SongInfo from "./SongInfo";
import Controls from "./Controls";

const Player = () => {
    return (
        <section className="bg-blue-500 w-2/5">
            <SongInfo />
            <Controls />
        </section>
    );
};

export default Player;
