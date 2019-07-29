import React, { Component } from 'react';
import { connect } from 'react-redux';



export class Panel extends Component {


    render() {
        return (
            <div className="basis50 marg-ri-20">
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
                            value=""
                            placeholder="Comment"
                            onChange={this.props.changeComment}
                        ></textarea>
                    </div>
                </div>
                <div className="flex ju-btw">
                    <div className="green-btn">Prelim Test</div>
                    <div className="green-btn">Finalize Test</div>
                    <div className="green-btn">Hold Test</div>
                    <div className="green-btn">Cancel Test</div>
                    <div className="green-btn">Delete test</div>
                    <div className="green-btn">Audit</div>
                    <div className="green-btn">Clear</div>
                    <div className="green-btn">Submit</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Panel)
