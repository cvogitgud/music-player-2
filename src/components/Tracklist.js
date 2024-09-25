import tracks from "../data/tracks.js";

const Tracklist = () => {
    let count = 0;
    return (
        <section className="bg-red-500 w-3/5">
            Tracklist stuff
            {tracks.map((track) => (
                <div className="flex rounded border-solid border border-slate-500/10 shadow-md p-2 pl-3 mb-3 mr-5 w-30">
                    <p className="mr-5">{++count}</p>
                    <p key={track.id}>{track.title}</p>
                </div>
            ))}
        </section>
    );
};

export default Tracklist;
