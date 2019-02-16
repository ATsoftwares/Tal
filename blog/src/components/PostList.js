import React from 'react';
import { connect } from 'react-redux';
import { getPostsAndUsers } from '../actions';
import User from './User';
class PostList extends React.Component {
    renderList = () => {
        return this.props.posts.map(post => {
            return (<div key={post.id}>
                {post.title}
                <User userId = {post.userId} />
                </div>);
        });
    }

    componentDidMount() {
        this.props.getPostsAndUsers();
    }

    render() {
        return (
            <div>{this.renderList()}</div>
        );
    }
}




const mapState = (state) => {
    //console.log(state);
    return { posts: state.posts }
}

export default connect(mapState, { getPostsAndUsers })(PostList);
