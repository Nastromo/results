import React, { Component } from 'react';
import { connect } from 'react-redux';
import InstrumentList from './InstrumentList';
import PendingList from './PendingList';




export class Pending extends Component {

    changeTab = (e) => {

    }

    returnNavigation = () => {
        return (
            <div className="flex">
                {
                    this.props.depsList.map((item, i) => {
                        return (
                            <div onClick={this.changeTab} id={i} key={i} className={item.isActive ? `nav-it-act` : `nav-it-no`}>
                                {item.name}
                            </div>
                        )
                    })
                }
            </div>
        )
    }


    render() {
        return (
            <div className="padff">
                {this.returnNavigation()}
                <div className="flex">
                    <InstrumentList />
                    <PendingList />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    depsList: [{ name: `Chemistry`, isActive: true }, { name: `Hemotology`, isActive: false }, { name: `Microbiology`, isActive: false }]
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Pending)
