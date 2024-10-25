import tracks from "../data/tracks.js";

// shuffle on controls should affect display of tracklist
// queue manip: add, remove, move up or down
//

const Tracklist = () => {
    let count = 1;
    return (
        <section className="bg-red-500 w-3/5 pl-5">
            <div className="title text-2xl my-5">
                <p>Track list</p>
            </div>
            <div className="track-list">
                {tracks.map((track) => (
                    <div className="flex rounded border-solid border border-slate-500/10 shadow-md p-2 pl-3 mb-3 mr-5 w-30">
                        <p className="mr-5">{count++}</p>
                        <p key={track.id}>{track.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Tracklist;
