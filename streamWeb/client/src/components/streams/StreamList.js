import React from 'react';
import { connect } from 'react-redux';
import { getStreams } from '../../actions';
import { Link } from 'react-router-dom';
class StreamList extends React.Component {
    componentDidMount() {
        this.props.getStreams();
    }

    renderAdmin = (userId,streamId) => {
        if (userId === this.props.userId) {
            const url =`streams/edit/${streamId}`;
            return (
                <div>
                    <Link to={url}>edit</Link>
                    <button>delete</button>
                </div>
            )
        }
    }

    renderCreate = () => {
        if (this.props.isSignIn) {
            return (
                <div>
                    <Link to="/streams/new">create</Link>
                </div>
            );
        }
    }

    renderStreamList = () => {
        return (
            this.props.streams.map(stream => {
                return (
                    <div>{stream.title}
                        <div>{this.renderAdmin(stream.userId,stream.id)}</div>
                    </div>
                );
            })
        )
    }

    render() {
        return (
            <div>
                <div>
                    {this.renderStreamList()}
                    {this.renderCreate()}
                </div>
            </div>

        );
    }
}

const mapState = (state) => {
    return {
        streams: Object.values(state.stream),
        userId: state.authReducer.userId,
        isSignIn:state.authReducer.isSignIn
    }
}

export default connect(mapState, { getStreams })(StreamList);