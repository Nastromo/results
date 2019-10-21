import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchInput from './SearchInput';
import TestList from './TestList';
import Panel from './Panel';
import ElementList from './ElementList';
import { setTests } from '../store/actions/Results';



export class Main extends Component {


    render() {
        return (
            <div className="full-width">
                <p className="title-input">Accession:</p>
                <SearchInput
                    id="accession"
                    type="text"
                    view="search-input"
                    url="accession"
                    onItemClick={this.props.setTests}
                    isLoading={this.props.isLoadAcc}
                    searchQuery={this.props.searchAcc}
                    searchResults={this.props.accession} />
                <div className="flex ju-btw mfjhg">
                    <div>
                        <p className="title-input">Name:</p>
                        <p>{this.props.acc.name}</p>
                    </div>

                    <div>
                        <p className="title-input">DOB:</p>
                        <p>{this.props.acc.dob}</p>
                    </div>

                    <div>
                        <p className="title-input">Sex:</p>
                        <p>{this.props.acc.sex}</p>
                    </div>

                    <div>
                        <p className="title-input">Client:</p>
                        <p>{this.props.acc.clientLocationId}</p>
                    </div>

                    <div>
                        <p className="title-input">Physician:</p>
                        <p>{this.props.acc.physicianId}</p>
                    </div>
                </div>

                <TestList />
                <div className="flex ju-btw mar-top-20">
                    <Panel />
                    <ElementList />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    acc: state.acc,
    isLoadAcc: state.searchLoading.accession,
    searchAcc: state.searchQuery.accession,
    accession: state.searchResults.accession,
})

const mapDispatchToProps = dispatch => ({
    setTests: (e) => dispatch(setTests(e)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
