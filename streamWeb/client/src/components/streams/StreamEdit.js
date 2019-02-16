import React from 'react';
import { connect } from 'react-redux';
import { getStream, updateStream } from '../../actions';
import StreamForm from './StreamForm';
import _ from 'lodash';
class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.getStream(this.props.match.params.id);
    }

    renderTitle = () => {
        if (this.props.editItem) {
            return (
                <div>{this.props.editItem.title}</div>
            );
        }
    }
    render() {

        if (this.props.editItem) {
            return (

                <StreamForm
                    initialValues={{title : this.props.editItem.title}}
                    onSub={this.onSubmit} />
            )
        }
        else return null;

    }

    onSubmit = (values) => {
        this.props.updateStream(this.props.match.params.id,values);
    }
}

const mapState = (state, props) => {
    return { editItem: state.stream[props.match.params.id] }
}

export default connect(mapState, { getStream, updateStream })(StreamEdit);