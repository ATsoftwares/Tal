import React from 'react';
import SongList from './SongList';
import SongDetails from './SongDetails';
class App extends React.Component{
    render(){
        return (
            <div>
                <SongList />
                <SongDetails />
            </div>
        );
    }
}

export default App;