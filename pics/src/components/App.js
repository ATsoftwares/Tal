import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import unsplash from '../api/unsplash';
import ImagesList from './ImagesList';
class App extends React.Component{
    state = {images:[]};
    runMe = async (term) =>{
        console.log(term);
         const result= await unsplash.get('/todos');
        console.log(result);
        this.setState({images:result.data});
    };

    render(){
        return (
            <div>
                <ImagesList images={this.state.images}/>
                <SearchBar runMe={this.runMe} />
            </div>
        );
    }
}

export default App;