import { combineReducers } from "redux";

// static reducer for keeping lists of songs
const songsReducer = () => {
    return [
        { title: 'Melodrama', duration: '4:05' },
        { title: 'Macarena', duration: '2:25' },
        { title: 'Time to say goodbye', duration: '3:48' },
        { title: 'Nessun Dorma', duration: '5:25' }
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    };

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});