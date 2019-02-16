import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDetails';
import ApprovalCard from './ApprovalCard';
const App = () =>{
    return (
        <ApprovalCard>
            <CommentDetail author="gal" />
        </ApprovalCard>
    );
}

ReactDOM.render(< App />,document.querySelector('#root'));