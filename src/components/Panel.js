import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeComment } from '../store/actions/Panel';



export class Panel extends Component {


    render() {
        return (
            <div className="basis50">
                <p className="title-input">Basic Metabolic Panel:</p>
                <div className="flex ju-btw algn-center">
                    <p className="title-input">Result:</p>
                    <div style={{ width: '300px' }}><input className="simple-input" /></div>
                    <p className="title-input">Mg/dl</p>
                </div>
                <div className="flex ju-btw">
                    <div className="grey-btn">Hold</div>
                    <div className="green-btn">Next</div>
                </div>
                <div>
                    <p className="title-input">Comment Code:</p>
                    <div style={{ width: '300px' }}><input className="simple-input" /></div>
                    <div style={{ marginTop: '10px' }}>
                        <textarea
                            className="gross-other"
                            value={this.props.test.comment}
                            placeholder="Comment"
                            onChange={this.props.changeComment}
                        ></textarea>
                    </div>
                </div>
            
                <div className="flex ju-end mgh">
                    <div className="grey-btn marg-r15">Clear</div>
                    <div className="green-btn">Submit</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    test: state.test
})

const mapDispatchToProps = dispatch => ({
    changeComment: (e) => dispatch(changeComment(e))
})

export default connect(mapStateToProps, mapDispatchToProps)(Panel)
