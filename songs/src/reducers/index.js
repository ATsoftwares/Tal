import {combineReducers} from 'redux';

const songsList = () =>{
    return [
        {name:'a',duration:'1:00'},
        {name:'b',duration:'1:00'},
        {name:'c',duration:'1:00'}
    ]
}

const selectSong = (song=null, action) =>{
    if(action.type === "SONG_SELECTED"){
        return action.payload;
    }
    
    return song;
}

export default combineReducers({
    songsList:songsList,
    selectSong:selectSong
});