import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentsList from './CommentsList';



export class Settings extends Component {
    render() {
        return (
            <div className="main-div">
                <CommentsList />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
