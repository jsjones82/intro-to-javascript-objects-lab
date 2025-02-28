// const music = {
//      currentTrack: "Just Ken",
//      trackIx: 0,
//    volume: 70,
//    mute({
//     music.volume = 0;
//     console.log("Youg Song Is Muted")
//    },
//    next({
//     music.trackIdx += 1;
//    })
// };

// console.log(music);

// // //dot notation

// console.log(music.volume);
// // //ads
// music.currentPlaylist = ['Just Ken', 'Hey Blondie', 'What Was I Made For', 'Dance The Night'];
// console.log(music);
// console.log("Current Playlist:",music.currentPlaylist);
// console.log("Current Track:",music.currentTrack);

// console.log("myPlaylist:" ,music.myPlaylist);
// delete music.myPlaylist;
// console.log(music.myPlaylist)


//Js Object
const music = {
    currentTrack: "Just Ken",
    trackIdx: 0,
    volume: 70,
    mute(){
        music.volume = 0;
        console.log("Your song is now muted...");
        },

    next(){
     music.trackIdx += 1;
     music.currentTrack = music.currentPlaylist[music.trackIdx];
     console.log(`Current Track Playing -> ${music.currentPlaylist[music.trackIdx]}`)
    }

};