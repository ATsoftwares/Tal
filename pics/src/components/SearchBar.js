import React  from 'react';

class SearchBar extends React.Component{
    state = {a:'',b:[]};
    render () {
        return (
            <div>
                <label >{this.state.b}</label>
                <input type="text" value={this.state.a} onChange={e=>this.setState({a:e.target.value})} onClick={e=>{this.props.runMe(this.state.a)}}/>
            </div>
        );
    }
}

export default SearchBar;