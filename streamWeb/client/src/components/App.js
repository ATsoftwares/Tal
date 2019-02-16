import React from 'react';
import {Router,Route} from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamList from './streams/StreamList';
import StreamEdit from './streams/StreamEdit';
import StreamShow from './streams/StreamShow';
import StreamDelete from './streams/StreamDelete';
import Header from './Header';
import history from '../history';
class App extends React.Component{
    render(){
        return(
            <Router history={history}>
                {/* <div>App</div> */}
                <div>
                <Header />
                <Route path="/" exact component={StreamList}/>
                <Route path="/streams/new" exact component={StreamCreate}/>
                <Route path="/streams/edit/:id" exact component={StreamEdit}/>
                <Route path="/streams/show" exact component={StreamShow}/>
                <Route path="/streams/delete" exact component={StreamDelete}/>
                </div>
            </Router>
        );
    }
}

export default App;