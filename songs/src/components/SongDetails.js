import React from 'react';
import {connect} from 'react-redux';

class SongDetail extends React.Component{
    render(){
        if (this.props.selectSong)
        return(
            <div>Song SongDetail
                <div>{this.props.selectSong.name}</div>
            </div>
        )
        else{
            return(
                <div>Song SongDetail
                    <div>select a song</div>
                </div>
            )   
        }
    }
}

const mapState = (state) =>{
    return {selectSong : state.selectSong}
}



export default connect(mapState)(SongDetail);