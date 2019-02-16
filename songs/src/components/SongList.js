import React from 'react';
import {connect}  from 'react-redux';
import {selectSong} from '../actions';

class ListSong extends React.Component{
     renderList = () =>{
        return (
            this.props.songs.map(song =>{
                return (
                    <div key={song.name} onClick={()=>this.props.selectSong(song)}>{song.name}</div>
                );
            })
        )
    }
   render(){
       return (
        <div>
            {this.renderList()}
        </div>
       );
   }
}

const mapState = (state) =>{
    console.log(state);
    return {songs : state.songsList};
}

export default connect(mapState,{selectSong})(ListSong);