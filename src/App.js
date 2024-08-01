import Tracklist from "./components/Tracklist";
import Header from "./components/Header";
import Player from "./components/Player";

function App() {
    return (
        <div className="App">
            <Header />
            <div className="flex">
                <Player />
                <Tracklist />
            </div>
        </div>
    );
}

export default App;
