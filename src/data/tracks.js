import inyourarms from "./tracks/saib. - in your arms..mp3";
import raw from "./tracks/Victoria Justice - RAW.mp3";
import million from "./tracks/Tommy Richman - MILLION DOLLAR BABY.mp3";
import slowdancing from "./tracks/Slow Dancing In a Burning Room- John Mayer (With Lyrics).mp3";

import thegardenofwords from "./img/thegardenofwords.jpg";
import raw_thumbnail from "./img/Raw.png";
import continuum_album_cover from "./img/continuum_album_cover.jpg";

const tracks = [
    {
        title: "RAW",
        src: raw,
        thumbnail: raw_thumbnail,
        artist: "Victoria Justice",
        id: "1",
    },
    {
        title: "in your arms.",
        src: inyourarms,
        thumbnail: thegardenofwords,
        artist: "saib",
        id: "2",
    },
    {
        title: "Million Dollar Baby",
        src: million,
        artist: "Tommy Richman",
        id: "3",
    },
    {
        title: "Slow Dancing in a Burning Room",
        src: slowdancing,
        thumbnail: continuum_album_cover,
        artist: "John Mayer",
        id: "4",
    },
];

export default tracks;
